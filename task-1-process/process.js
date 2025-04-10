import fs from 'fs'

// const path = "/"
const path = process.env.HOME;// alles funkcionirt aber content ist andere
const content = fs.readdirSync(path);
console.log(content);
console.log("Platform - ",process.platform);
console.log("argv - ",process.argv);
console.log("PWD - ",process.env.PWD);
console.log("HOME - ",process.env.HOME);
console.log("USER - ",process.env.USER);
console.log("FOO - ",process.env.FOO);