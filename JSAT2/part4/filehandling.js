console.log("writing to file")
import {writefile} from 'node:fs';
import {Buffer} from 'node:Buffer';

const data = new Uint8Array(Buffer.from('Hello Node.js'));
