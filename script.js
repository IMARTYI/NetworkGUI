const readline = require("readline");

var networks;
var clients;
var classOfNetwork; 
var classA = '255.0.0.0';//255 means it doesnt change
var classB = '255.255.0.0';
var classC = '255.255.255.0';

prompt();

function prompt() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Class of Network: ", (answer) => {
    classOfNetwork = answer;
    rl.question("How many networks: ", (answer) => {
      networks = parseInt(answer);

      rl.question("How many clients: ", (answer) => {
        clients = parseInt(answer);

        if (networks > 0 && clients > 0) {
          const subnetPrefix = calculateSubnetPrefix(networks);
          console.log("Class of Network: ",classOfNetwork);
          console.log("Networks:", networks);
          console.log("Clients per Network:", clients);
        
          rl.close();
        } else {
          console.log(
            "Invalid input. Networks and clients must be greater than 0."
          );
          rl.close();
        }
      });
    });
  });
}

function calculateSubnetPrefix(clientsPerNetwork) {
  var subnetBits = Math.ceil(Math.log2(clientsPerNetwork + 2));
  var subnetMask = 32 - subnetBits;
  return subnetMask;
}
