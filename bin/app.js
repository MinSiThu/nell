#!/usr/bin/env node
let program = require("commander");
let fs = require("fs-extra");
let toolInfo = require("./tooInfo");
let executer = require("./executer");

program
.version(toolInfo.version)
.description(toolInfo.description)

program
.command("run")
.description("%% Finding nell config file %%")
.action(async ()=>{
    let isExist = await fs.pathExists("config.nell");
    
    if(isExist == false){
        console.log("%% config.nell not exist %%");
    }else{
        let nellConfig = await fs.readFile("config.nell");
        nellConfig = nellConfig+"";
        
        let nellCmds = nellConfig.split("\n");
        
        for (let index = 0; index < nellCmds.length; index++) {
            const nellCmd = nellCmds[index];
            try{
                let result = await executer(nellCmd);
            }catch(e){
                break;
            }
        }

        console.log("%% config.nell executed %%");
        
    }
    
})

program.parse(process.argv);