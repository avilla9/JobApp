from rest_framework import serializers
from .models import Job


class JobSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = [
            'pk',
            'title',
            'description',
            'skills',
            'created_on',
        ]


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Job
        fields = ['skills']
