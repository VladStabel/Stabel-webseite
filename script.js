
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transition = "opacity 1s ease";
        setTimeout(() => {
            section.style.opacity = 1;
        }, index * 400);
    });
});
