const myscrolls = document.querySelectorAll(".myscroll");
const navis = document.querySelectorAll("#navi li");
const navis_arr = Array.from(navis);
const speed = 500;
let posArr;
let enableClick = true;

setPos();

window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset;

    myscrolls.forEach((_,index)=>{
        if(scroll >= posArr[index]){
            activation(navis, index);
            activation(myscrolls, index);
        }
    });
});

window.addEventListener("resize", ()=>{
    const itemIndex = document.querySelector("#navi li.on");
    const activeIndex = navis_arr.indexOf(itemIndex);
    setPos();
    movingScroll(activeIndex);
});

window.addEventListener("mousewheel", e=>{
    e.preventDefault();

    const itemIndex = document.querySelector("#navi li.on");
    const activeIndex = navis_arr.indexOf(itemIndex);

    if(e.deltaY > 0){
        if(activeIndex == myscrolls.length - 1) return;
        movingScroll(activeIndex + 1);
    }
    if(e.deltaY < 0){
        if(activeIndex == 0) return;
        movingScroll(activeIndex - 1);
    }
}, {passive:false});

navis.forEach((navi,index)=>{
    navi.addEventListener("click", ()=>{
        if(enableClick){
            enableClick = false;
            
            activation(navis,index);
            movingScroll(index);
        }
    });
});

function movingScroll(index){
    new Anim(window, {
        prop: "scroll",
        value: posArr[index],
        duration: speed,
        callback: ()=>{
            enableClick = true;
        }
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
