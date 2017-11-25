from django.db import models

# Create your models here
class Show(models.Model):
	title = models.CharField(max_length=128)
	category = models.CharField(max_length=24)
	url = models.CharField(max_length=24)

class User(models.Model):
	name = models.CharField(max_length=128)
	favorites = models.ManyToManyField(Show)