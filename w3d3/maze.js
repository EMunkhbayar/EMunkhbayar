"use strict";
$(function() {
    let lost = false;
    let started = false;

    const start = ()=>{
        started = true;
        lost = false;
        $('#maze .boundary').removeClass('youlose');
        $('#status').text("Game started!");
    }
    const lose = ()=>{
        if(started){
            started = false;
            lost = true;
            $('#maze .boundary').addClass('youlose');
            $('#status').text("Sorry, you lost!");
        }
    }
    const win = ()=>{
        if(started && !lost) {
            started = false;
            lost = false;
            $('#status').text("You win!");
        }
    }
    $('#maze .boundary').on('mouseover', lose);
    $('#start').on('click', start);
    $('#end').on('mouseover', win);
    $('#maze').on('mouseleave', lose);
})