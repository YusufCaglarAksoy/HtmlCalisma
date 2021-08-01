/* 
    PHOTOS
*/

let prev3 = document.getElementById('leftarrow');
let next3 = document.getElementById('rightarrow');
let photos = document.getElementsByClassName('logo');
let photo_page = Math.ceil(photos.length/5);
let l2=0;
let movePer2 =95;
let maxMove2 =300;

let right_mover2 = ()=>{
    document.getElementById('leftarrow').style.opacity = 1;
    if(l2>150){
        document.getElementById('rightarrow').style.opacity = 0;
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
    document.getElementById('rightarrow').style.opacity = 1;

    if(l2<20){
        document.getElementById('leftarrow').style.opacity = 0;
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