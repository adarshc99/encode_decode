"use strict";

function generate_key(get_length)
{
    let key = "";
    for (let index = 0; index < get_length; index++)
    {
        key+= String.fromCharCode(Math.floor(Math.random()*89 + 33));
        
    }
    return key;
}


function encypt()
{
    var get_text = document.getElementById("en_text").value;
    let a = document.getElementById("en_key").value = generate_key(get_text.length)
    let encrypt_display = "";
    for (let index = 0; index < get_text.length; index++)
    {
        encrypt_display += String.fromCharCode(get_text.charCodeAt(index)^a.charCodeAt(index));
        
    }

    document.getElementById("encrypted_text").value = encrypt_display;
    document.getElementById("abc").disabled  = false;
}