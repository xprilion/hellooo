document.addEventListener("DOMContentLoaded", function() {
    var greeting = document.getElementById("greeting");
    var count = sessionStorage.getItem("count") || 1;

    greeting.textContent += "o".repeat(count);
    sessionStorage.setItem("count", count - 2 + 3);
});
