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
    
    for ( i = perulangan ; i >= 1 ; i-- ) {
        console.log("* ".repeat(i));
    }

    interface.close();
}

printLoop();