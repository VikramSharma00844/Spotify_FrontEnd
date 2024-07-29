console.log("welcome to the Spotify")
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"Let me Love You",filePath:"songs/1.mp3",coverPath:"cover.jpg"},
    {songname:"Kamlee",filePath:"songs/2.mp3",coverPath:"cover.jpg"},
    {songname:"Kinni Kinni",filePath:"songs/3.mp3",coverPath:"cover.jpg"},
    {songname:"Illahi",filePath:"songs/4.mp3",coverPath:"cover.jpg"},
    {songname:"Ishq Bulaava",filePath:"songs/5.mp3",coverPath:"cover.jpg"},
    {songname:"Hass Hass",filePath:"songs/6.mp3",coverPath:"cover.jpg"},
    {songname:"Ankhiyan Gulab",filePath:"songs/7.mp3",coverPath:"cover.jpg"},
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songname;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
        else
        {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

        }
})
audioElement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
        
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

 const nextsong=document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 6){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0 ){
        songIndex=6;
    }
    else{
        songIndex=songIndex-1;
    }
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

audioElement.addEventListener('ended',()=>{
    console.log('nextsong');
     nextone();
})
function nextone(){
    if(songIndex >= 6){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}