document.addEventListener("DOMContentLoaded", () => {
    randomizeCoin();
    
    const cups = document.querySelectorAll(".cup-container");
    cups.forEach(cup => {
        cup.addEventListener("click", revealCoin);
    });
});

let coinPosition = "";

function randomizeCoin() {
    const positions = ["space1", "space2", "space3"];
    const randomIndex = Math.floor(Math.random() * positions.length);
    coinPosition = positions[randomIndex];
    console.log("Coin is in:", coinPosition);
}

function revealCoin(event) {
    const selectedCupId = event.currentTarget.id;
    const selectedCupPosition = event.currentTarget.getAttribute("value");
    const selectedCoinId = "coin" + selectedCupPosition.charAt(selectedCupPosition.length - 1);
    const correctCoinId = "coin" + coinPosition.charAt(coinPosition.length - 1);
    const correctCupId = "cup" + coinPosition.charAt(coinPosition.length - 1);

    if (selectedCupPosition === coinPosition) {
        document.getElementById(selectedCoinId).style.display = "block";
        document.getElementById(selectedCupId).classList.add("reveal");
        coinFoundModal.style.display = "block";
    } else {
        document.getElementById(correctCoinId).style.display = "block";
        document.getElementById(correctCupId).classList.add("reveal");
        document.getElementById(selectedCupId).classList.add("reveal");
        coinNotFoundModal.style.display = "block";
    }
}