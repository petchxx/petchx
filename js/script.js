
function typeWriter() {
    // create a list of I'm a Web Developer, I'm a Programmer
    var words = ["I'm a Web Developer.", "I'm a Programmer.", "I'm a Designer.", "I'm a Freelancer.", "I'm an Application Developer."];
    var word = words[Math.floor(Math.random() * words.length)];
    document.getElementById("occupation").innerHTML = "";
    var i = 0;
    var timer = setInterval(function () {
        if (i < word.length) {
            document.getElementById("occupation").innerHTML += word.charAt(i);
            i++;
        }
    }, 50);
    setTimeout(typeWriter, 7000)
}


typeWriter();


document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        location.reload();
    }
});