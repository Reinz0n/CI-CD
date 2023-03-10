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
    b = perulangan;

    for ( i = 1 ; i <= perulangan ; i++ ) {
        console.log(" ".repeat(--b) + "*".repeat(i));
    }

    interface.close();
}

printLoop();