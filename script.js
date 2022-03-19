function toggle() {

  var z = document.querySelector(".fa");
  console.log(z);
  if(z.className == "fa fa-bars"){
    z.className = "fa fa-close";
  }else{
    z.className = "fa fa-bars";
  }

  var x = document.querySelector(".nav-menu");
  var y = document.querySelector(".nav-home-a");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "inline";
  }else{
    x.style.display = "flex";
    y.style.display = "none";
  }
}

window.addEventListener('resize', function(){
  window.location.reload();
}); 