var button = document.getElementById('inpt');

function nameEnter(){
    var name = document.getElementsByClassName('name');
    var output = document.getElementById('output');
    output.innerHTML = "Hello, " + name[0].value + ".";
}

button.addEventListener('click', nameEnter);