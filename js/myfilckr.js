class Myflickr{
    constructor(selector, opt){
        if(!selector){
            console.error("selector값은 필수입력값 입니다.");
            return;
        }
        this.init(selector, opt);
        this.bindingEvent();
    }
    init(selector, opt){
        this.photoBox = document.querySelector(selector);
        this.loadingImg = document.querySelector(".loading");
        this.base = "https://www.flickr.com/services/rest/?";
        this.method = "flickr.interestingness.getList";
        this.api_key = opt.key;
        this.format = "json";
        this.per_page = opt.page;
        this.url = `${this.base}method=${this.method}&api_key=${this.api_key}&format=${this.format}&per_page=${this.per_page}&nojsoncallback=1`;
    }
    bindingEvent(){
        this.callData();
    }
    callData(){
        fetch(this.url)
        .then(data=>{
            let result = data.json();
            return result;
        })
        .then(json=>{
            let items = json.photos.photo;
            this.createList(items);
        })
    }
    createList(items){
        let htmls = "";
        items.map(data=>{
            htmls += `
                <li class='item'>
                    <div class='li_inner'>
                        <a href='https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg'>
                            <img src='https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_n.jpg'>
                        </a>
                        <h1>${data.title}</h1>
                        <h2>${data.owner}</h2>
                    </div>
                </li>
            `
        });
        this.photoBox.innerHTML = htmls;
        this.loadImg();
    }
    loadImg(){
        let imgs = this.photoBox.querySelectorAll("img");
        let len = imgs.length;
        let num = 0;

        for(let el of imgs){
            el.addEventListener("load", ()=>{
                num++;
                if(num === len){
                    new Isotope(this.photoBox, {
                        itemSelector: ".item",
                        columnWidth: ".item",
                        transitionDuration: ".5s"
                    });
                    this.loadingImg.classList.add("off");
                    this.photoBox.classList.add("on");
                }
            });
        }
    }
}






