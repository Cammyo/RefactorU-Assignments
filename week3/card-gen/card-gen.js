angular.module("appCardGen", [])
  .controller("cardCtrl", cardFunc);


cardFunc.$inject = ["CardFactory"];

function cardFunc (CardFactory){
  var card = this;

  card.newCard = {};
  
  card.addCard = function(packs){

    card.packs = CardFactory.cards;
    
    if(card.newCard.art===undefined){
      card.newCard.art = "http://videogamesunderground.com/wp-content/uploads/2016/07/karp.png";
    }
    if(card.newCard.toughness===undefined){
      card.newCard.toughness = 0;
    }
    if(card.newCard.power===undefined){
      card.newCard.power = 0;
    }
    if(card.newCard.name===undefined){
      card.newCard.name = "Name"
    }
    if(card.newCard.manaColor===undefined){
      card.newCard.manaColor = "Color"
    }
    
    card.packs.push({
      name : card.newCard.name,
      manaColor: card.newCard.manaColor,
      power: card.newCard.power,
      toughness: card.newCard.toughness,
      art: card.newCard.art
    })

    card.newCard = {};
    
  }
  
}

// ================ //
// === Factorio === //
// ================ //

angular.module("appCardGen")
  .factory("CardFactory", cardFactory);

function cardFactory () {
  var cardPacks = [];
  return{
    cards : cardPacks
  }
}