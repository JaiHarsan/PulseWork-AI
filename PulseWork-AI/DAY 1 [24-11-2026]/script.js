
//select HTML elements
const banner = document.getElementById("statusBanner");
const button = document.getElementById("checkButton");
const welcome = document.getElementById("welcome");

//Display the welcome message
welcome.innerText = "Welcome! Let's check your system status.";

//create an Arrow function
const updateBanner = (status, message) => {
    banner.innerText = message;
    banner.className = "status-banner " + status;
};

//create a Promise
const checkSystemStatus = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isOnline = Math.random() > 0.3;
            if (isOnline) {
                resolve("System is Online");
            } else {
                reject("System is Offline");
            }
        }, 2000);
    });
};

//Handle the button clicks
button.addEventListener("click", () => {
    updateBanner("checking", "System is Checking...");
    button.disabled = true;
    checkSystemStatus()
        .then((result) => {
            updateBanner("online", result);
        })
        .catch((error) => {
            updateBanner("offline", error);
        })
        .finally(() => {
            button.disabled = false;
        });
});

// document.querySelector("h1").style.color





