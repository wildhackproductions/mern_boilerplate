#Basic boilerplate code for the beginning of a MERN application
with CRUD functionality

**Installation**

Video tutorial for setup can be found here:
https://www.youtube.com/watch?v=gI_GyGqwTp4

1. Download .zip or pull repository
2. In command prompt, cd into react_boilerplate-main
3. run "npm install"
4. "cd client"
5. run "npm install"
6. "cd ../"
7. run "npm run dev"

--MongoDB Local Setup--

8. https://www.mongodb.com/try/download/compass
9. Under "On-premises MongoDB MongoDB locally", Download MongoDB Community Server
10. Install and run
11. MongoDB should be running on port 27017 by default. If running on a different
port, the mongoURI key value pair within the config/default.json file will need
to be changed to specify the port number

--Heroku Deployment Preparation--

12. You will need to create a MongoDB database on mLab.com (or something similar)
13. After deployment, you will need to set process.env variables for:
- mongodb_username
- mondodb_password
- mondodb_dbname


You should now see the port number that your server is running on (default 5000)
and the frontend display in your browser
