function addSlideToPresentation() {
  const slide = SlidesApp.getActivePresentation().appendSlide();
  slide.getBackground().setSolidFill(SLIDE_BACKGROUND_COLOR);
  return slide;
}
