// Messages for the prank
const messages = [
    "Initializing Mangebac backdoor access...",
    "Bypassing firewall...",
    "Decrypting administrator passwords...",
    "Accessing Grade Database...",
    "Extracting student grades...",
    "Wait... what's this?",
    "ERROR: Student grade modification detected!",
    "LOCKING ACCOUNT...",
    "DISABLING INTERNET, ALL WIFI DRIVERS BECOMING OUTDATED...",
    "Just kidding... but did I do bad on the math test? 😬"
];

let output = document.getElementById("output"); // Output for hacking messages
let loadingBar = document.querySelector(".progress-bar"); // Progress bar
let bellaCiao = new Audio("bellaciao.mp3"); // Bella Ciao Song
bellaCiao.loop = true; // Loop Bella Ciao

let i = 0;

// Function to display hacking messages one by one
function displayNextMessage() {
    if (i < messages.length) {
        output.innerHTML += messages[i] + "<br>";
        i++;
        setTimeout(displayNextMessage, 1500);
    } else {
        setTimeout(() => {
            alert("HACK COMPLETE: You have now been added to the 'Best Student' list 😆");
        }, 2000);
    }
}

// Function to start the prank
function startPrank() {
    document.documentElement.requestFullscreen(); // Fullscreen mode
    bellaCiao.play(); // Play Bella Ciao
    displayNextMessage();
    loadingBar.style.width = "100%"; // Fake loading bar
}

// Function to show random popups
function createRandomPopup() {
    const popupMessages = [
        "Do you like pizza? 🍕",
        "I'm hungry for pasta! 🍝",
        "You got an A+ in sleeping! 😴",
        "This is a random popup! 🎉",
        "Wanna play some games? 🎮",
        "HACKING COMPLETE: Welcome to the elite student club. 😎"
    ];

    let popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = popupMessages[Math.floor(Math.random() * popupMessages.length)];

    // Random position
    popup.style.top = Math.random() * 80 + "vh";
    popup.style.left = Math.random() * 80 + "vw";

    document.body.appendChild(popup);

    // Remove popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Function to start progress bar
function startProgress() {
    let progress = 0;
    let interval = setInterval(() => {
        progress += Math.floor(Math.random() * 20) + 10; // Random Speed
        loadingBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById("title").innerText = "✅ Grades Loaded!";
            }, 500);
        }
    }, 500);
}

// Function to show random grades
function showGrades() {
    let grades = ["A+", "B", "C", "F", "D-", "A", "B+", "C-", "E"];
    let randomGrade = grades[Math.floor(Math.random() * grades.length)];
    document.getElementById("finalGrade").innerText = randomGrade;
    document.getElementById("grades").style.display = "block";
}

// Start random popups every 2 seconds
window.onload = () => {
    setInterval(createRandomPopup, 2000);
};
