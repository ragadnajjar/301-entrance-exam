
function form(likes,date){
    this.likes=likes;
    this.date=date
}
form.prototype.render=function()
function setitem(){
    console.log(setitem)
    for (var i =0;i <form.length; i++){
    }
    localStorage.setItem('form',json.stringify(form));
}
function getitem(){
    var getitem=localStorage.getItem('form');
    json.parse(get);
}
function renderlist(){
    var ulEl=document.getElementById('list');
    for(i=0 ; i<forms.length ; i++){
        var liEl=document.createElement('li')
        liEl.textContent='${forms[i].likes} , ${forms[i].date}'
        ulEl.appendChild(liEl);
    }
}

 var myForm=document.getElementById('myform');
 console.log(myForm);
myForm.addEventListener("submit", function(event){
    var likes = event.target.likes.value;
    var date = event.value.date.value;
var newlikes=newlikes(likes,date);
newnewlikes.render();
});
function myForm(){}