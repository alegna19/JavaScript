//Food Prices

var beer_cost = 6.25;
var burger_cost = 4.75;

//User Money
var account_balance = 15.75;

function checkBalance(amt){
  if(account_balance - amt > 0){
    return true;
  }else{
    console.log("Insuficients funds")
    return false;
  }
}

//Drink beer
function drinkBeer(){
  if(checkBalance(beer_cost)){
    account_balance = account_balance - beer_cost;
    console.log("Enjoy it the beer...")
  }
    console.log(account_balance);
}

//Eat Burger
function eatBurger(){
  account_balance = account_balance - burger_cost;
  console.log(account_balance);
}












