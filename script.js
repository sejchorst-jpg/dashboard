let navOpen = false;
function toggleNav() {
  const sidebar = document.getElementById("mySidebar");
  const main = document.getElementById("main");

  if (!navOpen) {
    sidebar.style.width = "250px";
    main.style.marginLeft = "250px";
    navOpen = true;
  } else {
    sidebar.style.width = "0";
    main.style.marginLeft = "0";
    navOpen = false;
  }
}

// Time spent tracking
let startTime = sessionStorage.getItem("siteStartTime");
if (!startTime) {
  startTime = Date.now();
  sessionStorage.setItem("siteStartTime", startTime);
} else {
  startTime = parseInt(startTime, 10);
}

function updateTimeSpent() {
  const now = Date.now();
  const diffInSeconds = Math.floor((now - startTime) / 1000);

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  const formattedTime =
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0");

  const displayElement = document.getElementById("time-spent-display");
  if (displayElement) {
    displayElement.textContent = formattedTime;
  }
}

// Update the timer every second
setInterval(updateTimeSpent, 1000);
