const key = "AIzaSyBiHz7c5hPNxp0P81utsPpEVutfeuY-OR8";
const playlistId = "PLbO44G2j_RJzSSLK5KKfW45QZY1QzUr0b";
const num = 3;

const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=snippet&playlistId=${playlistId}&maxResults=${num}`

fetch(url)
.then(data=>{
    return data.json();
})
.then(json=>{
    const items = json.items;

    console.log(items);
    
});