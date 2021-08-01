const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = true;
const intervalTime =5000;
let slideInterval;
const nextSlide = () =>{
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if(activeSlide.nextElementSibling){
        activeSlide.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('active');
    }
}

const prevSlide = () =>{
    const activeSlide = document.querySelector('.active');
    activeSlide.classList.remove('active');
    if(activeSlide.previousElementSibling){
        activeSlide.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length - 1].classList.add('active');
    }
}

next.addEventListener('click', () =>{
    nextSlide();
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
});

prev.addEventListener('click', () => {
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
    prevSlide();
})

if(auto){

    slideInterval = setInterval(nextSlide, intervalTime)
}


/* 
SQUARE
*/
let prev1 = document.getElementById('prev1');
let next1 = document.getElementById('next1');
let square = document.getElementsByClassName('square');
let square_page = Math.ceil(square.length/7);
let l=0;
let movePer =14.4;
let maxMove =57.6;

let right_mover = ()=>{
    document.getElementById('prev1').style.opacity = 1;
    if(l>43.1){
        document.getElementById('next1').style.opacity = 0;
    }
    l = l + movePer;
    if (square == 1){l = 0; }
    for(const i of square)
    {
        if (l > maxMove){l = l - movePer;}
        i.style.left = '-' + l + '%';
    }

}
let left_mover = ()=>{
    document.getElementById('next1').style.opacity = 1;

    if(l<27){
        document.getElementById('prev1').style.opacity = 0;
    }
    l = l - movePer;
    if (l<=0){l = 0;}
    for(const i of square){
        if (square_page>1){
            i.style.left = '-' + l + '%';
        }
        
    }
}
next1.onclick = ()=>{right_mover();}
prev1.onclick = ()=>{left_mover();}

/* 
    NEWS
*/
let prev2 = document.getElementById('prev2');
let next2 = document.getElementById('next2');
let news = document.getElementsByClassName('new');
let new_page = Math.ceil(news.length/5);
let l1=0;
let movePer1 =18.5;
let maxMove1 =100;

let right_mover1 = ()=>{
    document.getElementById('prev2').style.opacity = 1;
    if(l1>72){
        document.getElementById('next2').style.opacity = 0;
    }
    l1 = l1 + movePer1;
    if (news == 1){l1 = 0; }
    for(const i of news)
    {
        if (l1 > maxMove1){l1 = l1 - movePer1;}
        i.style.left = '-' + l1 + '%';
    }

}
let left_mover1 = ()=>{
    document.getElementById('next2').style.opacity = 1;

    if(l1<20){
        document.getElementById('prev2').style.opacity = 0;
    }
    l1 = l1 - movePer1;
    if (l1<=0){l1 = 0;}
    for(const i of news){
        if (new_page>1){
            i.style.left = '-' + l1 + '%';
        }
        
    }
}
next2.onclick = ()=>{right_mover1();}
prev2.onclick = ()=>{left_mover1();}

/* 
    PHOTOS
*/

let prev3 = document.getElementById('prev3');
let next3 = document.getElementById('next3');
let photos = document.getElementsByClassName('photo');
let photo_page = Math.ceil(photos.length/5);
let l2=0;
let movePer2 =14.5;
let maxMove2 =100;

let right_mover2 = ()=>{
    document.getElementById('prev3').style.opacity = 1;
    if(l2>80){
        document.getElementById('next3').style.opacity = 0;
    }
    l2 = l2 + movePer2;
    if (photos == 1){l2 = 0; }
    for(const i of photos)
    {
        if (l2 > maxMove2){l2 = l2 - movePer2;}
        i.style.left = '-' + l2 + '%';
    }

}
let left_mover2 = ()=>{
    document.getElementById('next3').style.opacity = 1;

    if(l2<20){
        document.getElementById('prev3').style.opacity = 0;
    }
    l2 = l2 - movePer2;
    if (l2<=0){l2 = 0;}
    for(const i of photos){
        if (photo_page>1){
            i.style.left = '-' + l2 + '%';
        }
        
    }
}
next3.onclick = ()=>{right_mover2();}
prev3.onclick = ()=>{left_mover2();}

/* 
    Navbar
*/

/* KURUMSAL*/
let kurumsal =document.querySelector('.kurumsal');
let kurumsaldiv =document.querySelector('#kurumsal');
kurumsal.onmouseover = ()=>{
    kurumsaldiv.style.display= "block";
    
}
kurumsaldiv.onmouseout=()=>{
    kurumsaldiv.style.display= "none";
}

/* ÖĞRENCİ*/
let ogrenci =document.querySelector('.ogrenci');
let ogrencidiv =document.querySelector('#ogrenci');
ogrenci.onmouseover = ()=>{
    ogrencidiv.style.display= "block";
    
}
ogrenci.onmouseout=()=>{
    ogrencidiv.style.display= "none";
}

/* AKADEMİK*/
let akademik =document.querySelector('.akademik');
let akademikdiv =document.querySelector('#akademik');
akademik.onmouseover = ()=>{
    akademikdiv.style.display= "block";
}
akademik.onmouseout = ()=>{
    akademikdiv.style.display= "none";
}
/* ARASTIRMA */
let arastirma =document.querySelector('.arastirma');
let arastirmadiv =document.querySelector('#arastirma');
arastirma.onmouseover = ()=>{
    arastirmadiv.style.display= "block";
}
arastirma.onmouseout = ()=>{
    arastirmadiv.style.display= "none";
}
/* BİLGİ */ 
let bilgi =document.querySelector('.bilgi');
let bilgidiv =document.querySelector('#bilgi');
bilgi.onmouseover = ()=>{
    bilgidiv.style.display= "block";
}
bilgi.onmouseout = ()=>{
    bilgidiv.style.display= "none";
}

/* KAMPUS */ 
let kampus =document.querySelector('.kampus');
let kampusdiv =document.querySelector('#kampus');
kampus.onmouseover = ()=>{
    kampusdiv.style.display= "block";
}
kampus.onmouseout = ()=>{
    kampusdiv.style.display= "none";
}