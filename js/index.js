// All the sections that fade in 
const faders = document.querySelectorAll('.fade_in');

// All the links
const Sarah = document.querySelectorAll("[href='#Sarah1']");
const Annie = document.querySelector("[href='#Annie1']");
const Alice = document.querySelector("[href='#Alice1']");
const Marie = document.querySelector("[href='#Marie1']");
const Patricia = document.querySelector("[href='#Patricia1']");
const Marian = document.querySelector("[href='#Marian1']");

let appearOptions = {
  threshold: 0.6,  // halfway through page
  rootMargin: "0px 0px 10px 0px"
};

let appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => { // go through each element
    if (!entry.isIntersecting) {
      return;
    } else {
      entries.forEach(entry => {
        entry.target.classList.add('anim'); // animation
        entry.target.classList.add('fade_in_after'); // make visible
        console.log("is working");
      })
    }

    // Sarah
    if (entry.target.id == "Sarah1" || entry.target.id == "Sarah2") {
      Sarah[1].classList.add('timeline__selected');
    } else {
      Sarah[1].classList.remove('timeline__selected');
    }

    // Annie 
    if (entry.target.id == "Annie1" || entry.target.id == "Annie2") {
      Annie.classList.add('timeline__selected');
    } else {
      Annie.classList.remove('timeline__selected');
    }

    // Alice 
    if (entry.target.id == "Alice1" || entry.target.id == "Alice2") {
      Alice.classList.add('timeline__selected');
    } else {
      Alice.classList.remove('timeline__selected');
    }

    // Marie 
    if (entry.target.id == "Marie1" || entry.target.id == "Marie2") {
      Marie.classList.add('timeline__selected');
    } else {
      Marie.classList.remove('timeline__selected');
    }

    // Patricia 
    if (entry.target.id == "Patricia1" || entry.target.id == "Patricia2") {
      Patricia.classList.add('timeline__selected');
    } else {
      Patricia.classList.remove('timeline__selected');
    }

    // Marian 
    if (entry.target.id == "Marian1" || entry.target.id == "Marian2") {
      Marian.classList.add('timeline__selected');
    } else {
      Marian.classList.remove('timeline__selected');
    }

  });
}, appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animations

let Sarah1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Sarah1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/sarah1.json'
})

// Sarah - Folding Bed

let desk = document.querySelector('.Sarah2');
let state = false;

desk.addEventListener('click', event => {
  if (state) {
    desk.src = "/img/sarah/bed.svg";
    state = false;
  } else {
    desk.src = "/img/sarah/desk.svg";
    state = true;
  }
});

let Annie1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Annie1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/annie1.json'
})

let Annie2__ani = bodymovin.loadAnimation({
  container: document.getElementById('Annie2__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/annie2.json'
})

let Alice1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Alice1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/alice1.json'
})

let Alice2__ani = bodymovin.loadAnimation({
  container: document.getElementById('Alice2__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/alice2.json'
})

let Marie1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Marie1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/marie1.json'
})

let Patricia1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Patricia1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/patricia1.json'
})

let Marian1__ani = bodymovin.loadAnimation({
  container: document.getElementById('Marian1__ani'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'json/Marian1.json'
})

// Marie Van Brittan Brown 

const camera = document.querySelector('.screen__camera');
const view1 = document.querySelector('.b1');
const view2 = document.querySelector('.b2');
const view3 = document.querySelector('.b3');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');

view1.addEventListener('click', event => {
  camera.style.top = "15%";
  camera.style.transition = "top 0.3s ease-in-out";
  p1.style.opacity = "1";
  p2.style.opacity = "0";
  p3.style.opacity = "0";
})

view2.addEventListener('click', event => {
  camera.style.top = "30%";
  camera.style.transition = "top 0.3s ease-in-out";
  p2.style.opacity = "1";
  p1.style.opacity = "0";
  p3.style.opacity = "0";
})

view3.addEventListener('click', event => {
  camera.style.top = "45%";
  camera.style.transition = "top 0.3s ease-in-out";
  p3.style.opacity = "1";
  p1.style.opacity = "0";
  p2.style.opacity = "0";
})

// Marian Croak - Text Interaction

const send = document.querySelector('.send');
const yes = document.querySelector('.yes');
const text2 = document.querySelector('.text2');

send.addEventListener('click', event => {
  text2.classList.add('text2__sent');
  yes.classList.add('yes__sent');
  setTimeout(reset, 10000);
});

function reset() { // reset text
  text2.classList.remove('text2__sent');
  yes.classList.remove('yes__sent');
}


// Social Links Popup window

function facebookLink() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=http://www.adanmacreates.com", " ", "width=500,height=500");
};

function twitterLink() {
  window.open("https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.adanmacreates.com&text=Learn%20about%206%20Black%20Women%20who%20changed%20History%20through%20this%20interactive%20site!%20", " ", "width=500,height=500");
};
