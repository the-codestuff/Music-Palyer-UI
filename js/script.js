
let audio = document.getElementById('audio');
let thumbnail = document.getElementById("thumbnail");
let waves = document.getElementById("waves");


audio.addEventListener('play', function(ev){
    console.log("audio started playing");
    thumbnail.classList.add("card__photo-animate");
    waves.classList.add("card__waves-active");
    });


    audio.addEventListener('pause', function(ev){
        console.log("audio paused. Do you want to change track");
        thumbnail.classList.remove("card__photo-animate");
        waves.classList.remove("card__waves-active");
        });