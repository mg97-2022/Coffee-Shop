// start header
function stopPropagation(e) {
    e.stopPropagation();
};

// nav-bar part
const bars = document.querySelector(".bars");
const navItems = document.querySelector(".navigation");

bars.addEventListener("click", () => {
    navItems.classList.toggle("opacity");
});

document.addEventListener("click", (e) => {
    if (e.target != bars && e.target != navItems) {
        navItems.classList.remove("opacity");
    }
});

navItems.addEventListener("click", (ele) => {
    stopPropagation(ele);
})

// search-bar part
const searchItem = document.querySelector(".search");
const searchBox = document.querySelector(".search-box");

searchItem.addEventListener("click", () => {
    searchItem.classList.toggle("searchbox-open");
    searchBox.classList.toggle("display");
});

document.addEventListener("click", (e) => {
    if (e.target != searchItem && e.target != searchBox) {
        searchBox.classList.remove("display");
    }
});


// search-bar part
const shopItem = document.querySelector(".cart");
const cartShop = document.querySelector(".list");

shopItem.addEventListener("click", () => {
    shopItem.classList.toggle("cartShop-open");
    cartShop.classList.toggle("display");
});

document.addEventListener("click", (e) => {
    if (e.target != shopItem && e.target != cartShop) {
        cartShop.classList.remove("display");
    }
});

cartShop.addEventListener("click", (ele) => {
    stopPropagation(ele);
});

// end header


// start landing 
// const slide = document.querySelector('.slides');
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");
// let slides = document.querySelectorAll('.slide');
// let index = 1;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = screen.width;
// // const slideWidth = slides[index].clientWidth;

// function startSlide() {
//     setInterval(() => {
//         moveToNextSlide();
//       }, 20000);
// }

// slide.addEventListener('transitionend', () => {
//   slides = document.querySelectorAll('.slide');
//   if (slides[index].id === firstClone.id) {
//     slide.style.transition = 'none';
//     index = 1;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }

//   if (slides[index].id === lastClone.id) {
//     slide.style.transition = 'none';
//     index = slides.length - 2;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//   }
// });

// function moveToNextSlide() {
//     if (index >= slides.length - 1) return;
//     index++;
//     slide.style.transition = '1.5s';
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
// }

// function moveToPreviousSlide() {
//     if (index <= 0) return;
//     index--;
//     slide.style.transition = '1.5s';
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
// }

// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPreviousSlide);

// startSlide();
// end landing


