import {AES} from 'crypto-js'
export function encrypt(encrypt){
    const secretkey="reactapplication"
    const salt="random123"
    const result=salt + encrypt
    const encData=AES.encrypt(result, secretkey).toString()
     console.log("the ecrypted password at function:",encData)
     return encData;

}