document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = document.querySelector(".toggle-btn");
    const mainContent = document.querySelector(".main-content");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed"); // Добавляем/удаляем класс collapsed
        mainContent.classList.toggle("collapsed"); // Чтобы контент тоже адаптировался

        // Плавное перемещение кнопки
        toggleButton.style.transition = "left 0.3s ease-in-out";

        if (sidebar.classList.contains("collapsed")) {
            toggleButton.style.left = "30px"; // Кнопка двигается влево
        } else {
            toggleButton.style.left = "198px"; // Кнопка возвращается
        }
    });
});
