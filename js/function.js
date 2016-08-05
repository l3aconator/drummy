$(document).ready(function() {

  console.log("I'm ready babay!");
  
  $('.snare .instrument-on').on('click', function(){
    $('.snare .instrument-controls').removeClass('js-not-active');
    $('.snare .instrument-controls').addClass('js-active');
  });
  
  $('.snare .instrument-off').on('click', function(){
    $('.snare .instrument-controls').removeClass('js-active');
    $('.snare .instrument-controls').addClass('js-not-active');
  });
  
  $('.cymbal .instrument-on').on('click', function(){
    $('.cymbal .instrument-controls').removeClass('js-not-active');
    $('.cymbal .instrument-controls').addClass('js-active');
  });
  
  $('.cymbal .instrument-off').on('click', function(){
    $('.cymbal .instrument-controls').removeClass('js-active');
    $('.cymbal .instrument-controls').addClass('js-not-active');
  });
  
  $('.tom1 .instrument-on').on('click', function(){
    $('.tom1 .instrument-controls').removeClass('js-not-active');
    $('.tom1 .instrument-controls').addClass('js-active');
  });
  
  $('.tom1 .instrument-off').on('click', function(){
    $('.tom1 .instrument-controls').removeClass('js-active');
    $('.tom1 .instrument-controls').addClass('js-not-active');
  });
  
//  sound1 = new Audio('sound1.mp3');
//  sound2 = new Audio('sound2.mp3');
//  sound1.mediaGroup = 'soundGroup';
//  sound2.mediaGroup = 'soundGroup';
//  sound1.controller.play();
  
    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '/sounds/snare.mp3');
        audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);
  
    var cymbal = document.createElement('audio');
        cymbal.setAttribute('src', '/sounds/cymbal.mp3');
        cymbal.load()

        $.get();

        cymbal.addEventListener("load", function() {
            cymbal.play();
        }, true);
  
      function beat() {
        var snareSpeed = 425;
        var baseSpeed = 400;

        $('.snare .beat-1').removeClass('js-not-active');
        $('.snare .beat-1').addClass('js-active');
        audioElement.play();
        
        // Snare
        setTimeout(function () {
          $('.snare .beat-1').removeClass('js-active');
          $('.snare .beat-1').addClass('js-not-active');
          $('.snare .beat-2').addClass('js-active');
        }, snareSpeed);
        
        // Cymbal
        setTimeout(function () {
          $('.cymbal .beat-1').removeClass('js-active');
          $('.cymbal .beat-1').addClass('js-not-active');
          $('.cymbal .beat-2').addClass('js-active');
          cymbal.play();
        }, snareSpeed);

        setTimeout(function () {
          $('.snare .beat-2').removeClass('js-active');
          $('.snare .beat-2').addClass('js-not-active');
          $('.snare .beat-3').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 2);

        setTimeout(function () {
          $('.snare .beat-3').removeClass('js-active');
          $('.snare .beat-3').addClass('js-not-active');
          $('.snare .beat-4').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 3);

        setTimeout(function () {
          $('.snare .beat-4').removeClass('js-active');
          $('.snare .beat-4').addClass('js-not-active');
          $('.snare .beat-5').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 4);

        setTimeout(function () {
          $('.snare .beat-5').removeClass('js-active');
          $('.snare .beat-5').addClass('js-not-active');
          $('.snare .beat-6').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 5);

        setTimeout(function () {
          $('.snare .beat-6').removeClass('js-active');
          $('.snare .beat-6').addClass('js-not-active');
          $('.snare .beat-7').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 6);

        setTimeout(function () {
          $('.snare .beat-7').removeClass('js-active');
          $('.snare .beat-7').addClass('js-not-active');
          $('.snare .beat-8').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 7);

        setTimeout(function () {
          $('.snare .beat-8').removeClass('js-active');
          $('.snare .beat-8').addClass('js-not-active');
          $('.snare .beat-9').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 8);

        setTimeout(function () {
          $('.snare .beat-9').removeClass('js-active');
          $('.snare .beat-9').addClass('js-not-active');
          $('.snare .beat-10').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 9);

        setTimeout(function () {
          $('.snare .beat-10').removeClass('js-active');
          $('.snare .beat-10').addClass('js-not-active');
          $('.snare .beat-11').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 10);

        setTimeout(function () {
          $('.snare .beat-11').removeClass('js-active');
          $('.snare .beat-11').addClass('js-not-active');
          $('.snare .beat-12').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 11);

        setTimeout(function () {
          $('.snare .beat-12').removeClass('js-active');
          $('.snare .beat-12').addClass('js-not-active');
          $('.snare .beat-12').delay(400).removeClass('js-active');
          $('.snare .beat-12').delay(400).addClass('js-not-active');
          audioElement.play();
        }, snareSpeed * 12);
        
        x = setTimeout(function(){beat()}, snareSpeed * 12);

        console.log("click");
      }
  
      $('#js-start').on('click', function() {
        beat();
      });
  
    
});
