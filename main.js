"use strict";
var get_key_global;
var get_text;
var encrypt_display;
function show_encrpted_text() // function for encryption
{
    let table_display =  "";
    table_display+=`
    <tr>
        <td>${get_text}</td>
        <td>${get_key_global}</td>
        <td>${encrypt_display}</td>
    </tr>
    `;
    document.getElementById("en_table").innerHTML += table_display;
    document.getElementById("en_text").value = "";
    document.getElementById("en_key").value = "";
    document.getElementById("encrypted_text").value = "";
}
function show_decrypted_text() // function for decryption
{
    let table_display =  "";
    table_display+=`
    <tr>
        <td>${encrypt_display}</td>
        <td>${get_key_global}</td>
        <td>${get_text}</td>
    </tr>
    `;
    document.getElementById("de_table").innerHTML += table_display;
    document.getElementById("en_text").value = "";
    document.getElementById("en_key").value = "";
    document.getElementById("encrypted_text").value = "";
}
function generate_key(get_length) // key genretaion of same length of text
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
    get_text = document.getElementById("en_text").value;
    document.getElementById("id1").innerHTML = "Encrypt Text";
    if(!get_text) // all text fields are necessary
    {
        document.getElementById("display_error").style.display = "block";
    }
    else
    {
        document.getElementById("show_en_table").style.display = "block";
        get_key_global = document.getElementById("en_key").value = generate_key(get_text.length)
        encrypt_display = "";
        for (let index = 0; index < get_text.length; index++)
        {
            encrypt_display += String.fromCharCode(get_text.charCodeAt(index)^get_key_global.charCodeAt(index));  
        }
        document.getElementById("encrypted_text").value = encrypt_display;
        document.getElementById("abc").disabled  = false;
        document.getElementById("abc").style.cursor = "context-menu";
        show_encrpted_text();
    }
}

function decrypt()
{
    document.getElementById("en_text").placeholder = "Enter Text To Decrypt";
    get_key_global = document.getElementById("en_key").value = window. prompt("Enter Key: ");
    document.getElementById("encrypted_text").placeholder = "Your Text is";
    if(!get_key_global)
    {
        document.getElementById("display_error").style.display = "block";
    }
    else
    {
        document.getElementById("id1").innerHTML = "Decrypt Text";
        document.getElementById("show_de_table").style.display = "block";
        document.getElementById("en_text").value = encrypt_display;
        let decode = "";
        for (let index = 0; index < get_text.length; index++)
        {
            decode += String.fromCharCode(encrypt_display.charCodeAt(index)^get_key_global.charCodeAt(index));
            
        }
        get_text = document.getElementById("encrypted_text").value = decode;
        show_decrypted_text();
    }
}
function disable(get_id)
{
    document.getElementById(get_id).style.display = "none";   // function for X in error message
}