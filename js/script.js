var wordTemp = "";

function typeWriter() {
    // create a list of I'm a Web Developer, I'm a Programmer
    var words = ["<dev> Hello World 👋🏻 </dev>", "<dev> Ux/Ui Designer </dev> ", "<dev> Frontend Developer </dev> "];
    var word = words[Math.floor(Math.random() * words.length)];
    if (wordTemp == word) {
        typeWriter();
        return
    } else {
        wordTemp = word;
    }
    document.getElementById("welcome").innerHTML = "";
    var i = 0;
    var timer = setInterval(function () {
        if (i < word.length) {
            document.getElementById("welcome").innerHTML += word.charAt(i);
            i++;
        }
    }, 50);
    setTimeout(typeWriter, 5000)
}


typeWriter();


document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        location.reload();
    }
});



document.querySelector('.nav-item li a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});


const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const fadeOutElement = document.querySelector('.fade-out');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > vh * 0.2) {
        fadeOutElement.style.opacity = 0;
        fadeOutElement.style.transform = 'scale(0.8)';
    } else {
        fadeOutElement.style.opacity = 1;
        fadeOutElement.style.transform = 'scale(1)';
    }
});


const fadeInElement = document.querySelector('.fade-in');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > vh * 0.2) {
        fadeInElement.style.opacity = 1;
        fadeInElement.style.transform = 'scale(1)';
    } else {
        fadeInElement.style.opacity = 0;
        fadeInElement.style.transform = 'scale(0.8)';
    }
});


// delayed function

function delayed() {
    setTimeout(function () {
        document.querySelector('.splash').style.transform = 'translateY(-100%)';
        document.querySelector('.body').style.display = 'block';
    }, 2500);
}

delayed();

