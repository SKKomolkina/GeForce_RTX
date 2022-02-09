import {checkBox, slides} from "./constants";

// let img = document.createElement('img');
// img.src = imagesArray[step].checkCheckbox(checkBox.checked);
// img.classList.add('swiper-images__slide');
// img.style.left = 0 + 'px';
// document.querySelector('.swiper-images').appendChild(img);
// slides2 = document.querySelectorAll('.swiper-images__slide');
// if (left_swipe) {
//     img.style.left = offset * 960 + 'px';
//     document.querySelector('.swiper-images').appendChild(img);
//     if (step + 1 === imagesArray.length) {
//         step = 0;
//     } else {
//         step++;
//     }
// } else {
//     img.style.right = offset * 960 + 'px';
//     document.querySelector('.swiper-images').prepend(img);
//     if (step === 0) {
//         step = 3;
//     } else {
//         step--;
//     }
// }
// offset = 0;

// function left() {
//     if (step + 1 === imagesArray.length) {
//         step = 0;
//     } else {
//         step++;
//     }
//
//
//     let rightImg = document.createElement('img');
//     rightImg.src = imagesArray[step].checkCheckbox(checkBox.checked);
//     rightImg.classList.add('swiper-images__slide');
//     rightImg.style.right = 960 + 'px';
//     document.querySelector('.swiper-images').appendChild(rightImg);
//     //slides2 = document.querySelectorAll('.swiper-images__slide');
//     let offset2 = 0;
//
//     for (let i = 0; i < slides2.length; i++) {
//         slides2[i].style.left = offset2 * 960 - 960 + 'px';
//         offset2++;
//     }
//
//     setTimeout(function () {
//         slides2[0].remove();
//     }, 1000);
//
//     //offset2 = 0;
//
//
// }
//
// function right() {
//     if (step === 0) {
//         step = 3;
//     } else {
//         step--;
//     }
//
//     let leftImg = document.createElement('img');
//     leftImg.src = imagesArray[step].checkCheckbox(checkBox.checked);
//     leftImg.classList.add('swiper-images__slide');
//     leftImg.style.right = -960 + 'px';
//     document.querySelector('.swiper-images').prepend(leftImg);
//     //slides2 = document.querySelectorAll('.swiper-images__slide');
//     //let swap = slides2[0];
//     //slides2[0] = slides2[1];
//     //slides2[1] = swap;
//     let offset2 = -1;
//
//     for (let i = slides2.length; i >= 0; i--) {
//         slides2[i].style.right = offset2 * 960 + 960 + 'px';
//         offset2--;
//     }
//
//     setTimeout(function () {
//         slides2[1].remove();
//
//     }, 1000);
//
//
// }
//
// document.querySelector('.swiper-button-next').addEventListener('click', () => {
//     left();
// });
//
// document.querySelector('.swiper-button-prev').addEventListener('click', () => {
//     right();
// });
