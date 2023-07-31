// Variables storing teams fixtures
var teams = [1, 2, 3, 4, 5];
var middleOfTeamsArray = teams.length / 2;
var fixtures = [];

function fixtureAlgorithm() {
  
  // For an odd number of teams introduce a bye fixture into each fixture round
  if (teams.length % 2 == 1) {
    teams.push("bye fixture");
  }
  
  // Create one fewer rounds than the number of teams
  for (let i = 0; i < teams.length - 1; i++) {
    
    // Pair the first team with last team, second with penultimate, etc...
    for (let j = 0; j < middleOfTeamsArray; j++) {
      fixtures.push(teams[j] + " vs " + teams[teams.length - 1 - j]);
    }
    
    // Mark the next round of fixtures but not end of last round
    if(i != teams.length - 2){
      fixtures.push("next round of fixtures");
    }
    
    // Move last array team to second array position to create new fixtures  
    let lastTeam = teams.pop();
    teams.splice(1, 0, lastTeam);
  }
  
  // Loop to print all fixtures
  for (let k = 0; k < fixtures.length; k++) {
    console.log(fixtures[k]);
  }
}