console.log("writing to file")
import {writeFile} from 'node:fs';
import { Buffer } from "buffer";

const data = new Uint8Array(Buffer.from('hello word and hello to file writing.js'));
writeFile('output.txt', data, (err) => {
   if (err) throw err;
   console.log('the file has been saved')
 
});

import {readFile} from 'node:fs';
readFile('output.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log(data)
console.log(process.cwd());
});