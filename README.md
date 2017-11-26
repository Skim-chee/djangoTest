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

Install MySQL and configure: https://docs.oracle.com/javacomponents/advanced-management-console-2/install-guide/installing-and-configuring-mysql-database-advanced-management-console.htm#JSAMI-GUID-00D8401C-C5EF-4F7C-B211-8B268BA0DB91

Create a database called "test_data" or something to your liking

Update database name and login credentials in /backend/backend/settings.py 

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
