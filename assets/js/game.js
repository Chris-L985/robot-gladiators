var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// you can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

// create fight function
var fight = function(enemy) {
    // alert players that they are starting the round
  while(playerInfo.health > 0 && enemy.health > 0) { 
  
    //fight prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }
      
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      // remove enemy health by subtracting player attack
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemyHealth + " health remaining. "
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died! ");

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerHealth + "health remaining. "
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died! ");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left. ");
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
 playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0
      window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
  
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedEnemyName variable's value into the fight function.
      fight(pickedEnemyObj);
    
      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i <enemyInfo.length - 1) {
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
  if (playerInfo.health > 0) {
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
      playerInfo.refillHealth();
      break;
    case 'UPGRADE':
    case 'upgrade':
      playerInfo.upgradeAttack();
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
};

//player info
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    if (this.money >=7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health =+ 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >=7) {
      window.alert("Upgrading player's attack by 6 or 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

// enemy info
var enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];


// start the game when the page loads
startGame();