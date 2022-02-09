import './index.css';

import Swiper, {Navigation, Pagination} from "swiper";

import Image from "./utils/Image";

import {
    popup,
    preview,
    checkBox,
    images,
    slideElement,
    slides,
    buttonShowAllDrivers,
    driversContainer, driversImages, buttonShowAllGames
} from './utils/constants';

import cyberpunkOn from './images/rays/cyberpunk-rtx-on.jpg';
import cyberpunkOff from './images/rays/cyberpunk-rtx-off.jpg';

import metroOn from './images/rays/metro-on.jpg';
import metroOff from './images/rays/metro-off.jpg';

import doomOn from './images/rays/doom-on.jpg';
import doomOff from './images/rays/doom-off.jpg';

import minecraftOn from './images/rays/minecraft-rtx-on-2.jpg';
import minecraftOff from './images/rays/minecraft-rtx-off-2.jpg';

import geforceImage from './images/geforce/image-739.png';

const metroImage = new Image({id: 0, srcOff: metroOff, srcOn: metroOn});
const doomImage = new Image({id: 1, srcOff: doomOff, srcOn: doomOn});
const minecraftImage = new Image({id: 2, srcOff: minecraftOff, srcOn: minecraftOn});
const cyberpunkImage = new Image({id: 3, srcOff: cyberpunkOff, srcOn: cyberpunkOn});

//
let chosenImage = 3;
let step = 3;
let offset = 0;
// let slides2;

const imagesArray = [metroImage, doomImage, minecraftImage, cyberpunkImage];

// SWIPERS
function renderSwiper() {
    let img = document.createElement('img');
    img.src = imagesArray[step].checkCheckbox(checkBox.checked);
    img.classList.add('swiper-images__slide');
    img.style.left = offset * 960 + 'px';

    document.querySelector('.swiper-images');

    if (step + 1 === imagesArray.length) {
        step = 0;
    } else {
        step++
    }
    offset = 1;
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loopedSlides: 1,
    loop: true,
    modules: [Navigation],
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const gamesSwiper = new Swiper('.swiper-dlss', {
    slidesPerView: 1,
    spaceBetween: 500,
    modules: [Pagination],
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//
function renderImages() {
    let counter = 0;

    images.forEach((image) => {
        image.src = imagesArray[counter].checkCheckbox(checkBox.checked);
        let imageId = imagesArray[counter].returnId();

        image.addEventListener('click', () => {
            preview.src = image.src;
            chosenImage = imageId;
        });

        counter++;
    });
}

function renderPreview() {
    preview.src = cyberpunkImage.checkCheckbox(checkBox.checked);
}

checkBox.addEventListener('change', () => {
    renderPreview();
    renderImages();
});

//
// popup
preview.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    renderSwiper();
});

popup.addEventListener('click', (e) => {
    document.addEventListener('click', (e) => {
        if (e.target === popup || e.target === slideElement) {
            popup.classList.remove('popup_opened');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            popup.classList.remove('popup_opened');
        }
    });
});

// button
let buttonToOpenGames = false;

buttonShowAllGames.addEventListener('click', () => {
    toggleShowGames();
});

function toggleShowGames() {
    if (!buttonToOpenGames) {
        document.querySelector('.dlss__games-preview_hidden').style.display = 'flex';
        buttonShowAllGames.innerHTML = 'Скрыть';
        return buttonToOpenGames = true;
    }
    if (buttonToOpenGames) {
        document.querySelector('.dlss__games-preview_hidden').style.display = 'none';
        buttonShowAllGames.innerHTML = 'Показать полностью';
        return buttonToOpenGames = false;
    }
}

let buttonToOpenDrivers = false;
let windowSmall = false;

buttonShowAllDrivers.addEventListener('click', () => {
    toggleShowDrivers();
});

function toggleShowDrivers() {
    if (!buttonToOpenDrivers) {
        driversImages.forEach((item) => {
            item.classList.remove('drivers__image_hidden');
            // handleChangeWindowSize();
        });
        buttonShowAllDrivers.innerHTML = 'Скрыть';
        return buttonToOpenDrivers = true;
    }
    if (buttonToOpenDrivers) {
        handleChangeWindowSize();
        buttonShowAllDrivers.innerHTML = 'Показать полностью';
        return buttonToOpenDrivers = false;
    }
}

//
window.addEventListener('resize', () => {
    selectWindowSize();
    handleChangeWindowSize();
});

function handleChangeWindowSize() {
    console.log(windowSmall);
    if (!windowSmall) {
        removeAllHiddenLayers();
        showSixIcons();
    }

    if (windowSmall) {
        removeAllHiddenLayers();
        showFourIcons();
    }
}

function selectWindowSize() {
    if (driversContainer.clientWidth === 1199) {
        windowSmall = false;
    } else {
        windowSmall = true;
    }
    handleChangeWindowSize();
}

function removeAllHiddenLayers() {
    driversImages.forEach((item) => {
        item.classList.remove('drivers__image_hidden');
    });
}

function showSixIcons() {
    for (let i = 0; i < driversImages.length; i++) {
        if (i > 5) {
            driversImages[i].classList.add('drivers__image_hidden');
        }
    }
}

function showFourIcons() {
    for (let i = 0; i < driversImages.length; i++) {
        if (i > 3) {
            driversImages[i].classList.add('drivers__image_hidden');
        }
    }
}


renderImages();
renderPreview();
selectWindowSize();
