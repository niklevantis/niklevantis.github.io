const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

async function open_terminal(){
  await delay(350);
  createText("<h1 class='redfg'>Error 404</h1><p>The requested page couldn't be found.<br>The page might have been removed or is temporarily unavailable.</p>");
  await delay(700);
  createText("Type <span class='blue'>cd</span> or <span class='blue'>cd $HOME</span> or <span class='blue'>cd ~</span> to return to the main website.");
  new_line();
}

function new_line(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest";
  span1.textContent = "@";
  span2.textContent = "whoisYoges.eu.org";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "icone")
  i.textContent = ">>";
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  const value = document.querySelector("input").value.replace(/\s+/g, ' ').trim();
  if(value === "cd $HOME"){
    trueValue(value);
    createText("Returning home...")
    await delay(750);
    window.location.replace("/");
  }
  else if(value === "cd"){
    trueValue(value);
    createText("Returning home...")
    await delay(750);
    window.location.replace("/");
  }
  else if(value === "cd ~"){
    trueValue(value);
    createText("Returning home...")
    await delay(750);
    window.location.replace("/");
  }
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else if(value === "exit"){
    trueValue(value);
    createText("Exitting...");
    await delay(750);
    closeapp();
  }
  else if(value === ""){
    trueValue(value);
  }
  else{
    falseValue(value);
    createText(`${value}: command not found.<br>Type <span class='blue'>cd</span> or <span class='blue'>cd $HOME</span> or <span class='blue'>cd ~</span> to return to the main website.<br>Remember that the commands are case sensitive.`)
  }
}

function trueValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "icone");
  i.textContent = ">>";
  const errormessage = document.createElement("h2");
  errormessage.setAttribute("class", "sucess")
  errormessage.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(errormessage);
  app.appendChild(div);
}

function falseValue(value){
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.textContent = ">>";
  i.setAttribute("class", "icone error")
  const errormessage = document.createElement("h2");
  errormessage.setAttribute("class", "error")
  errormessage.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(errormessage);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function maximizeapp() {
  var div1 = document.getElementById("container");
  if (div1.style.width != "100%") {
      w = div1.style.width;
      h = div1.style.height;
      div1.style.width = "100%";
      div1.style.height = "100%";
  }
  else
      {
          div1.style.width = w;
          div1.style.height = h;
      }
  return false;
}

function closeapp() {
  var div1 = document.getElementById("container");
  div1.style.display = "none";
  return false;
}
function minimizeAndRestoreApp() {
  var div1 = document.getElementById("container");
  var div2 = document.getElementById("minimizeandrestore");
  w = div1.style.width;
  h = div1.style.height;
  if (div1.style.display != "none") {
    div1.style.display = "none";
    div2.style.display = "contents";
  }
  else {
    div1.style.display = "flex";
    div2.style.display = "none";
    div1.style.width = w;
    div1.style.height = h;
  }
  return false;
}
open_terminal();