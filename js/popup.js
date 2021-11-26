const popup = document.querySelector(".popup");
const btnClose = popup.querySelector(".close");
const isCookie = document.cookie.indexOf("popup=isdone");

(isCookie == -1) ? popup.style.display = "block" : popup.style.display = "none";

btnClose.addEventListener("click", e=>{
    e.preventDefault();
    let ischecked = popup.querySelector("input[type='checkbox']").checked;

    if(ischecked) setCookie("popup", "isdone", 1);
    popup.style.display = "none";
});


function setCookie(name, value, delay){
    let today = new Date();
    let date = today.getDate();
    today.setDate(date + delay);
    let dueDate = today.toGMTString();
    
    document.cookie = `${name} = ${value}; expires = ${dueDate};`;
}
