'use strict'
var text = ["*","**","***","****","*****"]
var stars = ""
var i;
for (i=0; i<text.length; i++){
    text += text[i] + "<br>" ;
    console.log(text);
}
document.getElementById('demo').innerHTML= stars
