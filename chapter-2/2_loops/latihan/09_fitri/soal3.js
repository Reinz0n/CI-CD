const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(q) {
    return new Promise(resolve => {
        interface.question(q, data => {
            resolve(data);
        });
    });
}

async function printLoop() {
    perulangan = parseInt(await question('Mau berapa banyak perulangan? '));
    
    for ( i = 0 ; i <= perulangan ; i++ ) {
        console.log(" ".repeat(i) + "*".repeat(perulangan - i));
    }

    interface.close();
}

printLoop();