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
};

const cyberpunk = document.querySelector('#cyberpunk');
const metro = document.querySelector('#metro');
const doom = document.querySelector('#doom');
const minecraft = document.querySelector('#minecraft');

const preview = document.querySelector('.rays__image-preview');
const popup = document.querySelector('.popup');
const slide = popup.querySelector('.swiper-slide');
const checkBox = document.querySelector('input[type="checkbox"]');

let chosenImage = cyberpunk.id;

// change preview
document.querySelectorAll('.rays__image').forEach((item) => {
    item.addEventListener('click', () => {
        preview.src = item.src;
        chosenImage = item.id;
        console.log(item);
    });
});

//checkbox
checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
        preview.src = imagesArray[chosenImage]['on'];

        cyberpunk.src = cyberpunkOn;
        metro.src = metroOn;
        doom.src = doomOn;
        minecraft.src = minecraftOn;
    } else {
        preview.src = imagesArray[chosenImage]['off'];

        cyberpunk.src = cyberpunkOff;
        metro.src = metroOff;
        doom.src = doomOff;
        minecraft.src = minecraftOff;
    }
});

//swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // spaceBetween: 350,
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// popup
preview.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    popup.querySelector('.popup-image__image').src = preview.src;
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
