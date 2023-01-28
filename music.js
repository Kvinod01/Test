console.log("hell88o");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songduration=0;
let songs=[
    {songName:"Celebration Vaarasudu",filePath:"songs/1.mp3",coverPath:"covers/1.jpg",duration:"2:48"},
    {songName:"Boss Party",filePath:"songs/2.mp3",coverPath:"covers/2.jpg",duration:"3:18"},
    {songName:"Waltair Veerayya Title Theme",filePath:"songs/3.mp3",coverPath:"covers/3.jpg",duration:"1:39"},
    {songName:"Sridevi Chiranjeevi",filePath:"songs/4.mp3",coverPath:"covers/4.jpg",duration:"2:58"},
    {songName:"Veerayya Tilte Track",filePath:"songs/5.mp3",coverPath:"covers/5.jpg",duration:"4:00"},
    {songName:"Poonakaalu Loading",filePath:"songs/6.mp3",coverPath:"covers/6.jpg",duration:"3:18"},
    {songName:"Rajithame",filePath:"songs/7.mp3",coverPath:"covers/7.jpg",duration:"4.46"},
    {songName:"Soul of Vaarasudu",filePath:"songs/8.mp3",coverPath:"covers/8.jpg",duration:"2:09"},
    {songName:"Sye Dhalapathi",filePath:"songs/9.mp3",coverPath:"covers/9.jpg",duration:"4:04"},
]
songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
element.getElementsByClassName("timestamp")[0].innerText=songs[i].duration;
})

//hundle play pause
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
  makeAllPlays();
    
  
   
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
    element.addEventListener('click', (e)=>{ 
        
        
     makeAllPlays();
       
        songIndex = parseInt(e.target.id);
     
          
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;

        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
       audioElement.play()
       
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');    



    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    console.log()
})
document.getElementById('fastForward').addEventListener('click',()=>
{


    if(audioElement.currentTime>=audioElement.duration)
    {  
        
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    audioElement.pause();
    gif.style.opacity = 0;
    }
  else{

    songduration=10+(myProgressBar.value*audioElement.duration/100)
  audioElement.currentTime = songduration;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
  }
 
  
})

document.getElementById('fastBackward').addEventListener('click',()=>
{


    if(audioElement.currentTime<=10)
    {  
        
        audioElement.currentTime=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        audioElement.pause();
        gif.style.opacity = 0;
    }
  else{

    songduration=(myProgressBar.value*audioElement.duration/100)-10;
  audioElement.currentTime = songduration;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1;
  }
 
  
})
