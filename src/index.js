import './index.css';

import Swiper, {Pagination} from "swiper";

import Image from "./utils/Image";

import {
    popup,
    preview,
    checkBox,
    images,
    slideElement,
    buttonShowAllDrivers,
    driversContainer,
    driversImages,
    buttonShowAllGames,
    rightButton,
    leftButton,
    page
} from './utils/constants';

import cyberpunkOn from './images/rays/cyberpunk-rtx-on.jpg';
import cyberpunkOff from './images/rays/cyberpunk-rtx-off.jpg';

import metroOn from './images/rays/metro-on.jpg';
import metroOff from './images/rays/metro-off.jpg';

import doomOn from './images/rays/doom-on.jpg';
import doomOff from './images/rays/doom-off.jpg';

import minecraftOn from './images/rays/minecraft-rtx-on-2.jpg';
import minecraftOff from './images/rays/minecraft-rtx-off-2.jpg';

const metroImage = new Image({id: 0, srcOff: metroOff, srcOn: metroOn});
const doomImage = new Image({id: 1, srcOff: doomOff, srcOn: doomOn});
const minecraftImage = new Image({id: 2, srcOff: minecraftOff, srcOn: minecraftOn});
const cyberpunkImage = new Image({id: 3, srcOff: cyberpunkOff, srcOn: cyberpunkOn});

//
let chosenImage = 3;
const imagesArray = [metroImage, doomImage, minecraftImage, cyberpunkImage];

//
let buttonToOpenDrivers = false;
let buttonToOpenGames = false;
let windowSmall = false;

//
// SWIPER
function initialSwiper() {
    let counter = 0;

    slideElement.forEach((item) => {
        item.src = imagesArray[counter].checkCheckbox(checkBox.checked);

        if (counter <= imagesArray.length) {
            counter++;
        } else {
            counter = 0;
        }
    });
}

function renderSwiper() {
    for (let i = 0; i < imagesArray.length; i++) {
        slideElement[i].classList.add('popup-image__image_opacity');
    }
    slideElement[chosenImage].classList.remove('popup-image__image_opacity');
}

function left() {
    if (chosenImage + 1 === imagesArray.length) {
        chosenImage = 0;
    } else {
        chosenImage++;
    }
    renderSwiper();
}

function right() {
    if (chosenImage - 1 === -1) {
        chosenImage = slideElement.length - 1;
    } else {
        chosenImage--;
    }
    renderSwiper();
}

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
// Rays Images render
function renderImages() {
    let counter = 0;

    images.forEach((image) => {
        image.src = imagesArray[counter].checkCheckbox(checkBox.checked);
        let imageId = imagesArray[counter].returnId();

        image.addEventListener('click', () => {
            preview.src = image.src;
            chosenImage = imageId;

            renderSwiper();
        });

        counter++;
    });

    initialSwiper();
}

function renderPreview() {
    preview.src = cyberpunkImage.checkCheckbox(checkBox.checked);
}

//
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

function toggleShowDrivers() {
    if (!buttonToOpenDrivers) {
        driversImages.forEach((item) => {
            item.classList.remove('drivers__image_hidden');
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

function handleChangeWindowSize() {
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

//Event Listeners
checkBox.addEventListener('change', () => {
    renderPreview();
    renderImages();
});

preview.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    page.classList.add('page-wrapper_blur');

    renderSwiper();
});

popup.addEventListener('click', (e) => {
    document.addEventListener('click', (e) => {
        if (e.target === popup || e.target === slideElement) {
            popup.classList.remove('popup_opened');
            page.classList.remove('page-wrapper_blur');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            popup.classList.remove('popup_opened');
            page.classList.remove('page-wrapper_blur');
        }
    });
});

buttonShowAllGames.addEventListener('click', () => {
    toggleShowGames();
});

buttonShowAllDrivers.addEventListener('click', () => {
    toggleShowDrivers();
});

window.addEventListener('resize', () => {
    selectWindowSize();
    handleChangeWindowSize();
});

leftButton.addEventListener('click', left);
rightButton.addEventListener('click', right);

//
renderImages();
renderPreview();
renderSwiper();
selectWindowSize();
