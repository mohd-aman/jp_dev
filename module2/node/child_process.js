let cp = require('child_process');

// console.log(cp);

//for windows replace gnome-calculator with calc
// cp.execSync("gnome-calculator");


console.log("output : "+cp.execSync('node test.js'));
