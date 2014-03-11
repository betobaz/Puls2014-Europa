$(document).on('ready', function(){
    $('footer .logos').load('logos_footer.html a:last');
    /*$.get('logos_footer.html', function(data){
        console.log(data);
        $('footer').load(data);
    });*/
    $.get('usuario.json', function(data){
        console.log(data);
        var avatar = new Image();
        avatar.src=data.avatar;
        avatar.title=data.nombre + " " +data.apellido;
        
        $('#avatar').append(avatar);
    });
    
    var base_ur = "http://query.yahooapis.com/v1/public/yql?";
    window.buscarGeoInformacion = function(lat, lon){
        console.log(lat, lon);
        var query = encodeURIComponent('SELECT * FROM geo.placefinder WHERE text="'+lat+','+lon+'" AND gflags="R"');
        console.log(base_ur+'q='+query);
        $.ajax(base_ur+'q='+query, {
            
           dataType: "jsonp",
           jsonpCallback: 'procesarGeoInfo',
           error:function(data){
               
           },
           data:{
              format: "json" 
           }
        });
    }
    
});
function procesarGeoInfo(datos){
        console.log(datos)
    }