const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');
const mulai = document.querySelector('.mulai');
const stop = document.querySelector('.stop');
const bonk = document.querySelectorAll('.bonk');
const pop = document.querySelector('#pop');
let before;
let selesai;
let skor = 0;
let start ;
papanSkor.style.display = 'none'
stop.style.display = 'none';

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    console.log(Math.random() * tanah.length)
    console.log(Math.floor(Math.random() * 4))
    const tRandom = tanah[t];
    if (tRandom === before) {
        randomTanah[tanah]
    }
    before = tRandom;
    return tRandom;
}

function waktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function munculTikus() {
    
    const tRandom = randomTanah(tanah);
    const wRandom = waktu(50, 700) 
    tRandom.classList.add('muncul');
    setTimeout( () => {
        tRandom.classList.remove('muncul');
        if(start) {
            munculTikus();
        }
    }, wRandom)
}
function siap() {
    papanSkor.style.display = 'block'
    mulai.style.pointerEvents = 'none';
    // stop.style.display = 'block';
    start = true;
    skor = 0;
    let b = 5
    let d = setInterval(() => {
        b = b - 1;
        mulai.textContent = b;
        if ( b < 1) {
            clearInterval(d);
            start = false;
            mulai.textContent = 'Mulai'
            mulai.style.pointerEvents = 'auto';
            console.log('Selesai')
        }
    }, 10000);
    setTimeout(() => {
        papanSkor.textContent = 0; 
        munculTikus()
    }, 1000)    
    
}

function pukul() {
    this.parentNode.querySelector('.bonk').style.display = 'block';
    setTimeout( () => {
        this.parentNode.querySelector('.bonk').style.display = 'none';
    }, 200);
    skor++;
    this.parentNode.classList.remove('muncul');
    papanSkor.textContent = skor;
    pop.play();
    if (pop.paused) {
        pop.play();
    } else {
        pop.currentTime = 0
    }
}
tikus.forEach(t => {
    t.addEventListener('click', pukul);
});
    
