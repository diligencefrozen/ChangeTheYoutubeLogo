// ==UserScript==

// @name         ChangeTheYouTubeLogo(Brown)

// @version      20240121.1

// @description  Change YouTube logo to a Logo with a Specific Color

// @author       diligencefrozen

// @match        https://www.youtube.com/*

// @grant        none

// @namespace    http://tampermonkey.net/

// @icon         https://www.google.com/s2/favicons?domain=youtube.com

// @updateURL    https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/brown.js

// @downloadURL  https://raw.githubusercontent.com/diligencefrozen/ChangeTheYoutubeLogo/main/youtubelogo/brown.js

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js

// ==/UserScript==


(function() {
    'use strict';
    // Configuration to use jQuery without any conflicts
    const $ = jQuery.noConflict(true);

    // Select the location of the logo and clear its existing content
    let logoContainer = $('#logo-icon').empty();

    // Set the URL for the logo image to be applied
    let darkModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov11.png?raw=true';
    let lightModeLogoURL = 'https://github.com/diligencefrozen/ChangeTheYouTubeLogo/blob/main/logo/logov12.png?raw=true';

    // Apply the appropriate logo based on whether dark mode is enabled
    let logoURL = $('html').is('[dark]') ? darkModeLogoURL : lightModeLogoURL;

    // Create an image element and set its style
    let imgElement = $('<img>', { src: logoURL, style: 'width: 94px' });

    // Insert the image into the logo container
    logoContainer.append(imgElement);
})();
