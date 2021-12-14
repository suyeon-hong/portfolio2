class CookiePopup{
    constructor(selector, opt){
        this.init(selector, opt);
        this.bindingEvent();
    }
    init(selector, opt){
        this.popup = document.querySelector(selector);
        this.btnClose = this.popup.querySelector(opt.btnClose);
        this.label = this.popup.querySelector("label");
        this.isCookie = document.cookie.indexOf(`${opt.name}=${opt.value}`);
        this.name = opt.name;
        this.value = opt.value;
        this.delay = opt.delay;
    }
    bindingEvent(){
        (this.isCookie == 0) ? this.popup.style.display = "none" : this.popup.style.display = "block";
    
        this.btnClose.addEventListener("click", e=>{
            e.preventDefault();
            let ischecked = this.popup.querySelector("input[type='checkbox']").checked;
    
            if(ischecked) this.setCookie();
            this.popup.style.display = "none";
        });

        this.label.addEventListener("click", ()=>{
            this.label.classList.toggle("on");
        });
    }
    setCookie(){
        let today = new Date();
        let date = today.getDate();
        today.setDate(date + this.delay);
        let dueDate = today.toGMTString();
        
        document.cookie = `${this.name} = ${this.value}; expires = ${dueDate};`;
    }
}