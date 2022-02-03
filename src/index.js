import './index.css';
import Swiper, {Navigation} from "swiper";

import cyberpunkOn from './images/rays/cyberpunk-rtx-on.jpg';
import cyberpunkOff from './images/rays/cyberpunk-rtx-off.jpg';

import metroOn from './images/rays/metro-on.jpg';
import metroOff from './images/rays/metro-off.jpg';

import doomOn from './images/rays/doom-on.jpg';
import doomOff from './images/rays/doom-off.jpg';

import minecraftOn from './images/rays/minecraft-rtx-on-2.jpg';
import minecraftOff from './images/rays/minecraft-rtx-off-2.jpg';

const imagesArray = {
    'cyberpunk': {on: cyberpunkOn, off: cyberpunkOff},
    'metro': {on: metroOn, off: metroOff},
    'doom': {on: doomOn, off: doomOff},
    'minecraft': {on: minecraftOn, off: minecraftOff}
}

const indexOfImages = {
    'metro': 0,
    'doom': 1,
    'minecraft': 2,
    'cyberpunk': 3,
}

const cyberpunk = document.querySelector('#cyberpunk');
const metro = document.querySelector('#metro');
const doom = document.querySelector('#doom');
const minecraft = document.querySelector('#minecraft');

const cyberpunkSwiper = document.querySelector('#cyberpunk-swiper');
const metroSwiper = document.querySelector('#metro-swiper');
const doomSwiper = document.querySelector('#doom-swiper');
const minecraftSwiper = document.querySelector('#minecraft-swiper');

const preview = document.querySelector('.rays__image-preview');
const popup = document.querySelector('.popup');
const slide = popup.querySelector('.swiper-slide');
const checkBox = document.querySelector('input[type="checkbox"]');

let chosenMiniImage = cyberpunk.id;

//
// change preview
document.querySelectorAll('.rays__image').forEach((item) => {
    item.addEventListener('click', () => {
        preview.src = item.src;
        chosenMiniImage = item.id;
    });
});

//
//checkbox
checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        preview.src = imagesArray[chosenMiniImage]['off'];

        cyberpunk.src = cyberpunkOff;
        metro.src = metroOff;
        doom.src = doomOff;
        minecraft.src = minecraftOff;
    }
    if (!checkBox.checked) {
        preview.src = imagesArray[chosenMiniImage]['on'];

        cyberpunk.src = cyberpunkOn;
        metro.src = metroOn;
        doom.src = doomOn;
        minecraft.src = minecraftOn;
    }
});

//
// popup
preview.addEventListener('click', () => {
    popup.classList.add('popup_opened');

    changeSwiperImages();

    swiper.activeIndex = indexOfImages[chosenMiniImage];

    console.log(swiper.activeIndex);
});

popup.addEventListener('click', (e) => {
    document.addEventListener('click', (e) => {
        if (e.target === popup || e.target === slide) {
            popup.classList.remove('popup_opened');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            popup.classList.remove('popup_opened');
        }
    });
});

function changeSwiperImages() {
    // swiper.activeIndex = chosenPreviewImage;
        cyberpunkSwiper.src = cyberpunkOff;
        metroSwiper.src = metroOff;
        doomSwiper.src = doomOff;
        minecraftSwiper.src = minecraftOff;

    if (!checkBox.checked) {
        cyberpunkSwiper.src = cyberpunkOn;
        metroSwiper.src = metroOn;
        doomSwiper.src = doomOn;
        minecraftSwiper.src = minecraftOn;
    }
}

//
//swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
