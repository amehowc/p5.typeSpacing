p5.prototype.wordSpacing = function (spacing = 0) {
    const ctx = drawingContext;
    if (drawingContext.constructor.name !== "CanvasRenderingContext2D") {
      console.log("Unfortunately, this feature is only available in 2D");
      return;
    }
    ctx.wordSpacing = `${spacing}px`;
    return ctx.wordSpacing;
  };