$(document).ready(function() {
  //Declarando variables para seleccionar los elementos del DOM
  var $search = $('#input-search');
  var $buttonSearch = $('#button-search');
  // Declarando variables para la ruta de imagen
  var $src = '';
  
  // array para la lista de autocompletar
  var tagsCategories = ['criolla', 'selvatica', 'marina'];
  // Funcion que muestra las imagenes de los restaurantes
  showRestaurantImage(data, 'criolla');
  showRestaurantImage(data, 'selvatica');
  showRestaurantImage(data, 'marina');

  $search.on('input', function(event) {
    var $value = $(this).val();
    // console.log(dataCategory);
    console.log($value);
    if (($value === 'todos') || ($value === ' ')) {
      $('.filter').show('1000');
    } else {
      // Selecciona todos los elementos que no coinciden con el selector dado
      $('.filter').not('.' + $value).hide('3000');
      // Filtra todos los elementos que coincidan con el 
      $('.filter').filter('.' + $value).show('3000');
    } 
  });

  $buttonSearch.on('click', function(event) {
    var cate = $search.val();
    var restaurants = getRestaurants(data, cate);
  });

  $('img').on('click', function(event) {
    $('#myModal').modal('show');
    var $categoryImg = $(this).attr('data-category');
    var $index = $(this).attr('data-index');
    var restaurants = getRestaurants(data, $categoryImg);
    // console.log(restaurants);
    
    for (var i = 0;i < restaurants.length;i++) {
      
      if ($index == i) {
         var name =restaurants[i].name;
        var address = restaurants[i].address;
        $('#modal-titleRest').text(name);
        $('#modal-addressRest').text(address);
      }
    } 
  });
});
function getRestaurants(data, category) {
  return data[category].restaurants;
}
function showRestaurantImage(data, cate) {
  var restaurants = getRestaurants(data, cate);
  for (var i = 0;i < restaurants.length;i++) {
    $src = restaurants[i].photo;
    $('#gallery').append('<div class="gallery_restaurant col-xs-6 col-lg-4 col-md-4 col-sm-4 filter ' + cate + '"><img src="' + $src + '" class="img-rest" data-index="' + i + '" data-category=' + cate + '><br/></div>');
  }
}