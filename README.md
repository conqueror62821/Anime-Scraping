# ANIMEEZ NEW UI V2 IS HERE
**AnimeEZ - An Anime Streaming website (Demo - https://animeez.live) BTW ITS MADE IN HTML** <br>
**Template Used -- https://github.com/codewithsadee/filmlane** <br>
**API PROJECT URL -- [Click Here](https://github.com/dhvitOP/AnimeEZ-api)** <br>
# Features?
--> Its lightweight (after the anime details are set in db XD) <br>
--> Uses api project to lower the weight on machine <br>
--> Easy to use <br>
--> Mobile view supported <br>
--> Better than previous one i guess so

# Example and Demo
--> Demo website - https://animeez.live <br>
--> Demo Video - 


[rec-tab (1).webm](https://user-images.githubusercontent.com/77879772/185559769-a22aad33-c1f2-45ec-8c02-00def16e9b4e.webm)

# Setup
**API PROJECT SHOULD BE HOSTED IN DIFFERENT CMD OR ENVIRONMENT** <br>
**API PROJECT URL -- [Click Here](https://github.com/dhvitOP/AnimeEZ-api)** <br>
1. You have to edit the config.js's api_url by your api url. If your hosting both project locally than there isn't any need to change api_url. <br>
```js
module.exports = {
  "api_url": "http://localhost:6969",
  // Enter your api host's url or if hosting locally use http://localhost:6969
  
  "time_update": "200",
  // Enter Seconds for updating recently added and popular list. For disabling it Enter disable
  
  "port": "8000", 
    // Enter port for your website
}
```
2. Make sure your api project is running properly. <br>
3. Create a new command prompt and go in the directory of this repository's code. After that enter `npm start` and your website is ready to run. <br>



# Notice 
**We are not officially on any social media other than github** <br>

# This Time api project is in different repo

# Modules Used
--> [Express](https://expressjs.com/en/starter/installing.html) for Website Framework. <br> 
--> [Axios](https://axios-http.com/docs/intro) for Gogoanime requests. <br> 
--> [Ejs/Html](https://ejs.co/#docs) for frontend. <br>  
--> [Quick.db](https://quickdb.js.org/) for saving animes (Homepage) <br>  <br> 

# Requirements
--> You can use any node version which is above 11.9. <br> 
--> A good machine to run the code. <br>  <br> 



# Setting Up 
--> You don't have to setup anything. <br>  <br> 

# Running 
Just click run if its repl otherwise type `node index.js` in console. <br> 

# ITS NOT MADE FOR PRODUCTION USE AND DON'T TRY TO COPY THE FULL WEBSITE ATLEAST EDIT SOMETHING

# Quick.db Being Used 
--> [Quick.db](https://quickdb.js.org/) is used as saving information and again saving the information after sometime to update it. Like Homepage which updates information every 7 Minutes (In Starting the code After 7 minutes the homepage's data will be okay).
