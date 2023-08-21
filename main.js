const input_box = document.getElementById('box');
const list = document.getElementById('list');

function AddList(){
    if(input_box.value === ''){
        alert("U must write a list!");
    }
    else{
        let i = document.createElement('li');
        i.innerHTML = input_box.value;
        list.appendChild(i);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        i.appendChild(span);
    }
    input_box.value = '';
    save();
}

list.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
}, false);

function save(){
    localStorage.setItem("Data" , list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem("Data");
}
showList()