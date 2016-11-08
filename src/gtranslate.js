var GoogleTranslateApi=require('google-translate-api-nodejs-client');
 
new GoogleTranslateApi({
  API_KEY:'AIzaSyBpJiYqqL5vLEBsbq5ksEVipuSeOCQ-8qU'
})
  .translate({
    source:'en',
    target:'ge',
    q:'...text is here...'
  }, function(err,translation){
  
    // translation is a string representing the output translation
    // original response would be in html, this client converts the html to a proper text string	
 
  });