var currentPanel = null;

function showPanel(id) {
    var placeholder = document.getElementById("panel-placeholder");
    if (currentPanel === id) {
        document.getElementById(id).classList.remove("visible");
        if (placeholder) placeholder.style.display = "";
        currentPanel = null;
        return;
    }
    if (currentPanel) {
        document.getElementById(currentPanel).classList.remove("visible");
    }
    currentPanel = id;
    var el = document.getElementById(id);
    if (el) el.classList.add("visible");
    if (placeholder) placeholder.style.display = "none";
}

function toggleVisibility(id) {
    showPanel(id);
}
function autoclicker() { showPanel("autoclicker"); }
function spammer() { showPanel("spammer"); }
function ltsm() { showPanel("ltsm"); }
function oce() { showPanel("oce"); }
function oklearn() { showPanel("oklearn"); }
function osxiec() { showPanel("osxiec"); }
function biobridge() { showPanel("biobridge"); }
function mlc() { showPanel("mlc"); }
function ocote() { showPanel("ocote"); }
function larkos() { showPanel("larkos"); }
