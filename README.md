# djangoTest

Simple react/django app mocking Broadway api usage

## Setting up

```
> git clone https://github.com/Skim-chee/djangoTest.git
> cd djangoTest 
> python3 - venv /path/to/myenv
> source /path/to/myenv/bin/activate
```

## Backend 

Create a mySql database

Create a table called "test_data" or something to your liking

Update table name and login credentials in /backend/backend/settings.py 

```
> cd backend 
> python3 manage.py migrate
> python3 manage.py runserver
```
Server will be running on port 8000 by default

## Frontend

```
> cd ../frontend
> yarn
> yarn start
```
