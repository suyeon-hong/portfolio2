const btns = document.querySelectorAll(".faq li");
const boxs = document.querySelectorAll(".faq .box");

btns.forEach((btn,index)=>{
    btn.addEventListener("click", e=>{
        e.preventDefault();

        let isOn = btn.classList.contains("on");
        if(isOn){
            btn.classList.remove("on");
            boxs[index].style.display = "none";
        }else{
            for(let btn of btns) btn.classList.remove("on");
            btns[index].classList.add("on");
    
            for(let box of boxs) box.style.display = "none";
            boxs[index].style.display = "block";
        }
    });
});