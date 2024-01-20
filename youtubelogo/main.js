// ==UserScript==

// @name         ChangeTheYouTubeLogo(Original, Red)

// @version      20240120.1

// @description  Change YouTube logo to a Logo with a Specific Color

// @author       diligencefrozen

// @match        https://www.youtube.com/*

// @grant        none

// @namespace    https://github.com/diligencefrozen/ChangeTheYouTubeLogo

// @icon         https://www.google.com/s2/favicons?domain=youtube.com

// @updateURL    https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/main.js

// @downloadURL  https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/main.js

// ==/UserScript==

function changeYouTubeLogo() {
    var ytIcon = document.getElementById('logo-icon');
    ytIcon.innerHTML = '';

    var newLogo = new Image();
    newLogo.width = 94;

    if (document.documentElement.getAttribute('dark')) {
        newLogo.src = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov1.png?raw=true';
    } else {
        newLogo.src = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov1.png?raw=true';
    }

    ytIcon.appendChild(newLogo);
}

changeYouTubeLogo();
