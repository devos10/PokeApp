//Funciones adicionales para estetica

function updateHP(pokemon, hp) {
    const hpBar = document.querySelector(#${pokemon} .hp-bar);
    const hpPercentage = (hp / 100) * 100; // Ajusta el 100 al HP máximo del Pokémon

    hpBar.style.width = ${hpPercentage}%;
    hpBar.textContent = ${hp} HP;

    if (hpPercentage <= 25) {
        hpBar.classList.add("low");
        hpBar.classList.remove("medium");
    } else if (hpPercentage <= 50) {
        hpBar.classList.add("medium");
        hpBar.classList.remove("low");
    } else {
        hpBar.classList.remove("low", "medium");
    }
}
