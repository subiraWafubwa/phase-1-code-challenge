function getDemeritPoints(speed){
    if(speed <= 70){
        return 'Ok'
    } else{
        let remSpeed = speed - 70;
        if(remSpeed > 0){
            let pointPerFive = Math.floor(remSpeed / 5);
            if(pointPerFive < 12){
                return `Points: ${pointPerFive}`
            } else {
                return `License Suspended`
            }
            
        } 
    }
}

console.log(getDemeritPoints(60))