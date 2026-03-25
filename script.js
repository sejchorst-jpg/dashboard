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
