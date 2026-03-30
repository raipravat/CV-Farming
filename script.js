function showSection(sectionId, button) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");

    const buttons = document.querySelectorAll(".tab-button");
    buttons.forEach(tab => {
        tab.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }
}

const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}
