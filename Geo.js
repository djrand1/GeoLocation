  navigator.geolocation.getCurrentPosition(showPosition);

var loc = document.getElementById("myLoc");

function myLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);

  }
  else{
    loc.innerHTML ="location not possible :/";
  }

}

function showPosition(position){
  loc.innerHTML = "Longitude " + position.coords.longitude + "<br>Latitude" + position.coords.latitude +"<br>";
}



//proto for loyalty

var userLOYTOTAL = 0;// counter for how many purchases made by the user

var userLoyalty ;//percentage to be applied
/*
  Function accepts three parameters
  the usersid, the total number of purchases till first loyalty is met and will be doubled
  and lastly the percentage the user gets off
*/
function Royals(userID,userLOYTOTAL,userLoyalty){
  this.userID = userID;
  this.userLOYTOTAL = userLOYTOTAL;
  this.userLoyalty = userLoyalty;
}
