$(document).ready(function()
{

	//alert('oi');
	$("#Home").click(function() {
		//alert('89');
		//var id=$(this).attr(id);
		$('#ResponseDiv').html('<p>Para compartilhar esse conteúdo, por favor utilize o link ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress (pesquisa@folhapress.com.br). As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado. para compartilhar esse conteúdo, por favor utilize o link ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress (pesquisa@folhapress.com.br). As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado.</p>').fadeIn('slow');
		//alert('ResponseDiv');
	});
	
	$('#Empresa').click(function(){
		$('#ResponseDiv').fadeOut('slow', function() {
			$('#ResponseDiv').html('<p>Para compartilhar esse conteúdo, por favor utilize o link ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress (pesquisa@folhapress.com.br). As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado. para compartilhar esse conteúdo, por favor utilize o link ou as ferramentas oferecidas na página. Textos, fotos, artes e vídeos da Folha estão protegidos pela legislação brasileira sobre direito autoral. Não reproduza o conteúdo do jornal em qualquer meio de comunicação, eletrônico ou impresso, sem autorização da Folhapress (pesquisa@folhapress.com.br). As regras têm como objetivo proteger o investimento que a Folha faz na qualidade de seu jornalismo. Se precisa copiar trecho de texto da Folha para uso privado, por favor logue-se como assinante ou cadastrado.</p>')
			setTimeout(function() { $('#ResponseDiv').fadeIn('slow'); }, 2000);
		});    
	})
	
	$('#Usuario').click(function(){
		$('#ResponseDiv').fadeOut('slow', function() {
			//alert('$( "#feeds" ).load( "feeds.html" );');
			$('#ResponseDiv').html('<p>Você receberá todas as informações do taxista que te buscará: nome, modelo e placa do carro, telefone. Assim, você pode entrar em contato com ele se necessário, e fica mais fácil de identificá-lo quando ele chegar. E agora é só esper… Ops, seu táxi chegou!</p>')
			//$( "#ResponseDiv" ).load( "feeds.html" );
			
			//$( "#ResponseDiv" ).load( "ajax/feeds.html", function() {
			//	alert( "Load was performed." );
			//});
			
			//$("#ResponseDiv").html('<object data="feeds.html">');
			
			setTimeout(function() { $('#ResponseDiv').fadeIn('slow'); }, 1000);
		});    
	})
	
	
	$('.click').click(function() {
		// get the contents of the link that was clicked
		var linkText = $(this).text();

		// replace the contents of the div with the link text
		$('#content-container').html(linkText);

		// cancel the default action of the link by returning false
		return false;
	});
});


