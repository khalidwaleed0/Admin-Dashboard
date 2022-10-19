document.querySelector(".sidebar-icon").onclick = showSideBar;
document.querySelector(".btn-close").onclick = closeSideBar;
document.querySelector("main").onclick = closeSideBar;
document.querySelector("header").onclick = closeSideBar;

function showSideBar(e) {
    e.stopPropagation();
    document.querySelector(".sidebar").classList.add("sidebar-active");
}

function closeSideBar() {
    document.querySelector(".sidebar").classList.remove("sidebar-active");
}
