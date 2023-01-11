// define global variables
const items = document.querySelectorAll('.item');
const button = document.querySelector('.button');
const body = document.body;
const layers = document.querySelectorAll('.layer');
const links = document.querySelectorAll('a');




// remove videos from DOM on mobile
const videos = document.querySelectorAll('video source');

if(!(matchMedia('(pointer:coarse)').matches)) {
  videos.forEach(function(video) {
    var src = video.getAttribute('data-src');
    video.setAttribute('src', src);
    video.parentNode.load();
  });
}

else {
  var mobileitem = document.querySelector('.mobileitem');
  var mobilevid = document.querySelector('.mobileitem video source');

  var src = mobilevid.getAttribute('data-src');
  mobilevid.setAttribute('src', src);
  mobilevid.parentNode.load();
  mobilevid.parentNode.play();
}



// get random function
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}





// show 4 random items and hide others
function getRandomItems() {
  items.forEach(function(item) {
    item.classList.remove('item--visible', 'item--invert', 'item--visible-1', 'item--visible-2', 'item--visible-3', 'item--visible-4');
  });

  var randomItems = getRandom(items, 4);

  randomItems.forEach(function(randomItem) {
    randomItem.classList.add('item--visible');
  });

  let visibleItems = document.querySelectorAll('.item--visible');


  // add numbers to visible items
  var viNum = 0;
  visibleItems.forEach(function(visibleItem) {
    viNum++;
    visibleItem.classList.add('item--visible-'+viNum);
  });


  // randomly invert some items
  var invertItems = getRandom(items, 4);

  invertItems.forEach(function(item) {
    item.classList.add('item--invert');
  });
}




// play once on start
getRandomItems();

function randomize() {
  getRandomItems();

  // body.classList.remove('body--animated');
  // void body.offsetWidth;
  body.classList.add('body--animated');

  setTimeout(function() {
    body.classList.remove('body--animated');
  }, 100);

};

// play on button click
// body.addEventListener('click', function() {
//   randomize();
// });

// randomize on layer hover
// switches.forEach(function(switch_el) {
//   switch_el.addEventListener('mouseout', randomize);
// });

layers.forEach(function(layer) {
  layer.addEventListener('mouseleave', randomize);
  // layer.addEventListener('mouseout', randomize);
});


// intro
// const intro = document.querySelector('.intro');
// function hideIntro() {
//   intro.classList.add('intro--invisible');
// }
//
// intro.addEventListener('click', hideIntro);
// intro.addEventListener('keydown', hideIntro);
//
// setTimeout(function() {
//   hideIntro();
// }, 15000);





// show and hide layers

// document.addEventListener('mouseover', function (event) {
//   if (event.target.matches('.item--visible-1')) {
//     document.querySelector('.layer-1').classList.add('layer--visible');
//   }
//   if (event.target.matches('.item--visible-2')) {
//     document.querySelector('.layer-2').classList.add('layer--visible');
//   }
//   if (event.target.matches('.item--visible-3')) {
//     document.querySelector('.layer-3').classList.add('layer--visible');
//   }
//   if (event.target.matches('.item--visible-4')) {
//     document.querySelector('.layer-4').classList.add('layer--visible');
//   }
// });
//
// document.addEventListener('mouseout', function (event) {
//   if (event.target.matches('.item--visible-1')) {
//     document.querySelector('.layer-1').classList.remove('layer--visible');
//   }
//   if (event.target.matches('.item--visible-2')) {
//     document.querySelector('.layer-2').classList.remove('layer--visible');
//   }
//   if (event.target.matches('.item--visible-3')) {
//     document.querySelector('.layer-3').classList.remove('layer--visible');
//   }
//   if (event.target.matches('.item--visible-4')) {
//     document.querySelector('.layer-4').classList.remove('layer--visible');
//   }
// });
