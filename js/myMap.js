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

        const imageSrc = 'img/marker.png', 
        imageSize = new kakao.maps.Size(70, 69),
        imageOption = {offset: new kakao.maps.Point(35, 69)};
        
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = this.options.center;

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
        const moveLatLon = this.options.center;
        map.panTo(moveLatLon);            
    }
}

