function getGapDimensions() {
  const presentation = SlidesApp.getActivePresentation();
  const pageWidth = presentation.getPageWidth();
  const pageHeight = presentation.getPageHeight();

  const horizontalGap = pageWidth / ((1 + CARD_WIDTH_TO_HORIZONTAL_GAP_RATIO) * NUM_OF_RULE_COLUMNS + 1);
  const verticalGap = pageHeight / ((1 + CARD_HEIGHT_TO_VERTICAL_GAP_RATIO) * NUM_OF_RULE_ROWS + 1);

  return { horizontalGap, verticalGap };
}

function getCardDimensions() {
  const gapDimensions = getGapDimensions();
  const cardWidth = gapDimensions.horizontalGap * CARD_WIDTH_TO_HORIZONTAL_GAP_RATIO;
  const cardHeight = gapDimensions.verticalGap * CARD_HEIGHT_TO_VERTICAL_GAP_RATIO;

  return { cardWidth, cardHeight };
}
