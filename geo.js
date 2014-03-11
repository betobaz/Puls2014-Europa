$(document).on('ready', function(){
    var geo = navigator.geolocation;

    function geo_exito(position){
        var lat = position.coords.latitude,
            lon = position.coords.longitude,
            mapa = new Image();
        mapa.src = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&maptype=hybrid&sensor=false&center="+lat+","+lon;
        $('#geo').append(mapa);
        console.log(position);
        buscarGeoInformacion(lat, lon);
    }
    function geo_error(){
        console.log('Donde estas?')
    }
    var opciones = {};
    geo.getCurrentPosition(geo_exito, geo_error, opciones);
    

    
});