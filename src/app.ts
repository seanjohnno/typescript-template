// app.ts
import { Message } from "./message";

document.addEventListener('DOMContentLoaded', function(){
    let message = new Message();
    document.querySelector('#message').innerHTML = message.getMessage();
});
