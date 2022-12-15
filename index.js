const { exec } = require("child_process"),
      cron = require('node-cron'),
      chalk = require('chalk'),
      gitFolders = ['/var/www/html/'];

cron.schedule('* * * * *', () => {
    let i;
    for (i = 0; i < gitFolders.length; i++) {
        exec(`cd ${gitFolders[i]} && git pull`, (error, stdout, stderr) => {
            if (error) return console.log(chalk.red("[ERROR]" + chalk.white(" ") + chalk.white(error)));
            if (stderr) return console.log(chalk.green("[PULLED]" + chalk.white(" ") + chalk.white(stderr)));
            console.log(chalk.blue("[INFO]" + chalk.white(" ") + chalk.white(stdout)));
        })
    }
})
