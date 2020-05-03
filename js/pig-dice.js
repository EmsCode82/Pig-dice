const loaded = () => {
    let highScore = 0;
    for(let idx = 0; idx < 100; idx++) {
        let score = playPigDice();
        if(score > highScore) {
            highScore = score;
        }
    }
    setScore(highScore);    
}
const setScore = (score) => {
    let span = `<span>Pig Dice high score is ${score}</span>`;
    document.getElementById("score").innerHTML = span;    
}
const roll = () => {
    return Math.floor(Math.random() * 6) + 1
}
const playPigDice = () => {
    let score = 0;
    let die = roll();
    while(die != 1) {
        score += die;
        die = roll();
    }
    return score;
}