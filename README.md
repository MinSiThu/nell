# nell
 command line tool for running command files

Nell is a command line interface for running and building programs.

## Installation
```
npm install -g nell-cli
```

## nell.config
Every command that need to be executed must be written in nell.config.

Example config file
```shell
sudo npm init --yes
sudo npm install express pug multer
touch app.js 
code .
```

Execute it
```
nell-cli run
```

This **nell.config** file start a node project, install dependencies, create app.js and open VScode editor.

Every commands that can be run on your OS, can be written in nell. 

**Note :** Nell works for current directly.