const tabs = document.querySelectorAll(".tabs li");
const nums = document.querySelectorAll(".numbers a");

activation(tabs);
activation(nums);

function activation(tabs){
    tabs.forEach(tab=>{
        tab.addEventListener("click", e=>{
            e.preventDefault();

            for(let el of tabs) el.classList.remove("on");
            tab.classList.add("on");
        });
    });
}