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
  
    var snare = document.createElement('audio');
        snare.setAttribute('src', '/sounds/snare.mp3');
        snare.load()

        $.get();

        snare.addEventListener("load", function() {
            snare.play();
        }, true);
  
    var cymbal = document.createElement('audio');
        cymbal.setAttribute('src', '/sounds/cymbal.mp3');
        cymbal.load()

        $.get();

        cymbal.addEventListener("load", function() {
            cymbal.play();
        }, true);
  
    var bass = document.createElement('audio');
        bass.setAttribute('src', '/sounds/kick.mp3');
        bass.load()

        $.get();

        bass.addEventListener("load", function() {
            bass.play();
        }, true);
    
      var speed = 300;
      var snareSpeed = speed;
      var bassSpeed = speed;
      var cymbalSpeed = speed;
  
      function snareBeat() {
        
        setTimeout(function () {
          $('.snare .beat-16').removeClass('js-active');
          $('.snare .beat-2').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 3);
        
        setTimeout(function () {
          $('.snare .beat-2').toggleClass('js-active');
          $('.snare .beat-4').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 7);
        
        setTimeout(function () {
          $('.snare .beat-4').toggleClass('js-active');
          $('.snare .beat-6').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 11);
        
        setTimeout(function () {
          $('.snare .beat-6').toggleClass('js-active');
          $('.snare .beat-8').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 15);
        
        setTimeout(function () {
          $('.snare .beat-8').toggleClass('js-active');
          $('.snare .beat-10').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 19);
        
        setTimeout(function () {
          $('.snare .beat-10').toggleClass('js-active');
          $('.snare .beat-12').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 23);
        
        setTimeout(function () {
          $('.snare .beat-12').toggleClass('js-active');
          $('.snare .beat-14').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 27);
        
        setTimeout(function () {
          $('.snare .beat-14').toggleClass('js-active');
          $('.snare .beat-16').toggleClass('js-active');
          snare.play();
        }, snareSpeed * 31);
    
        x = setTimeout(function(){snareBeat()}, snareSpeed * 32);

        console.log("snare");
      }
  
        
      // Cymbal Function
      function cymbalBeat() {
        
        // Cymbal 1
        setTimeout(function () {
          $('.cymbal .beat-16-and').removeClass('js-active');
          $('.cymbal .beat-1').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 1);
        
        setTimeout(function () {
          $('.cymbal .beat-1').toggleClass('js-active');
          $('.cymbal .beat-1-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 2);
        
        setTimeout(function () {
          $('.cymbal .beat-1-and').toggleClass('js-active');
          $('.cymbal .beat-2').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 3);
        
        setTimeout(function () {
          $('.cymbal .beat-2').toggleClass('js-active');
          $('.cymbal .beat-2-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 4);
        
        setTimeout(function () {
          $('.cymbal .beat-2-and').toggleClass('js-active');
          $('.cymbal .beat-3').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 5);
        
        setTimeout(function () {
          $('.cymbal .beat-3').toggleClass('js-active');
          $('.cymbal .beat-3-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 6);
        
        setTimeout(function () {
          $('.cymbal .beat-3-and').toggleClass('js-active');
          $('.cymbal .beat-4').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 7);
        
        setTimeout(function () {
          $('.cymbal .beat-4').toggleClass('js-active');
          $('.cymbal .beat-4-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 8);
        
        
        //MM2
        setTimeout(function () {
          $('.cymbal .beat-4-and').toggleClass('js-active');
          $('.cymbal .beat-5').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 9);
        
        setTimeout(function () {
          $('.cymbal .beat-5').toggleClass('js-active');
          $('.cymbal .beat-5-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 10);
        
        setTimeout(function () {
          $('.cymbal .beat-5-and').toggleClass('js-active');
          $('.cymbal .beat-6').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 11);
        
        setTimeout(function () {
          $('.cymbal .beat-6').toggleClass('js-active');
          $('.cymbal .beat-6-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 12);
        
        setTimeout(function () {
          $('.cymbal .beat-6-and').toggleClass('js-active');
          $('.cymbal .beat-7').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 13);
        
        setTimeout(function () {
          $('.cymbal .beat-7').toggleClass('js-active');
          $('.cymbal .beat-7-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 14);
        
        setTimeout(function () {
          $('.cymbal .beat-7-and').toggleClass('js-active');
          $('.cymbal .beat-8').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 15);
        
        setTimeout(function () {
          $('.cymbal .beat-8').toggleClass('js-active');
          $('.cymbal .beat-8-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 16);
        
        //MM3
        setTimeout(function () {
          $('.cymbal .beat-8-and').toggleClass('js-active');
          $('.cymbal .beat-9').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 17);
        
        setTimeout(function () {
          $('.cymbal .beat-9').toggleClass('js-active');
          $('.cymbal .beat-9-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 18);
        
        setTimeout(function () {
          $('.cymbal .beat-9-and').toggleClass('js-active');
          $('.cymbal .beat-10').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 19);
        
        setTimeout(function () {
          $('.cymbal .beat-10').toggleClass('js-active');
          $('.cymbal .beat-10-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 20);
        
        setTimeout(function () {
          $('.cymbal .beat-10-and').toggleClass('js-active');
          $('.cymbal .beat-11').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 21);
        
        setTimeout(function () {
          $('.cymbal .beat-11').toggleClass('js-active');
          $('.cymbal .beat-11-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 22);
        
         setTimeout(function () {
          $('.cymbal .beat-11-and').toggleClass('js-active');
          $('.cymbal .beat-12').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 23);
        
        setTimeout(function () {
          $('.cymbal .beat-12').toggleClass('js-active');
          $('.cymbal .beat-12-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 24);
        
        //MM4
        setTimeout(function () {
          $('.cymbal .beat-12-and').toggleClass('js-active');
          $('.cymbal .beat-13').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 25);
        
        setTimeout(function () {
          $('.cymbal .beat-13').toggleClass('js-active');
          $('.cymbal .beat-13-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 26);
        
        setTimeout(function () {
          $('.cymbal .beat-13-and').toggleClass('js-active');
          $('.cymbal .beat-14').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 27);
        
        setTimeout(function () {
          $('.cymbal .beat-14').toggleClass('js-active');
          $('.cymbal .beat-14-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 28);
        
        setTimeout(function () {
          $('.cymbal .beat-14-and').toggleClass('js-active');
          $('.cymbal .beat-15').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 29);
        
        setTimeout(function () {
          $('.cymbal .beat-15').toggleClass('js-active');
          $('.cymbal .beat-15-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 30);
        
         setTimeout(function () {
          $('.cymbal .beat-15-and').toggleClass('js-active');
          $('.cymbal .beat-16').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 31);
        
        setTimeout(function () {
          $('.cymbal .beat-16').toggleClass('js-active');
          $('.cymbal .beat-16-and').toggleClass('js-active');
          cymbal.play();
        }, cymbalSpeed * 32);
        
        
    
        x = setTimeout(function(){cymbalBeat()}, cymbalSpeed * 32);

        console.log("cymbal");
      }
  
      function bassBeat() {
        
        //mm1
        setTimeout(function () {
          $('.bass .beat-16-and').removeClass('js-active');
          $('.bass .beat-1').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 1);
        
        setTimeout(function () {
          $('.bass .beat-1').toggleClass('js-active');
          $('.bass .beat-3').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 5);
        
        //mm2
        setTimeout(function () {
          $('.bass .beat-3').toggleClass('js-active');
          $('.bass .beat-5').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 9);
        
        setTimeout(function () {
          $('.bass .beat-5').toggleClass('js-active');
          $('.bass .beat-7').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 13);
        
        //mm3
        setTimeout(function () {
          $('.bass .beat-7').toggleClass('js-active');
          $('.bass .beat-9').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 17);
        
        setTimeout(function () {
          $('.bass .beat-9').toggleClass('js-active');
          $('.bass .beat-11').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 21);
        
        //mm4
        setTimeout(function () {
          $('.bass .beat-11').toggleClass('js-active');
          $('.bass .beat-13').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 25);
        
        setTimeout(function () {
          $('.bass .beat-13').toggleClass('js-active');
          $('.bass .beat-15').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 29);
        
        setTimeout(function () {
          $('.bass .beat-15').toggleClass('js-active');
          $('.bass .beat-16').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 31);
        
         setTimeout(function () {
          $('.bass .beat-16').toggleClass('js-active');
          $('.bass .beat-16-and').toggleClass('js-active');
          bass.play();
        }, bassSpeed * 32);
    
        x = setTimeout(function(){bassBeat()}, bassSpeed * 32);

        console.log("bass");
      }
  
      $('#js-start').on('click', function() {
        cymbalBeat();
        snareBeat();
        bassBeat();
      });
  
    
});
