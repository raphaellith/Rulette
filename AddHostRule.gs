function addHostRuleToActiveSlide() {
  const presentation = SlidesApp.getActivePresentation();

  const activeSlide = presentation.getSelection().getCurrentPage().asSlide();

  const cardDimensions = getCardDimensions();
  
  const x = (presentation.getPageWidth() - cardDimensions.cardWidth) / 2;
  const y = (presentation.getPageHeight() - cardDimensions.cardHeight) / 2;

  const ruleCard = insertCard(activeSlide, x, y, "#B7590D", "#E46F10", hostRule.front.toUpperCase(), 400, 12, WHITE);
  ruleCard.getText().getTextStyle().setItalic(true);
}
