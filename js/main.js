$("#slider").owlCarousel({ //SLIDE 
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true
});

//ANCORA ANIMADA
//coloco o lugar delas, e chamo o evento, depois essa funcao recebe esse evento
//HTML E BODY, elementos globais vao receber uma animação
//eu especifico a propriedade e depois o tempo
//estou animando a propriedade scrollTop, onde tem o Y do inicio da página, ou seja ele pega o Y do 
//elemento para puxar etc..
//THIS é o elemento final
//hash é o HREF, onde puxo #servico
//
$("ul.navbar-nav > li > a").on('click', function(event){ 
	event.preventDefault();//Evitar q ocorra o movimento padrao, ou seja, n abre HREF normal, q seria #

	$('ul.navbar-nav li').removeClass('active');
	$(this).parent().addClass('active');

	$("html, body").animate({scrollTop:$(this.hash).offset().top-50}, 1200); //-50 para voltar e aparecer o nome
});

//menu fixo
$(window).scroll(function(){
	var scrollTopAtual = $(this).scrollTop();

	if (scrollTopAtual > 200){
		$('#navegacao').addClass('navegacao-fixa');
	}
	else{
		$('#navegacao').removeClass('navegacao-fixa');
	}
});


