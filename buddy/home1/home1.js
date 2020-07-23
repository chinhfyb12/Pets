document.querySelectorAll('.polymorph1').forEach(item => {
  item.parentNode.parentNode.addEventListener('mouseover', function() {
    item.setAttribute('d', 'M86,54c0,21.26-15,23-33,19C34.43,68.87,7.95,69.5,6,48C5,37,18.5,6,39,6c9.04,0,23.4,6.88,30,13C83,32,86,48.06,86,54z');
  });
  item.parentNode.parentNode.addEventListener('mouseout', function(){
    item.setAttribute('d', 'M86,54c0,21.26-15,22-33,24C33.8,80.13,4,80.26,4,59C4,48.37,18.5,6,39,6c9.04,0,19.4,8.88,26,15C79,34,86,48.06,86,54z');
  });
});
document.querySelectorAll('.polymorph2').forEach(item => {
  item.parentNode.parentNode.addEventListener('mouseover', function() {
    item.setAttribute('d', 'M87,54c-3,23-14,22-29,20c-13.67-1.82-30.64,2.43-43,0C8.36,72.69,4,63.14,4,54C4,41,10,9,32,7C53.45,5.05,89.2,37.14,87,54z');
  });
  item.parentNode.parentNode.addEventListener('mouseout', function(){
    item.setAttribute('d', 'M82,32c8,22-23,53-38,51c-13.67-1.82-11.64-19.57-24-22c-6.64-1.31-17-3.86-17-13C3,35,16,10,38,8C59.45,6.05,76.19,16.02,82,32z');
  });
});
document.querySelectorAll('.polymorph3').forEach(item => {
  item.parentNode.parentNode.addEventListener('mouseover', function() {
    item.setAttribute('d', 'M86,48c-3,23-16,30-31,28c-13.67-1.82-21-3-33-9C15.95,63.97-0.09,37.17,4,29C10,17,23.91,8,46,8C67,8,88.2,31.14,86,48z');
  });
  item.parentNode.parentNode.addEventListener('mouseout', function(){
    item.setAttribute('d', 'M85,54c-3,23-30,14-45,12c-13.67-1.82-14.64,10.43-27,8C6.36,72.69,2,63.14,2,54c0-13,13-38,35-40C58.45,12.05,87.2,37.14,85,54z');
  });
});

let check = function() {
  let width = screen.width;
  if(width > 991) {
    document.querySelectorAll('header > .navbar > .collapse > .navbar-nav > .nav-item').forEach(item => {
      item.addEventListener('mouseover', function() {
        item.querySelector('.navbar-nav').style.opacity = "1";
        item.querySelector('.navbar-nav').style.pointerEvents = "all";
      });
      item.addEventListener('mouseout', function() {
        item.querySelector('.navbar-nav').style.opacity = "0";
        item.querySelector('.navbar-nav').style.pointerEvents = "none";
      });
    });
  } 
}()

document.querySelector('body').onscroll = function() {
  document.querySelector('header > .navbar').style.transform = `translateY(${window.pageYOffset}px)`
  if(window.pageYOffset >= 100) {
    document.querySelector('header > .navbar').style.background = 'white'
    document.querySelector('header > .navbar').style.boxShadow = '2px 2px 3px 0px #ffffff'
  }
  if(window.pageYOffset < 100) {
    document.querySelector('header > .navbar').style.background = 'none'
    document.querySelector('header > .navbar').style.boxShadow = 'none'
  }
}

document.querySelectorAll('.navbar-toggler').forEach(item => {
  item.addEventListener('click', function() {
    item.classList.toggle('active');
  });
});

document.querySelector('.box-menu').addEventListener('click', function() {
  document.querySelector('.box-menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
});