 function handleResponseData(json){    
    //console.log(response.json());
    let count = document.getElementById("count");
    count.innerHTML = `There are ${Number(json.length)} astronauts on this mission.`
    let astronauts = document.getElementById("container");
    //let activeStatus = document.getElementById("active");
    for(let i = 0; i<json.length; i++) { 
    astronauts.innerHTML+=
    `<div class="astronaut" id="list">
        <div class="bio">
      <h3>${json[i].firstName} ${json[i].lastName}</h3>
      <ul>
         <li id="hours">Hours in Space: ${json[i].hoursInSpace}</li>
         <li id="active">Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
         </div>
        <img class="avatar" src=${json[i].picture}>
    </div>`;
    }
        //if(json[i].active === true){
        //activeStatus.style.color = "green";
        //}
    
    }; 

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
        response.json().then(handleResponseData)})});              