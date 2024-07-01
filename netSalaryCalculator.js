// Check if running in Node.js environment
if (typeof window === 'undefined') {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Please enter your gross income: ', (grossIncome) => {
        const income = parseFloat(grossIncome);
        if (isNaN(income)) {
            console.log('Invalid gross income value!');
            rl.close();
        } else {
            rl.question('Please enter your benefits: ', (benefits) => {
                const benefit = parseFloat(benefits);
                if (isNaN(benefit)) {
                    console.log('Invalid benefits value!');
                } else {
                    getNetIncome(income, benefit);
                }
                rl.close();
            });
        }
    });
}

function getNetIncome(grossIncome, benefits) {
    const totalPay = grossIncome + benefits;

    // Calculating the PAYE per month
    const kra =
        totalPay <= 24000 ? totalPay * 0.1 :
        totalPay <= 32333 ? totalPay * 0.25 :
        totalPay <= 500000 ? totalPay * 0.30 :
        totalPay <= 800000 ? totalPay * 0.325 :
        totalPay * 0.35; // Default grossIncome is above 800,000

    // Calculating NHIF deductions
    const nhif =
        totalPay <= 5999 ? 150 :
        totalPay <= 7999 ? 300 :
        totalPay <= 11999 ? 400 :
        totalPay <= 14999 ? 500 :
        totalPay <= 19999 ? 600 :
        totalPay <= 24999 ? 750 :
        totalPay <= 29999 ? 850 :
        totalPay <= 34999 ? 900 :
        totalPay <= 39999 ? 950 :
        totalPay <= 44999 ? 1000 :
        totalPay <= 49999 ? 1100 :
        totalPay <= 59999 ? 1200 :
        totalPay <= 69999 ? 1300 :
        totalPay <= 79999 ? 1400 :
        totalPay <= 89999 ? 1500 :
        totalPay <= 99999 ? 1600 :
        1700; // Default value if grossIncome > 99999

    // Calculating NSSF deductions
    const nssf = totalPay <= 7000 ? 0.06 * 7000 : 0.06 * 36000;

    // Return the values of total PAYE and Net Income
    const paye = kra + nhif + nssf;
    const netIncome = totalPay - paye;

    // This is the object containing the response
    const response = {
        'Gross Income': `KSH. ${grossIncome.toFixed(2)}`,
        'Benefits': `KSH. ${benefits.toFixed(2)}`,
        'KRA': `KSH. ${kra.toFixed(2)}`,
        'NHIF': `KSH. ${nhif.toFixed(2)}`,
        'NSSF': `KSH. ${nssf.toFixed(2)}`,
        'PAYE': `KSH. ${paye.toFixed(2)}`,
        'Net Income': `KSH. ${netIncome.toFixed(2)}`, 
    };

    console.table(response);
}

// Check if running in a web browser
if (typeof window !== 'undefined') {
    const grossIncome = parseFloat(prompt('Please enter your gross income:'));
    if (isNaN(grossIncome)) {
        alert('Invalid gross income value!');
    } else {
        const benefits = parseFloat(prompt('Please enter your benefits:'));
        if (isNaN(benefits)) {
            alert('Invalid benefits value!');
        } else {
            getNetIncome(grossIncome, benefits);
        }
    }
}