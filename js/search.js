$(document).ready(function() {
  var $search = $('#input-search');
  var $buttonSearch = $('#button-search');
  var $src='';
  // array para la lista de autocompletar
  var tagsCategories = ['criolla', 'selvatica', 'marina'];

  //
  $search.autocomplete({
    source: tagsCategories
  });






  $search.on('input', function(event) {
    var $value = $(this).val();
    
    // console.log(dataCategory);
    /*     var $value = $(this).val();
    if ($value === 'todos' ) {
      $('.filter').show('1000');
    } else {
      // Selecciona todos los elementos que no coinciden con el selector dado
      $('.filter').not('.' + $value).hide('3000');
      // Filtra todos los elementos que coincidan con el 
      $('.filter').filter('.' + $value).show('3000');
    } */
  });

  $buttonSearch.on('click', function(event) {
    var cate = $search.val();
    var restaurants = getRestaurants(data, cate);
    console.log(restaurants);
    for (var i = 0;i < restaurants.length;i++) {
      console.log(restaurants[i].name);
      console.log(restaurants[i].photo);
      $src = restaurants[i].photo;
      $('#gallery').append('<div class="gallery_restaurant col-xs-6 col-lg-4 col-md-4 col-sm-4 filter hdpe"><img src="' + $src + '" class="img-responsive" id="' + i + '"/><br/></div>');
    }
  });

  $('.img-responsive').on('click',function(event) {
    $('#myModal').modal('show');
  });
});
function getRestaurants(data, category) {
  return data[category].restaurants;
}