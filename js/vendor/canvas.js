var   canvas = document.querySelector('canvas'),
         ctx = canvas.getContext('2d'),
   particles = [],
patriclesNum = 45,
           w = 1500,
           h = 1500,
      colors = ['rgba(190,117,197,0.08)','rgba(240,97,97,0.02)','rgba(128,122,97,0.08)','rgba(240,137,117,0.09)'];
 
canvas.width = 1500;
canvas.height = 1280;
canvas.style.left = (window.innerWidth - 1500)/2+'px';

if(window.innerHeight>1500)
canvas.style.top = (window.innerHeight - 1500)/2+'px';
  
function Factory(){  
  this.x =  Math.round( Math.random() * w);
  this.y =  Math.round( Math.random() * h) + 6 ;
  this.rad = Math.round( Math.random() * 7) + 6;
  this.rgba = colors[ Math.round( Math.random() * 6) ];
  this.vx = Math.round( Math.random() * 7) - 3.5;
  this.vy = Math.round( Math.random() * 7) - 2.5;
}
   
function draw(){
  ctx.clearRect( 0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for(var i = 0;i < patriclesNum; i++){
    var temp = particles[i];
    var factor = 0;
     
    for(var j = 0; j<patriclesNum; j++){
      
       var temp2 = particles[j];
       ctx.linewidth = 1;
      
       if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
          ctx.strokeStyle = temp.rgba;
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
                 ctx.stroke();
          factor++;
       }
    }
    
    
    
    
    ctx.fillStyle = temp.rgba;
    
    
        
    
       ctx.beginPath();
    ctx.rect(temp.x, temp.y *factor, 140, 245, Math.PI*2, true);
    ctx.fill();
    
    
   

    temp.x += temp.vx;
    temp.y += temp.vy;
    
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
  }
}

function findDistance(p1,p2){  
  return Math.sqrt( Math.pow(p2.x - p1.x, 8) + Math.pow(p2.y - p1.y, 8) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function init(){
  for(var i = 0; i < patriclesNum; i++){
    particles.push(new Factory);
  }
})();

(function loop(){
  draw();
  requestAnimFrame(loop);
})();



  
