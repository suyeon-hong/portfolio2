const btnMo = document.querySelector(".btnMo");
const gnbMo = document.querySelector(".gnbMo");

btnMo.addEventListener("click", e=>{
    e.preventDefault();
    btnMo.classList.toggle("on");
    gnbMo.classList.toggle("on");
})