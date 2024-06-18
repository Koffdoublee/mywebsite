// script.js
document.addEventListener("DOMContentLoaded", function() {
    const abtMeToggle = document.getElementById("abtMeToggle");
    const abtMeContent = document.getElementById("abtMeContent");

    abtMeToggle.addEventListener("click", function() {
        if (abtMeContent.classList.contains("hidden")) {
            abtMeContent.classList.remove("hidden");
        } else {
            abtMeContent.classList.add("hidden");
        }
    });

    const workOnToggle = document.getElementById("workOnToggle");
    const workOnContent = document.getElementById("workOnContent");

    workOnToggle.addEventListener("click", function() {
        if (workOnContent.classList.contains("hidden")) {
            workOnContent.classList.remove("hidden");
        } else {
            workOnContent.classList.add("hidden");
        }
    });
});
