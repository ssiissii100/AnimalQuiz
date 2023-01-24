npm install

To start the application, you would need to do the following steps:

Make sure you have Docker and docker-compose installed on your machine.
In the command line, navigate to the root directory of your project where the docker-compose.yml file is located.
Run the command docker-compose build to build the image for the application
Run the command docker-compose up to start the application.


The application will now be running on http://localhost:8080 (or the port that you've specified in the .env file) and the mongodb will be running on mongodb://localhost:27017/animalquiz

you can use docker-compose down to stop the application.
Once the containers are running, you can use the init.js file to insert the example animals into the mongodb.
You can then open a web browser and navigate to http://localhost:8080 to see the application running.
Note: You should run the docker-compose build command only the first time you start the application or after making changes in the code.



mongodb
pwd: root
username: root