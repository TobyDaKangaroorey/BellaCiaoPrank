const messages = [
    "Initializing Mangebac backdoor access...",
    "Bypassing firewall...",
    "Decrypting administrator passwords...",
    "Accessing Grade Database...",
    "Extracting student grades...",
    "Wait... what's this?",
    "ERROR: Student grade modification detected!",
    "LOCKING ACCOUNT...",
    "DISABLING INTERNET, ALL WIFI DRIVERS BECOMMING OUTDATED,...",
    "Just kidding... but did I do bad on the math test? 😬"
];

let output = document.getElementById("output");
let loadingBar = document.querySelector(".loading-bar");
let bellaCiao = new Audio("bellaciao.mp3"); // Replacing hacking sounds with Bella Ciao
bellaCiao.loop = true; // Make the song loop

let i = 0;

function displayNextMessage() {
    if (i < messages.length) {
        output.innerHTML += messages[i] + "\n";
        i++;
        setTimeout(displayNextMessage, 1500);
    } else {
        setTimeout(() => {
            alert("HACK COMPLETE: You have now been added to the 'Best Student' list 😆");
        }, 2000);
    }
}

function startPrank() {
    document.documentElement.requestFullscreen(); // Forces fullscreen mode
    bellaCiao.play(); // Start playing Bella Ciao
    displayNextMessage();
    loadingBar.style.width = "100%";
}
