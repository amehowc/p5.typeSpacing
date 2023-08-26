function setup() {
    createCanvas(800, 800);
    textAlign(CENTER, CENTER);
    textSize(60);
}

function draw() {
    clear();
    background(220);

    const numframes = 2 * 60;
    const progress = (frameCount % numframes) / numframes;
    const movement = sin(progress * TWO_PI) * 0.5 + 0.5;
    const txt = "the quick something\njumped over what ?";
    const linesOfWords = txt.split("\n");
    const margins = 10 * 2;

    linesOfWords.forEach((lineOfWords, index) => {
        push();
        const words = Math.max(0, lineOfWords.split(" ").length - 1);
        const spacer = floor(
            (width - margins - textWidth(lineOfWords)) / words
        );
        const ctx = drawingContext;
        wordSpacing(spacer * movement);
        text(lineOfWords, width / 2, textLeading() / 2 + textLeading() * index);
        pop();
    });

    linesOfWords.forEach((lineOfWords, index, arr) => {
        push();
        const words = Math.max(0, lineOfWords.split("").length - 1);
        const spacer = floor(
            (width - margins - textWidth(lineOfWords)) / words
        );
        const ctx = drawingContext;
        letterSpacing(spacer * movement);
        text(
            lineOfWords,
            width / 2,
            height -
                (textLeading() / 2 + (arr.length - 1) * textLeading()) +
                textLeading() * index
        );
        pop();
    });

    linesOfWords.forEach((lineOfWords, index) => {
        push();
        const words = Math.max(0, lineOfWords.split(" ").length - 1);
        const letters = Math.max(0, lineOfWords.split("").length - 1);
        const wordsSpacer = floor(
            (width - margins - textWidth(lineOfWords)) / words
        );
        const lettersSpacer = floor(
            (width - margins - textWidth(lineOfWords)) / letters
        );
        const ctx = drawingContext;
        wordSpacing(wordsSpacer * 0.25 * movement);
        letterSpacing(lettersSpacer * 0.75 * movement);
        text(
            lineOfWords,
            width / 2,
            height / 2 + textLeading() / 2 + textLeading() * (index - 1)
        );
        pop();
    });

    push();
    noStroke();
    fill(0);
    textSize(10);
    text(nfc(frameRate(), 0), 15, 10);
    pop();
}
