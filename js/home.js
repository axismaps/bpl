var colors = ["#841f21","#0a5e85","#66a61e","#a6761d"];	// temporary
function createCategories(){
	var $categoriesDiv = $( "#categories" );
	
	_.each( categories, function( cat, i ){
		if ( params.categories.indexOf( cat.id ) == -1 ) return;	// somehow this needs to know which categories to show
		var $div = $( "<div>" ).appendTo( $categoriesDiv )
			.attr( "class", "category card " + cat.id  )
			.attr( "id", cat.id )
			.click( function(){
  			  $( this ).siblings().css( "opacity", 0 );
  			  $( this ).addClass( "animated bounceOut" );
				selectCategory( cat.id );
			});

		$( "<div><p>" + cat.name + "</p></div>" )
			.css( "border-top-color", colors[i] )
			.appendTo( $div );
	});	
}