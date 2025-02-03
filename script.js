function toggleTheme() {
    const body = document.body;
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "#0a0a0a";
        body.style.color = "#fff";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "#000";
    }
}
