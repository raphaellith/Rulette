function addSlideToPresentation() {
  const slide = SlidesApp.getActivePresentation().appendSlide();
  slide.getBackground().setSolidFill("#264653");
  return slide;
}
