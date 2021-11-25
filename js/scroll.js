const myscrolls = document.querySelectorAll(".myscroll");
const navis = document.querySelectorAll("#navi li");
const navis_arr = Array.from(navis);
const base = -300;
const speed = 500;
let posArr;

setPos();

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset;

    myscrolls.forEach((_,index)=>{
        if(scroll >= posArr[index] + base){
            activation(navis, index);
            activation(myscrolls, index);
        }
    });
});

window.addEventListener("resize", ()=>{
    let itemIndex = document.querySelector("#navi li.on");
    let activeIndex = navis_arr.indexOf(itemIndex);
    setPos();
    movingScroll(activeIndex);
});

navis.forEach((navi,index)=>{
    navi.addEventListener("click", ()=>{
        activation(navis,index);
        movingScroll(index);
    });
});

function movingScroll(index){
    new Anim(window, {
        prop: "scroll",
        value: posArr[index],
        duration: speed
    });
}

function activation(item, index){
    for(let el of item) el.classList.remove("on");
    item[index].classList.add("on");
}

function setPos(){
    posArr = [];
    for(let el of myscrolls) posArr.push(el.offsetTop);
}
