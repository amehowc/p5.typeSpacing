function setup() {
    createCanvas(800, 800);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
    textSize(60);
}

function draw() {
    clear();
    background(220);

    const numframes = 2 * 60;
    const progress = (frameCount % numframes) / numframes;
    const movement = ease(sin(progress * TWO_PI) * 0.5 + 0.5, 8);
    const txt = "the quick something\njumped over what ?";

    const margins = 10 * 2;
    const justifiedMovement = true;

    if (!justifiedMovement) {
        push();
        translate(width / 2, textLeading());
        wordSpacing(60 * movement);
        text(txt, 0, 0);
        pop();

        push();
        translate(width / 2, height / 2);
        wordSpacing(10 * movement) * 0.25;
        letterSpacing(10 * movement) * 0.25;
        text(txt, 0, 0);
        pop();

        push();
        translate(width / 2, height - textLeading());
        letterSpacing(10 * movement);
        text(txt, 0, 0);
        pop();
    } else {
        const linesOfWords = txt.split("\n");
        linesOfWords.forEach((lineOfWords, index) => {
            push();
            const words = Math.max(0, lineOfWords.split(" ").length - 1);
            const spacer = floor(
                (width - margins - textWidth(lineOfWords)) / words
            );
            wordSpacing(spacer * movement);
            text(
                lineOfWords,
                width / 2,
                textLeading() / 2 + textLeading() * index
            );
            push();
            noFill();
            translate(width / 2, textLeading() / 2 + textLeading() * index);
            rect(0, 0, textWidth(lineOfWords), textLeading());

            pop();
            pop();
        });

        linesOfWords.forEach((lineOfWords, index, arr) => {
            push();
            const words = Math.max(0, lineOfWords.split("").length - 1);
            const spacer = floor(
                (width - margins - textWidth(lineOfWords)) / words
            );
            letterSpacing(spacer * movement);
            text(
                lineOfWords,
                width / 2,
                height -
                    (textLeading() / 2 + (arr.length - 1) * textLeading()) +
                    textLeading() * index
            );
            push();
            noFill();
            translate(
                width / 2,
                height -
                    (textLeading() / 2 + (arr.length - 1) * textLeading()) +
                    textLeading() * index
            );
            rect(0, 0, textWidth(lineOfWords), textLeading());

            pop();
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
            wordSpacing(wordsSpacer * 0.25 * movement);
            letterSpacing(lettersSpacer * 0.75 * movement);
            text(
                lineOfWords,
                width / 2,
                height / 2 + textLeading() / 2 + textLeading() * (index - 1)
            );
            push();
            noFill();
            translate(
                width / 2,
                height / 2 + textLeading() / 2 + textLeading() * (index - 1)
            );
            rect(0, 0, textWidth(lineOfWords), textLeading());
            pop();
            pop();
        });
    }
    // uncomment to display frame rate
    // push();
    // noStroke();
    // fill(0);
    // textSize(10)
    // text(nfc(frameRate(), 0), 15, 10);
    // pop();
}

function ease(p, g) {
    if (p < 0.5) return 0.5 * pow(2 * p, g);
    else return 1 - 0.5 * pow(2 * (1 - p), g);
}
