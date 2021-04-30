from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.views import *

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('comments/', CommentsListAPIView.as_view()),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view())
]
