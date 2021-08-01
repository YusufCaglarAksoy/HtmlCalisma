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
/* 
    PHOTOS
*/

let prev3 = document.getElementById('prev3');
let next3 = document.getElementById('next3');
let photos = document.getElementsByClassName('photo');
let photo_page = Math.ceil(photos.length/5);
let l2=0;
let movePer2 =13.5;
let maxMove2 =81;

let right_mover2 = ()=>{
    document.getElementById('prev3').style.opacity = 1;
    if(l2>60){
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