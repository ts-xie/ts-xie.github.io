var $navBar = document.querySelector('.navbar-burger');
var $target = document.getElementById($navBar.dataset.target);

$navBar.addEventListener('click', function(){
  $navBar.classList.toggle('is-active');
  $target.classList.toggle('is-active');
});
