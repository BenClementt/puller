const { exec } = require("child_process");
const cron = require('node-cron')
const chalk = require('chalk')

var gitFolders = ['/var/www/html/the-amount-of-kink-this-site-gives-me-is-just-']

cron.schedule('* * * * *', () => {
    var i;
    for(i=0; i < gitFolders.length; i++){
        exec(`cd ${gitFolders[i]} && git pull`, (error, stdout, stderr) => {
            if(error){
                console.log(chalk.red("[ERROR]" + chalk.white(" ") + chalk.white(error)))
                return;
            }
            if(stderr){
                console.log(chalk.red("[STDERR ERROR]" + chalk.white(" ") + chalk.white(stderr)))
                return;
            }

            console.log(chalk.blue("[INFO]" + chalk.white(" ") + chalk.white(stdout)))
        })
    }
})