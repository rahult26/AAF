1. To run the application, make sure nodejs version 16.14.0 is installed. 
2. Open 2 terminals and navigate to main folder directory. 
3. On one terminal, navigate to the backend directory by "cd backend" command. 
4. On the other terminal, navigate to the frontend directory by "cd frontend" command.
5. On both terminals, run the "npm start" command to get the application connected to database and start running.  
6. Head to https://account.mongodb.com/account/login and create an account there with default options. It will take some time to create a cluster
7. Once the cluster is ready on the mongodb dashboard, go to "Database Access" tab under security. Click on "Add new database user". Enter a username and a password and remember these credentials for later use. Then select "Add User".
8. On the mongodb dashboard, go to "Network Access" tab under security. Click on "Add IP Address" and then select "Allow access from anywhere" and click confirm.
9. Go to backend and create a ".env" file and put in the following credentials: replacing the <CREDENTAILS_WITH_YOURS>
```
DB_URI=mongodb+srv://<YOUR_USERNAME_HERE>:<YOUR_PASSWORD_HERE>@cluster0.jltdk.mongodb.net/bookStore?retryWrites=true&w=majority
SECRET_KEY=<ANY_RANDOM_BUT_LONG_STRING_WITHOUT_SPACES_HERE>
PORT=5000
EMAIL=<YOUR_EMAIL_HERE_WITHOUT_@gmail.com i.e., if the email is myemail@gmail.com then just myemail>
PASSWORD=<YOUR_EMAIL_PASSWORD>
```

10. To use the email service, go to this link. Find the "Turn off less secure access link" and go to that link. And turn off the less secure app access for that gmail account.
  https://support.google.com/accounts/answer/6010255?hl=en#zippy=%2Cif-less-secure-app-access-is-on-for-your-account
11. Then just go to `http://localhost:3001` for frontend and `http://localhost:5000` for backend API.
12. We will need an admin account for our application to run so for that. Run the app once and register an account. Then on mongodb dashboard, go to "Database" tab under Deployment and click Browse Collections. There go to table "users" under the "bookStore" schema. There change the field "usertype" for the document from "user" to "admin" and click on update. 
12. To run the tests, do "cd backend" ans then run "npm test" on terminal. 
13. Login(s)
Client: prabal123
Employee: hestia123
Admin: rahuldt
Password for all: tandel123