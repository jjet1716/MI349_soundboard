const soundboard = {
    "ring" : "https://www.wavsource.com/snds_2020-10-01_3728627494378403/sfx/phone_ring2.wav",
    "slacker" : "https://www.wavsource.com/snds_2020-10-01_3728627494378403/video_games/duke/back_2_work_y.wav",
    "slam" : "https://www.wavsource.com/snds_2020-10-01_3728627494378403/sfx/phone_slam.wav"
}

function playsound(sound) {
    console.log('playing');
    audioObj = new Audio(soundboard[sound]);
    audioObj.play();
}