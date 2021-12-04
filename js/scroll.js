const visual = document.querySelector("#visual");
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
        if(scroll >= posArr[0]){
            const size = 60 + scroll/10;
            const h1_top = 40 - scroll/10
            const con_top = 60 - scroll/20;

            console.log(top);
            visual.querySelector(".circle").style.width = `${size}vw`;
            visual.querySelector(".circle").style.height = `${size}vw`;
            visual.querySelector("h1").style.top = `${h1_top}%`;
            visual.querySelector(".con").style.top = `${con_top}%`;
        }else{
            visual.classList.add("off");
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
