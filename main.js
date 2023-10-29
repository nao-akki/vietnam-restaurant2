'use strict';

{
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-image');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let activeIndex = 0;

  thumbnails[0].addEventListener('click', () => {
    activeIndex = 0;
    mainImage.src = thumbnails[0].src;
    thumbnails[0].classList.add('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
  });

  thumbnails[1].addEventListener('click', () => {
    activeIndex = 1;
    mainImage.src = thumbnails[1].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.add('active');
    thumbnails[2].classList.remove('active');
  });
  
  thumbnails[2].addEventListener('click', () => {
    activeIndex = 2;
    mainImage.src = thumbnails[2].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.add('active');
  });

  next.addEventListener('click', () => {
    activeIndex++;
    if (activeIndex > 2) {
      activeIndex = 0;
    }

    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });

  prev.addEventListener('click', () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = 2;
    }

    mainImage.src = thumbnails[activeIndex].src;
    thumbnails[0].classList.remove('active');
    thumbnails[1].classList.remove('active');
    thumbnails[2].classList.remove('active');
    thumbnails[activeIndex].classList.add('active');
  });
}

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');


  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');

    });

      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active')

      });

      document.getElementById(clickedItem.dataset.id).classList.add('active');

    });


  });
}