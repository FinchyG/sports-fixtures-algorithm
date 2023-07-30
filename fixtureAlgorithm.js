var teams = [1,2,3,4,5];
var fixtures = [];

function fixtureAlgorithm() {
  
  if(teams.length % 2 == 1) {
    teams.push("bye fixture");
  }
  
  let middleOfTeamsArray = teams.length / 2;
  console.log(middleOfTeamsArray);

  for(let i = 0; i < middleOfTeamsArray; i++){
    fixtures.push(teams[i] + " vs " + teams[teams.length - 1 - i]);
  }
  console.log(fixtures);
}

fixtureAlgorithm();


