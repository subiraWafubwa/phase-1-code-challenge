// Running in Node.js environment
if (typeof window === 'undefined') {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter your score: ', (score) => {
        if (isNaN(score)) {
            console.log('Invalid score');
            rl.close();
        } else {
            getGrade(score)
        }
    });
}

// Running on a web environment
if (typeof window !== 'undefined') {
    const score = prompt('Please enter your score: ');
    if (isNaN(score)) {
        alert('Invalid gross income value!');
    } else {
      getGrade(score)
    }
}

// Function to get the grade
function getGrade(score){
    let grade = ''

    if(score <= 100){
        if(score >= 80){
            grade = 'A'
        } else if(score < 80 && score >= 60){
            grade = 'B'
        } else if(score < 60 && score >= 50){
            grade = 'C'
        } else if(score < 50 && score >= 40){
            grade = 'C'
        } else if(score < 40){
            grade = 'E'
        }
    } else {
        console.log(`Invalid score`) 
    }

    console.log(`Your Grade is ${grade}`)
}

