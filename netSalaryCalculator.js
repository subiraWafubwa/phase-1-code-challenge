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

// Calculate net Income
function getNetIncome(salary, benefits) {
    const grossIncome = salary + benefits;

    // Calculating the PAYE per month
    const kra =
        grossIncome <= 24000 ? grossIncome * 0.1 :
        grossIncome <= 32333 ? grossIncome * 0.25 :
        grossIncome <= 500000 ? grossIncome * 0.30 :
        grossIncome <= 800000 ? grossIncome * 0.325 :
        grossIncome * 0.35; // Default grossIncome is above 800,000

    // Calculating NHIF deductions
    const nhif =
        grossIncome <= 5999 ? 150 :
        grossIncome <= 7999 ? 300 :
        grossIncome <= 11999 ? 400 :
        grossIncome <= 14999 ? 500 :
        grossIncome <= 19999 ? 600 :
        grossIncome <= 24999 ? 750 :
        grossIncome <= 29999 ? 850 :
        grossIncome <= 34999 ? 900 :
        grossIncome <= 39999 ? 950 :
        grossIncome <= 44999 ? 1000 :
        grossIncome <= 49999 ? 1100 :
        grossIncome <= 59999 ? 1200 :
        grossIncome <= 69999 ? 1300 :
        grossIncome <= 79999 ? 1400 :
        grossIncome <= 89999 ? 1500 :
        grossIncome <= 99999 ? 1600 :
        1700; // Default value if grossIncome > 99999

    // Calculating NSSF deductions
    const nssf = grossIncome <= 7000 ? 0.06 * 7000 : 0.06 * 36000;

    // Return the values of total PAYE and Net Income
    const paye = kra + nhif + nssf;
    const netIncome = grossIncome - paye;

    // This is the object containing the response
    const response = {
        'Salary': `KSH. ${salary.toFixed(2)}`,
        'Benefits': `KSH. ${benefits.toFixed(2)}`,
        'Gross Income' : `KSH. ${grossIncome.toFixed(2)}`,
        'KRA': `KSH. ${kra.toFixed(2)}`,
        'NHIF': `KSH. ${nhif.toFixed(2)}`,
        'NSSF': `KSH. ${nssf.toFixed(2)}`,
        'PAYE': `KSH. ${paye.toFixed(2)}`,
        'Net Income': `KSH. ${netIncome.toFixed(2)}`, 
    };

    console.table(response);
}