var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
// player robot name prompt
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 21) + 40;
var enemyAttack = 12;

// create fight function
var fight = function(enemyName) {
    // alert players that they are starting the round
  while(playerHealth > 0 && enemyHealth > 0) { 
  
    //fight prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }
      
    var damage = randomNumber(playerAttack - 3, playerAttack);
      // remove enemy health by subtracting player attack
      enemyHealth = Math.max(0, enemyHealth - damage);
      console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");

        // award player money for winning
        playerMoney = playerMoney + 20;

        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);

      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining. "
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
      }
  }
};

//for (var i = 0; i < enemyNames.length; i++) {
  //debugger;
  // call fight function with enemy-robot
  //fight(enemyNames[i]);
//}
// execute fight
var startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0
      window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
  
      var pickedEnemyName = enemyNames[i];
      enemyHealth = randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight function.
      fight(pickedEnemyName);
    
      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i <enemyNames.length - 1) {
        // ask if player wants to use the store befor the next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, go to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isn't alive, stop
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  // after loop ends, player is out of health or enemies
  endGame();
};   

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " . ");
  } else { 
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm= window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!")
  }
};

// go to shop between battles function
var shop = function() {
  // ask player to go to the shop
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
      break;
    case 'UPGRADE':
    case 'upgrade':
      if (playerMoney >=7) {
        window.alert("Upgrading player's attack by 6 or 7 dollars.");

        // increase attack
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
      break;
    case 'LEAVE':
    case 'leave':
      window.alert("Leaving the store");

      // do nothing, function ends.
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() to pick valid option
      shop();
      break;
  }
}


// start the game when the page loads
startGame();