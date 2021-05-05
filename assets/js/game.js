// player robot name prompt
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var PlayerMoney = 10;

// you can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create fight function
var fight = function(enemyName) {
    // alert players that they are starting the round
  while(enemyHealth > 0) { 
  
    //fight prompt
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        break;
      }
    }
      
      // remove enemy health by subtracting player attack
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
      );

      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + "health remaining. "
      );

      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died! ");
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
      }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  debugger;
  // call fight function with enemy-robot
  fight(enemyNames[i]);
}
// execute fight
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}   