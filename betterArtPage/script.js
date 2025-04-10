document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".input");
    const cards = document.querySelectorAll(".poza");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const subtitle = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const match = subtitle.includes(searchText);
            card.parentElement.style.display = match ? "inline-block" : "none";
        });
    });
});
