document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const button1 = document.getElementById("changeButton");
    const button2 = document.getElementById("changeButton2");

    button1.addEventListener("click", () => {
        title.textContent = "반갑습니다! 😊";
        title.style.color = "red";
    });

    button2.addEventListener("click", () => {
        title.textContent = "😄안녕하세요😄";
        title.style.color = "blue";
    });
});
