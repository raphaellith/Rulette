function getGapDimensions() {
  const presentation = SlidesApp.getActivePresentation();
  const pageWidth = presentation.getPageWidth();
  const pageHeight = presentation.getPageHeight();

  const horizontalGap = pageWidth / ((1 + cardWidthToHorizontalGapRatio) * numOfRowColumns + 1);
  const verticalGap = pageHeight / ((1 + cardHeightToVerticalGapRatio) * numOfRuleRows + 1);

  return { horizontalGap, verticalGap };
}

function getCardDimensions() {
  const gapDimensions = getGapDimensions();
  const cardWidth = gapDimensions.horizontalGap * cardWidthToHorizontalGapRatio;
  const cardHeight = gapDimensions.verticalGap * cardHeightToVerticalGapRatio;

  return { cardWidth, cardHeight };
}
