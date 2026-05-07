console.log("writing to file")
import {writefile} from 'node:fs';
import {Buffer} from 'node:Buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
   if (err) throw err;
   console.log('the file has been saved')

});