function searchMovie() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    if(title.includes(userInput.toUpperCase())){
        document.getElementById("goHere").innerHTML += (title + "<br>");
    }
}
}
};

function searchDes() {
document.getElementById("goHere").style.visibility = "visible";    
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let description = requestData[i].description; 
    if(title.includes(userInput.toUpperCase())){
        document.getElementById("goHere").innerHTML += (title + "<br>" + description + "<br>");
    }
}
}
};

function searchPrice() {
document.getElementById("goHere").style.visibility = "visible";    
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let price = requestData[i].price;
    if(title.includes(userInput.toUpperCase())){
        document.getElementById("goHere").innerHTML += (title + " " + "£" +price + "<br>");
    }
}
}
};


function showAll() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
       document.getElementById("goHere").innerHTML += (title + "<br>");
}
}
};

function horrorCat() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let category = requestData[i].category;
    if(category.includes("Horror")){
        document.getElementById("goHere").innerHTML += (title + "<br>");
    }
}
}
};

function comedyCat() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let category = requestData[i].category;
    if(category.includes("Comedy")){
        document.getElementById("goHere").innerHTML += (title + "<br>");
    }
}
}
};

function childrenCat() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let category = requestData[i].category;
    if(category.includes("Children")){
        document.getElementById("goHere").innerHTML += (title + "<br>");
    }
}
}
};

function actionCat() {
document.getElementById("goHere").style.visibility = "visible";
document.getElementById("goHere").innerHTML = " ";
let requestURL = "http://192.168.1.124:8080/api/films/";
let request = new XMLHttpRequest();
let userInput = document.getElementById("search").value;
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
for(let i = 0; i<requestData.length; i++){
    let title = requestData[i].title;
    let category = requestData[i].category;
    if(category.includes("Action")){
        document.getElementById("goHere").innerHTML += (title + "<br>");
    }
}
}
};    
    
    
    
    
    
    
    //let myH1 = document.getElementById("goHere");
//    
//  for (let key in requestData) {
//    if (!requestData.hasOwnProperty(key)) continue;
//
//    let obj = requestData[key];
//    for (let prop in obj) {
//        if(!obj.hasOwnProperty(prop)) continue;
//        
//        document.getElementById("goHere").innerHTML += (prop + " = " + obj[prop] + "<br>");
//        };
//    };
//};
//};



//let userInput ="";
//userInput = document.getElementById("search").value;
//
//function searchMovie(userInput) {
//let requestURL = "http://127.0.0.1:8080/api/films/";
//let request = new XMLHttpRequest();
//request.open("GET", requestURL);
//request.setRequestHeader('Content-Type', 'application/json');
//request.setRequestHeader('Access-Control-Allow-Origin','*');
//request.responseType = "json"
//request.send();
//request.onload = function() {
//let requestData = request.response;
//let results = [];
//    for(let i=0; i<requestData.length; i++) {
//  for(key in requestData[i]) {
//    if(requestData[i][key].indexOf(userInput)!=-1) {
//      results.push(requestData[i]);
//    }
//  }
//}
//};
//};