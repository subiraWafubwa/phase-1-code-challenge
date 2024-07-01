// Running in Node.js environment
if (typeof window === 'undefined') {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter your speed: ', (speed) => {
        if (isNaN(speed)) {
            console.log('Invalid score');
            rl.close();
        } else {
            getDemeritPoints(speed)
        }
    });
}

// Running on a web environment
if (typeof window !== 'undefined') {
    const speed = prompt('Please enter your speed: ');
    if (isNaN(speed)) {
        alert('Invalid gross income value!');
    } else {
      getGrade(speed)
    }
}

// Calculate demerit points
function getDemeritPoints(speed){
    if(speed <= 70){
        console.log('Ok')
    } else{
        let remSpeed = speed - 70;
        if(remSpeed > 0){
            let pointPerFive = Math.floor(remSpeed / 5);
            if(pointPerFive < 12){
                console.log(`Points: ${pointPerFive}`)
            } else {
                console.log(`License Suspended`)
            }
            
        } 
    }
}