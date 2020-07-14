document.querySelectorAll('section .row .box img').forEach(item => {
    item.addEventListener('mouseover', function(){
        item.style.transform = `translateY(-${ item.height - 512 }px)`;
    });
    item.addEventListener('mouseout', function(){
        item.style.transform = "translateY(0px)";
    });
});
