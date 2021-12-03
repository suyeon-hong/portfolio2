class MyYoutube{
    constructor(selector, opt){
        this.init(selector, opt);
        this.bindingEvent();
    }
    init(selector, opt){
        this.frame = document.querySelector(selector);
        this.key = opt.key;
        this.playlistId = opt.playlistId;
        this.num = opt.num;
    }
    bindingEvent(){
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
        
                if(tit.length > 50) tit = tit.substr(0, 50) + "...";
                if(desc.length > 150) desc = desc.substr(0, 150) + "...";
        
                results += `
                    <article>
                        <h1>${date}</h1>
                        <div class="pic">
                            <img src=${imgSrc}>
                        </div>
                        <div class="con>
                            <h2>${tit}</h2>
                            <p>${desc}</p>
                        </div>
                    </article>
                `;
            });
            this.frame.innerHTML = results;
        });
    }
}