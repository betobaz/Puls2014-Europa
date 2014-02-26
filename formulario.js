var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();

function mostrarFormulario(e){    
    $form.slideToggle(e);
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
    return false;
}

// Eventos
$button.on('click', mostrarFormulario);

$form.on('submit', agregarPost);
