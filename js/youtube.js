class MyYoutube{
    constructor(selector, opt){
        this.init(selector, opt);
        this.bindingEvent();
    }
    init(selector, opt){
        this.body = document.querySelector("body");
        this.frame = document.querySelector(selector);
        this.key = opt.key;
        this.playlistId = opt.playlistId;
        this.num = opt.num;
    }
    bindingEvent(){
        this.getData();
        this.frame.addEventListener("click", e=>this.createPop(e));
        this.body.addEventListener("click", e=>this.removePop(e));
    }
    getData(){
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${this.key}&part=snippet&playlistId=${this.playlistId}&maxResults=${this.num}`

        fetch(url)
        .then(data=>{
            return data.json();
        })
        .then(json=>{
            const items = json.items;
            let results = "";
        
            items.forEach(item=>{
                let tit = item.snippet.title;
                let desc = item.snippet.description;
                const date = item.snippet.publishedAt.split("T")[0];
                const imgSrc = item.snippet.thumbnails.standard.url;
        
                if(tit.length > 30) tit = tit.substr(0, 30) + "...";
                if(desc.length > 150) desc = desc.substr(0, 150) + "...";
        
                results += `
                    <article>
                        <h1>${date}</h1>
                        <div class="pic">
                            <a href="${item.snippet.resourceId.videoId}"><img src=${imgSrc}></a>
                            <div class="con">
                                <h2>${tit}</h2>
                                <p>${desc}</p>
                            </div>
                        </div>
                    </article>
                `;
            });
            this.frame.innerHTML = results;
        });
    }
    createPop(e){
        e.preventDefault();

        const pic = e.target.closest(".pic");
        if (pic == null) return;

        const vidId = pic.querySelector("a").getAttribute("href");
        let pop = document.createElement("aside");
        pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen></iframe>
            <span class="close">CLOSE</span>
        `;
        this.body.append(pop);
    }
    removePop(e){
        const aside = e.target.closest("aside");
        if(aside == null) return;
        
        const closeBtn = aside.querySelector(".close");
        if(e.target == closeBtn) aside.remove();
    }
}