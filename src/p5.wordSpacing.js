p5.prototype.wordSpacing = function (spacing = 0) {
    const ctx = drawingContext;
    // console.log(ctx)
    if (drawingContext.constructor.name !== "CanvasRenderingContext2D") {
      console.log("Unfortunately, this feature is only available in 2D");
      return;
    }
    //just making sure we are passing full pixels
    ctx.wordSpacing = `${spacing}px`;
    return ctx.wordSpacing;
  };