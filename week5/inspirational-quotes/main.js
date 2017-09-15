angular.module("quoteApp",[])
  .factory("quoteFactory", qFactory)
  .controller("quoteCtrl", ["quoteFactory",function(qFactory){
// 
// 
    qCtrl = this;
    
    qCtrl.quotes = qFactory.quotes;
    
    
    
    qCtrl.submitQuote = function () {
      
    }
    
}]);



function qFactory(){
  
  var quotes = [
    
      {
      name : "John Judgerman",
      quote :  "I judge to jam, damn man",
      rating : 1
      },
      {
      name : "Phil Ossofferman",
      quote : "To think is to thought as is food is to drink",
      rating : 3
      },    
      {
      name : "Amy Amalgamation",
      quote : "Words are words",
      rating : 2
      },
      {
      name : "Fenton the Dog",
      quote : "OH JESUS",
      rating : 5
      },
  ];
  return{
    quotes : quotes
  };
}
