const app = document.querySelector("body");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event) {
    if (event.key === "Enter") {
        await delay(150);
        getInputValue();
        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener("click", function(event) {
    const input = document.querySelector("input");
    input.focus();
})

function clear() {
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
}

function help() {
    clear();
    createText("Type <span class='blue'>ls</span> to see all available commands.<br> Or type <span class='blue'>ls -l</span> to see a list of available commands with their short description.");
}

async function open_terminal() {
    await delay(350);
    createText("Welcome to nicklevantis.com...");
    await delay(700);
    createText("Type <span class='blue'>help</span> to get started.");
    new_line();
}

function new_line() {
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path")
    p.textContent = "guest";
    span1.textContent = "@";
    span2.textContent = "nicklevantis.com";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class", "type")
    const i = document.createElement("i");
    i.setAttribute("class", "icone");
    i.textContent = ">>";
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();
}

function removeInput() {
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue() {
    const value = document.querySelector("input").value.replace(/\s+/g, ' ').trim();
    if (value === "about") {
        trueValue(value);
        createText("Over four decades i collaborated, with other artists experimenting through different  music styles. Today i continue to experiment with music and visuals. ");
    } else if (value === "clear") {
        clear();
    } else if (value === "music") {
        trueValue(value);
        createText("<a href='https://soundcloud.com/nicklevantis/' target='_blank' rel='noopener noreferrer'> soundcloud.com/nicklevantis</a>");
        window.open('https://soundcloud.com/nicklevantis', '_blank');
    } else if (value === "date") {
        trueValue(value);
        currentdate = Date();
        createText(`${currentdate}`)
    } else if (value === "email") {
        trueValue(value);
        createText("<a href='mailto:nicklevantis@protonmail.com' target='_blank' rel='noopener noreferrer'> nicklevantis@protonmail.com</a>")
    } else if (value === "exit") {
        trueValue(value);
        createText("Exitting...");
        await delay(750);
        closeapp();
    } else if (value === "github") {
        trueValue(value);
        window.open('https://github.com/unixobserver', '_blank');
        createText("<a href='https://github.com/unixobserver' target='_blank' rel='noopener noreferrer'> github.com/unixobserver</a>")
    } else if (value === "help") {
        trueValue(value);
        help();
    } else if (value === "ls") {
        trueValue(value);
        createText("Available commands: <br><span class='blue'>about</span>, <span class='blue'>blog </span>,<span class='blue'>clear</span>, <span class='blue'>date</span>, <span class='blue'>email</span>, <span class='blue'>exit</span>, <span class='blue'>github</span>, <span class='blue'>help</span>, <span class='blue'>ls</span>, <span class='blue'>ls -l</span>, <span class='blue'>music</span>, <span class='blue'>videos</span>");
    } else if (value === "ls -l") {
        trueValue(value);
        createText("Available commands with description: <br> <p class='lsall'><span class='blue lstitle'>about </span> <span class='desc'> short about myself </span> </p> <p class='lsall'><span class='blue lstitle'>blog </span> <span class='desc'> my blog </span> </p>  <p class='lsall'><span class='blue lstitle'>clear </span>  <span class='desc'> clear the terminal screen </span> </p>  <p class='lsall'><span class='blue lstitle'>music </span>  <span class='desc'> link to my music </span> </p> <p class='lsall'><span class='blue lstitle'>date </span>  <span class='desc'> current date </span> </p>  <p class='lsall'><span class='blue lstitle'>email </span>  <span class='desc'> email address to contact me </span> </p> <p class='lsall'><span class='blue lstitle'>exit </span>  <span class='desc'> exit from the terminal </span> </p> <p class='lsall'><span class='blue lstitle'>github </span>  <span class='desc'> link to my github profile </span> </p> <p class='lsall'><span class='blue lstitle'>help </span>  <span class='desc'> show help text to get started with this site </span> </p> <p class='lsall'><span class='blue lstitle'>ls </span>  <span class='desc'> list all the available commands in this site </span> </p> <p class='lsall'><span class='blue lstitle'>music </span>  <span class='desc'> link to my soundcloud </span> </p> <p class='lsall'><span class='blue lstitle'>videos </span>  <span class='desc'> link to my youtube profile </span> </p> <p class='lsall'><span class='blue lstitle'>whoami </span>  <span class='desc'> who are you? </span> </p>");
    } else if (value === "blog") {
        trueValue(value);
        window.open('https://nicklevantis.svbtle.com', '_blank');
        createText("<a href='https://nicklevantis.svbtle.com' target='_blank' rel='noopener noreferrer'> nicklevantis.svbtle.com</a>")
    } else if (value === "whoami") {
        trueValue(value);
        createText(`guest`)
    } else if (value === "videos") {
        trueValue(value);
        window.open('https://www.youtube.com/nicklevantis', '_blank');
        createText("<a href='https://www.youtube.com/nicklevantis' target='_blank' rel='noopener noreferrer'> @nicklevantis</a>")
    } else if (value === "") {
        trueValue(value);
    } else {
        falseValue(value);
        createText(`${value}: command not found<br>Try <span class='blue'>help</span> to get started.<br>Remember all the commands are case sensitive.`)
    }
}

function trueValue(value) {
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

function falseValue(value) {
    const div = document.createElement("section");
    div.setAttribute("class", "type2")
    const i = document.createElement("i");
    i.setAttribute("class", "icone error");
    i.textContent = ">>";
    const errormessage = document.createElement("h2");
    errormessage.setAttribute("class", "error")
    errormessage.textContent = `${value}`;
    div.appendChild(i);
    div.appendChild(errormessage);
    app.appendChild(div);
}

function createText(text, classname) {
    const p = document.createElement("p");
    p.innerHTML = text;
    app.appendChild(p);
}

function createCode(code, text) {
    const p = document.createElement("p");
    p.setAttribute("class", "code");
    p.innerHTML =
        `${code} <br/><span class='text'> ${text} </span>`;
    app.appendChild(p);
}

function maximizeapp() {
    var div1 = document.getElementById("container");
    if (div1.style.width != "100%") {
        wo = div1.style.width;
        ho = div1.style.height;
        div1.style.width = "100%";
        div1.style.height = "100%";
    } else {
        div1.style.width = wo;
        div1.style.height = ho;
    }
    return false;
}

function closeapp() {
    var div1 = document.getElementById("container");
    var div2 = document.getElementById("minimizeandrestore");
    div1.style.display = "none";
    div2.style.display = "none";
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
    } else {
        div1.style.display = "flex";
        div2.style.display = "none";
        div1.style.width = w;
        div1.style.height = h;
    }
    return false;
}
open_terminal();