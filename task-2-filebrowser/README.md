### Was soll ich tun
1. Start Program mit  `node app.js /my/path`,
 -- hole mich den Pfad zum __myOrdner__ `process.argv[2]`
 -- catch Fehler (nichts bekommen)
2. Becomme __myArray__ - array von Dateien und Ordnern, die sich in __myOrdner__ befinden ` fs.readdirSync ()`
 -- catch Fehler ` try{}catch`
3. Ich zeige  __myArray__ 
4. User gibt die __ordnerNummer__ ein, die er öffnen möchte 
 -- jetz habe ich neuen __myOrdner += "/" + myArray[ordnerNummer]__ --> wiedre mache ich _punkt 2_
 -- catch Fehler ` try{}catch`