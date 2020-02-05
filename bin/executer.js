const { exec } = require("child_process");

module.exports = function(cmd){
    return new Promise((resolve,reject)=>{
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                reject(false);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                reject(false);
            }
            console.log(`stdout: ${stdout}`)
            resolve(true);
        });
    })
}