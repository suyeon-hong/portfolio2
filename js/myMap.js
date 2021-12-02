const map1 = document.querySelector("#map1");
const map2 = document.querySelector("#map2");
const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

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
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667);
        const marker = new kakao.maps.Marker({
            position: markerPosition
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

