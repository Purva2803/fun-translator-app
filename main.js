var translatebtn = document.querySelector("#translate");
var input = document.querySelector("#textin");
var output = document.querySelector("#textout");
var Url = `https://api.funtranslations.com/translate/ferb-latin.json`;


function getTranslation(text){
       return Url  + "?" +"text=" + text 
}

function errorHandler(error){
       console.log("error occured",error);
       alert("there is something wrong try again");
}

function EventHandler(){

       var inputtext = input.value;
   
       fetch (getTranslation(inputtext))
       
       .then(response=>response.json())
       .then(reply=> {
              var translatedtext = reply.contents.translated;
              output.innerText = translatedtext;
       }
       );
       
}


translatebtn.addEventListener("click",EventHandler);