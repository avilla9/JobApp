import json
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from collections import Counter
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponse
from .models import Job
from .serializers import *

def mostUsedSkills(request):
    """List of most used skills."""
    if request.method == 'GET':
        try:
            skills = Job.objects.exclude(
                skills__isnull=True)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        allSkills = []
        for set in skills:
            allSkills += set.skills
        cSkills = Counter(allSkills)
        groupedSkills = sorted([[k, ]*v for k, v in cSkills.items()], key=len, reverse=True)

        data = []
        for group in groupedSkills:
            data.append({
                'skill': group[0],
                'count': len(group)
            })
        return HttpResponse(json.dumps(data), content_type="application/json")


@api_view(['GET', 'POST'])
def jobsList(request):
    """List  jobs, or create a new job."""
    if request.method == 'GET':
        data = []
        nextPage = 1
        previousPage = 1
        jobs = Job.objects.all()
        page = request.GET.get('page', 1)
        paginator = Paginator(jobs, 10)
        try:
            data = paginator.page(page)
        except PageNotAnInteger:
            data = paginator.page(1)
        except EmptyPage:
            data = paginator.page(paginator.num_pages)

        serializer = JobSerializer(
            data, context={'request': request}, many=True)
        if data.has_next():
            nextPage = data.next_page_number()
        if data.has_previous():
            previousPage = data.previous_page_number()

        return Response({'data': serializer.data, 'count': paginator.count, 'numpages': paginator.num_pages, 'nextlink': '/api/jobs/?page=' + str(nextPage), 'prevlink': '/api/jobs/?page=' + str(previousPage)})

    elif request.method == 'POST':
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def jobsDetail(request, pk):
    """Retrieve, update or delete a job by id/pk."""
    try:
        jobs = Job.objects.get(pk=pk)
    except Job.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = JobSerializer(jobs, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = JobSerializer(
            jobs, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        jobs.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
