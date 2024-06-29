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
        return `Invalid score`
    }

    return `Your Grade is ${grade}`
}

console.log(getGrade(78))