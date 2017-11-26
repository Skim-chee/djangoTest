from api.models import User, Show
from rest_framework import serializers

class ShowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Show
        fields = ('url', 'title', 'category', 'url')


class UserSerializer(serializers.HyperlinkedModelSerializer):
	# Creates the link between User -> User.favorites -> Shows
	favorites = serializers.HyperlinkedRelatedField(view_name='show-detail', many=True, queryset=Show.objects.all())
	class Meta:
		model = User
		fields = ('url', 'name', 'favorites')