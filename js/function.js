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
  
      function baseBeat() {
        var snareSpeed = 600;
        var bassSpeed = 400;
        var cymbalSpeed = 525;
        
        // Cymbal 1
        $('.cymbal .beat-16').removeClass('js-active');
        $('.cymbal .beat-16').addClass('js-not-active');
        $('.cymbal .beat-1').removeClass('js-not-active');
        $('.cymbal .beat-1').addClass('js-active');
        cymbal.play();
        
        // Cymbal 1-and
        setTimeout(function () {
          $('.cymbal .beat-1').removeClass('js-active');
          $('.cymbal .beat-1').addClass('js-not-active');
          $('.cymbal .beat-2').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed);
        
        // Cymbal 2
        setTimeout(function () {
          $('.cymbal .beat-2').removeClass('js-active');
          $('.cymbal .beat-2').addClass('js-not-active');
          $('.cymbal .beat-3').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 2);

        // Snare 2
        setTimeout(function () {
          $('.snare .beat-15').removeClass('js-active');
          $('.snare .beat-15').addClass('js-not-active');
          $('.snare .beat-3').removeClass('js-not-active');
          $('.snare .beat-3').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 2);
        
        // Cymbal 2 and
        setTimeout(function () {
          $('.cymbal .beat-3').removeClass('js-active');
          $('.cymbal .beat-3').addClass('js-not-active');
          $('.cymbal .beat-4').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 3);
        
        // Cymbal 3
        setTimeout(function () {
          $('.cymbal .beat-4').removeClass('js-active');
          $('.cymbal .beat-4').addClass('js-not-active');
          $('.cymbal .beat-5').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 4);
        
        // Cymbal 3 and
        setTimeout(function () {
          $('.cymbal .beat-5').removeClass('js-active');
          $('.cymbal .beat-5').addClass('js-not-active');
          $('.cymbal .beat-6').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 5);

        // Snare beat 4
        setTimeout(function () {
          $('.snare .beat-3').removeClass('js-active');
          $('.snare .beat-3').addClass('js-not-active');
          $('.snare .beat-7').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 6);

        setTimeout(function () {
          $('.cymbal .beat-6').removeClass('js-active');
          $('.cymbal .beat-6').addClass('js-not-active');
          $('.cymbal .beat-7').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 6);

        setTimeout(function () {
          $('.cymbal .beat-7').removeClass('js-active');
          $('.cymbal .beat-7').addClass('js-not-active');
          $('.cymbal .beat-8').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 7);
        
        setTimeout(function () {
          $('.cymbal .beat-8').removeClass('js-active');
          $('.cymbal .beat-8').addClass('js-not-active');
          $('.cymbal .beat-9').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 8);
        
        setTimeout(function () {
          $('.cymbal .beat-9').removeClass('js-active');
          $('.cymbal .beat-9').addClass('js-not-active');
          $('.cymbal .beat-10').addClass('js-active');
          cymbal.play()
        }, cymbalSpeed * 9);
        
         setTimeout(function () {
          $('.cymbal .beat-10').removeClass('js-active');
          $('.cymbal .beat-10').addClass('js-not-active');
          $('.cymbal .beat-11').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 10);
        
        // Snare beat 6
        setTimeout(function () {
          $('.snare .beat-7').removeClass('js-active');
          $('.snare .beat-7').addClass('js-not-active');
          $('.snare .beat-11').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 10);
        
        // Cymbal
        setTimeout(function () {
          $('.cymbal .beat-10').removeClass('js-active');
          $('.cymbal .beat-10').addClass('js-not-active');
          $('.cymbal .beat-11').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 10);

        setTimeout(function () {
          $('.cymbal .beat-11').removeClass('js-active');
          $('.cymbal .beat-11').addClass('js-not-active');
          $('.cymbal .beat-12').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 11);
        
        setTimeout(function () {
          $('.cymbal .beat-12').removeClass('js-active');
          $('.cymbal .beat-12').addClass('js-not-active');
          $('.cymbal .beat-13').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 12);
        
        setTimeout(function () {
          $('.cymbal .beat-13').removeClass('js-active');
          $('.cymbal .beat-13').addClass('js-not-active');
          $('.cymbal .beat-14').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 13);
        
        // Snare End
        setTimeout(function () {
          $('.snare .beat-11').removeClass('js-active');
          $('.snare .beat-11').addClass('js-not-active');
          $('.snare .beat-15').removeClass('js-not-active');
          $('.snare .beat-15').addClass('js-active');
          audioElement.play();
        }, snareSpeed * 14);
        
        setTimeout(function () {
          $('.cymbal .beat-14').removeClass('js-active');
          $('.cymbal .beat-14').addClass('js-not-active');
          $('.cymbal .beat-15').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 14);
        
        setTimeout(function () {
          $('.cymbal .beat-15').removeClass('js-active');
          $('.cymbal .beat-15').addClass('js-not-active');
          $('.cymbal .beat-16').addClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 15);
        
        x = setTimeout(function(){baseBeat()}, snareSpeed * 16);

        console.log("click");
      }
  
      $('#js-start').on('click', function() {
        baseBeat();
      });
  
    
});
