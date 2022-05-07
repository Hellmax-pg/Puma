document.querySelector('.header__icon').addEventListener('click', function() {
    item = document.querySelector('.menu');
    if (item.classList.contains('active')) {
      item.classList.remove("active");
      item.classList.add("disable");
    } else {
      item.classList.remove("disable");
      item.classList.add("active");
    }
});