from django.contrib.postgres.fields import ArrayField
from django.db import models


class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=5000)
    skills = ArrayField(models.CharField(max_length=200), null=True)
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
