var mySong = document.getElementById("mySong");
var myIcon = document.getElementById("icon");

    myIcon.onclick = function(){
        if(mySong.paused){
            mySong.play();
            myIcon.src="pause.png";
        }
        else{
            mySong.pause();
            myIcon.src="play.png";
        }
    }
