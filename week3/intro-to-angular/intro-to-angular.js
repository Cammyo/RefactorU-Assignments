angular.module("angintro", []);

angular
  .module("angintro")
  .controller("angcontrol", angfunction);

function angfunction (){
  
  var angCtrl = this;
  
  angCtrl.greeting = "Howdy there";
  
  angCtrl.goList = false;
  
  angCtrl.btnlog = function(){
    console.log("CONSOLE PLEB MESSAGE");
    angCtrl.h1z1 = "This is text!"
  }
  
  
  angCtrl.hoverBang = function(){
    angCtrl.bang = "!"
  }
  angCtrl.hoverBangLeave = function(){
    angCtrl.bang = ""
  }
  angCtrl.hoverPink = function(){
    angCtrl.pink = "pinkText"
  }
  angCtrl.hoverPinkLeave = function(){
    angCtrl.pink = "blackText"
  }
  angCtrl.linkLeave = function(event){
    var leave = confirm("You sure you want to leave me?\n;-;")
    if(leave === false){
      event.preventDefault()
      angCtrl.delLink = angular.element(document.querySelector("body > div.container > div > div > div > a"))}
      angCtrl.delLink.remove();
  }
  
  
}