{
    "name": "SUPUN MD",
    "description": "SUPUM-MD has been world no-01 multi device whatsapp bot. 👨‍💻❤️",
    "logo": " ",
    "keywords": ["supun-md", "bot", "whatsapp bot"],
    "success_url": "/",
  
    "env": {
      "SESSION_ID": {
              "description": "Type the Session-ID you got from scaning QR",
              "required": true,
              "value": "put session id here"
          }
  
      },
           "buildpacks": [
          {
              "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
          }
       ],
    "stack": "heroku-24"
    
    
  }
  