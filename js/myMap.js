

window.addEventListener("load", ()=>{
    new myMap("#map1", {
        center: [33.450701, 126.570667],
        level: 3
    });
    new myMap("#map2", {
        center: [33.450701, 126.570667],
        level: 3
    });
})

class myMap{
    constructor(selector, opt){
        this.container = document.querySelector(selector);
        this.options = {
            center: new kakao.maps.LatLng(opt.center[0], opt.center[1]),
            level: opt.level
        }

        const map = new kakao.maps.Map(this.container, this.options);

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.TOPLEFT);

        const imageSrc = '../img/marker.png', 
        imageSize = new kakao.maps.Size(64, 69),
        imageOption = {offset: new kakao.maps.Point(27, 69)};
        
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

        const marker = new kakao.maps.Marker({
            position: markerPosition, 
            image: markerImage
        });

        marker.setMap(map);
        window.addEventListener("resize", ()=>{
            this.panTo(map); 
        })
    }
    panTo(map) {
        const moveLatLon = new kakao.maps.LatLng(33.450701, 126.570667);
        map.panTo(moveLatLon);            
    }
}

