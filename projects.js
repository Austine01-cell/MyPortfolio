var nav = this.document.getElementById("nav");
window.addEventListener("resize", function(){
  
  //if(nav.style.left == "0%"){
    if(this.screen.height < 950){
      nav.style.left = "-100%";
      this.document.getElementById("body").classList.remove("stop-scrolling")
    }
 // }
})
window.addEventListener("scroll",function(){
  //nav = this.document.getElementById("nav");
  var hamburger = this.document.getElementById("bars");
  var header = this.document.getElementById("header");
  var sticky = header.offsetTop;
  var main = this.document.getElementById("main");
  if(this.window.pageYOffset > sticky){
    header.classList.add("sticky");
    main.style.marginTop = "60px";
    nav.style.top = "60px";
    if(this.window.innerWidth <= 950){
      hamburger.style.color = "black";
      header.style.backgroundColor = "whitesmoke";
    }
    
  }
  else{
    header.classList.remove("sticky");
    main.style.marginTop = "initial";
    hamburger.style.color = "whitesmoke";
    header.style.backgroundColor = "grey";
    nav.style.top = "77px";
  }
})