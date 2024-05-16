// ==UserScript==

// @name         ChangeTheYouTubeLogo(Black)

// @version      20240121.1

// @description  Change YouTube logo to a Logo with a Specific Color

// @namespace    http://tampermonkey.net/

// @author       diligencefrozen

// @match        https://www.youtube.com/*

// @grant        none

// @icon         https://www.google.com/s2/favicons?domain=youtube.com

// @updateURL    https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/black.js

// @downloadURL  https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/black.js

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js

// ==/UserScript==


(function() {
    'use strict';

    const $ = jQuery.noConflict(true);


    let logoContainer = $('#logo-icon').empty();


    let darkModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov3.png?raw=true';
    let lightModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov4.png?raw=true';


    let logoURL = $('html').is('[dark]') ? darkModeLogoURL : lightModeLogoURL;


    let imgElement = $('<img>', { src: logoURL, style: 'width: 94px' });


    logoContainer.append(imgElement);
})();
