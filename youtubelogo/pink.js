// ==UserScript==

// @name         ChangeTheYouTubeLogo(Pink)

// @version      20240121.2

// @description  Change YouTube logo to a Logo with a Specific Color

// @author       diligencefrozen

// @match        https://www.youtube.com/*

// @grant        none

// @namespace    https://github.com/diligencefrozen/ChangeTheYouTubeLogo

// @icon         https://www.google.com/s2/favicons?domain=youtube.com

// @updateURL    https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/pink.js

// @downloadURL  https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/pink.js

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js

// ==/UserScript==


(function() {
    'use strict';

    const $ = jQuery.noConflict(true);


    let logoContainer = $('#logo-icon').empty();


    let darkModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov5.png?raw=true';
    let lightModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov6.png?raw=true';


    let logoURL = $('html').is('[dark]') ? darkModeLogoURL : lightModeLogoURL;


    let imgElement = $('<img>', { src: logoURL, style: 'width: 94px' });


    logoContainer.append(imgElement);
})();
