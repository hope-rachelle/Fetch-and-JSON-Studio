window.addEventListener("load", function(){
    
    axios.get("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
     console.log(response);    
    let astronauts = document.getElementById("container");
    for(let i = 0; i<response.data.length; i++){
    astronauts.innerHTML=
    
    `<div class="astronaut">
        <div class="bio">
      <h3>${response.data[i].firstName} ${response.data[i].lastName}</h3>
      <ul>
         <li>Hours in Space: ${response.data[i].hoursInSpace}</li>
         <li>Active: ${response.data[i].active}</li>
         <li>Skills: ${response.data[i].skills}</li>
      </ul>
         </div>
   <img class="avatar" src=${response.data[i].picture}>
</div>`}      
        
    })
})