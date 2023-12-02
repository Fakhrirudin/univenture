  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdown = document.getElementById("dropdown");
    const dropdownItems = document.querySelectorAll("[value]");
    const cardSections = document.querySelectorAll(".card-section");

    dropdownButton.addEventListener("click", function () {
      dropdown.classList.toggle("hidden");
    });

    dropdownItems.forEach((item) => {
      item.addEventListener("click", function () {
        const selectedValue = item.getAttribute("value");

        // Sembunyikan semua section card
        cardSections.forEach((section) => {
          section.classList.add("hidden");
        });

        // Tampilkan section card yang sesuai dengan nilai dropdown yang dipilih
        const selectedCardSection = document.getElementById(selectedValue);
        if (selectedCardSection) {
          selectedCardSection.classList.remove("hidden");
        }

        // Sembunyikan dropdown setelah memilih
        dropdown.classList.add("hidden");
      });
    });
  });