function getNetIncome(grossIncome){

    if (typeof grossIncome !== 'number') {
        console.log('Invalid input');
    } else {
        
        // Calculating the PAYE per month
        var kra = undefined
        if(grossIncome <= 24000){
            kra = grossIncome * .1
        } else if(grossIncome > 24000 && grossIncome <= 32333){
            kra = grossIncome * .25
        } else if(grossIncome > 32333 && grossIncome <= 500000){
            kra = grossIncome * .30
        } else if(grossIncome > 500000 && grossIncome <= 800000){
            kra = grossIncome * .325
        } else {
            kra = grossIncome * .35
        }

        // Calculating NHIF deductions
        var nhif = undefined
        if(grossIncome <= 5999){
            nhif = 150
        } else if(grossIncome > 5999 && grossIncome <= 7999){
            nhif = 300
        } else if(grossIncome > 7999 && grossIncome <= 11999){
            nhif = 400
        } else if(grossIncome > 11999 && grossIncome <= 14999){
            nhif = 500
        } else if(grossIncome > 14999 && grossIncome <= 19999){
            nhif = 600
        } else if(grossIncome > 19999 && grossIncome <= 24999){
            nhif = 750
        } else if(grossIncome > 24999 && grossIncome <= 29999){
            nhif = 850
        } else if(grossIncome > 29999 && grossIncome <= 34999){
            nhif = 900
        } else if(grossIncome > 34999 && grossIncome <= 39999){
            nhif = 950
        } else if(grossIncome > 39999 && grossIncome <= 44999){
            nhif = 1000
        } else if(grossIncome > 44999 && grossIncome <= 49999){
            nhif = 1100
        } else if(grossIncome > 49999 && grossIncome <= 59999){
            nhif = 1200
        } else if(grossIncome > 59999 && grossIncome <= 69999){
            nhif = 1300
        } else if(grossIncome > 69999 && grossIncome <= 79999){
            nhif = 1400
        } else if(grossIncome > 79999 && grossIncome <= 89999){
            nhif = 1500
        } else if(grossIncome > 89999 && grossIncome <= 99999){
            nhif = 1600
        } else if(grossIncome > 99999){
            nhif = 1700
        }

        // Calculating NSSF deductions
        var nssf = undefined;
        if(grossIncome <= 7000){
            nssf = .06 * 7000
        } else {
            nssf = .06 * 36000
        }

        // Return the values:
        let paye = kra + nhif + nssf;
        let netIncome = grossIncome - paye

        // This is the object containing the response
        let response = {
            'Gross Income': `KSH. ${grossIncome.toFixed(2)}`,
            'KRA': `KSH. ${kra.toFixed(2)}`,
            'NHIF': `KSH. ${nhif.toFixed(2)}`,
            'NSSF': `KSH. ${nssf.toFixed(2)}`,
            'PAYE': `KSH. ${paye.toFixed(2)}`,
            'Net Income': `KSH. ${netIncome.toFixed(2)}`, 
        }

        console.table(response);
    }
}
