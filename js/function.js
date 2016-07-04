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

});

createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.on("fileload", this.loadHandler, this);
createjs.Sound.registerSound("sounds/beep-03.mp3", "sound");
function loadHandler(event) {
   // This is fired for each sound that is registered.
   var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
   instance.on("complete", this.handleComplete, this);
   instance.volume = 0.5;
}