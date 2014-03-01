var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first(),
    ls = localStorage,
    ss = sessionStorage;

if(ls.getItem('autosave')){
    $titulo.val(ss.titulo);
    $url.val(ss.url);
}
    
var id = setInterval(function(){
    ss.titulo = $titulo.val();
    ss.url = $url.val();
},1000)

function mostrarFormulario(e){    
    $form.slideToggle(e);
    $list.slideToggle();
    return false;
}
function agregarPost(e){
    var url = $url.val(),
        titulo = $titulo.val(),
        $clone = $post.clone();
        $clone
            .find('.titulo_item a').html(titulo).attr("href", url);
        $clone.hide();
        $list.prepend($clone);
        $clone.fadeIn();
    mostrarFormulario(e);
    $titulo.val("");
    $url.val("");
    return false;
}

// Eventos
$button.on('click', mostrarFormulario);

$form.on('submit', agregarPost);
