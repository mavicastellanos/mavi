// Text
var text = [
  'Encontrarás todo tipo de accesorios, juguetes y comodidad para tu mascota',
  '-Open 24/7- Brindamos servicios de guardería las 24 horas, todos los días',
  'Ofrecemos servicio de consulta medica veterinaría para la salud de tu mascota',
  'Contamos con servicio de emergencias y hopitalización 24 horas',
];

for (var i = 0; i < text.length; i++) {
  var id = 'text-' + i;
  var textItem = text[i];
  
  while (textItem[textItem.length - 1] !== '.') {
    textItem += '.'
    break;
  }
  
  document.getElementById(id).innerHTML = textItem;
}

// Alert
window.onload = function() {
  alert('Bienvenido a MY PET SHOP!');
}

// Initialize smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]');

// Initialize carousel
var mySiema = new Siema({
  perPage: 3,
  duration: 200,
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

// Initialize autofocus
var cursorFocus = function(elem) {
  var x = window.scrollX, y = window.scrollY;
  elem.focus();
  window.scrollTo(x, y);
}

cursorFocus(document.getElementById('name'));

// Sticky Navigation
var nav = document.getElementById('nav');
var topOfNav = nav.offsetTop;
var stickyNav = function() {
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}
window.addEventListener('scroll', stickyNav);

// Initialize map
function initMap() {
  var parque93 = {lat: 4.676944, lng: -74.048611};
  var uluru = parque93;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru,
    scrollwheel: false,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}