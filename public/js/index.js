var joinMain   = document.getElementById('joinMain');
var createMain = document.getElementById('createMain');



joinMain.onsubmit = function(e){
    e.preventDefault();
    window.location = window.location + "chat/" + document.getElementById('joinForm').value;
}

createMain.onsubmit = function(e){
    e.preventDefault();
    window.location = window.location + "createChat/" + document.getElementById('joinForm').value;
}
