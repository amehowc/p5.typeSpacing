p5.prototype.letterSpacing = function (spacing = 0) {
    const ctx = drawingContext;
    if (drawingContext.constructor.name !== "CanvasRenderingContext2D") {
      console.log("Unfortunately, this feature is only available in 2D");
      return;
    }
    ctx.letterSpacing = `${spacing}px`;
    return ctx.letterSpacing;
  };