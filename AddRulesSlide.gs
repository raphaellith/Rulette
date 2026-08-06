/*
COLOR SCHEME:
https://coolors.co/palette/264653-2a9d8f-e9c46a-f4a261-e76f51
*/

const numOfRowColumns = 5;
const numOfRuleRows = 6;
const cardWidthToHorizontalGapRatio = 10;
const cardHeightToVerticalGapRatio = 10;

function getGapDimensions() {
  const presentation = SlidesApp.getActivePresentation();
  const pageWidth = presentation.getPageWidth();
  const pageHeight = presentation.getPageHeight();

  const horizontalGap = pageWidth / ((1 + cardWidthToHorizontalGapRatio) * numOfRowColumns + 1);
  const verticalGap = pageHeight / ((1 + cardHeightToVerticalGapRatio) * numOfRuleRows + 1);

  return {
    horizontalGap,
    verticalGap
  };
}

function getCardDimensions() {
  const gapDimensions = getGapDimensions();
  const cardWidth = gapDimensions.horizontalGap * cardWidthToHorizontalGapRatio;
  const cardHeight = gapDimensions.verticalGap * cardHeightToVerticalGapRatio;

  return {
    cardWidth,
    cardHeight
  };
}

function addRulesSlideToPresentation() {
  const rulesSlide = addSlideToPresentation();

  const stacks = generateStacks();
  for (const [i, stack] of stacks.entries()) {
    insertStack(rulesSlide, stack, i);
  }  
}

function insertStack(rulesSlide, stack, i) {
  const rowIndex = Math.trunc(i / numOfRowColumns);
  const columnIndex = i % numOfRowColumns;

  const cardDimensions = getCardDimensions();
  const gapDimensions = getGapDimensions();

  const x = gapDimensions.horizontalGap + (cardDimensions.cardWidth + gapDimensions.horizontalGap) * columnIndex;
  const y = gapDimensions.verticalGap + (cardDimensions.cardHeight + gapDimensions.verticalGap) * rowIndex;

  // End card
  insertCard(rulesSlide, x, y, "#222222", "#555555", "END", 800, 20, "#FFFFFF");
  
  if ('prompt' in stack) {
    // Prompt card
    insertCard(rulesSlide, x, y, "#000000", "#FFFFFF", stack.prompt.toUpperCase(), 800, 12, "#000000");

    // Prompt cover card
    insertCard(rulesSlide, x, y, "#000000", "#FFFFFF", "PROMPT", 800, 20, "#000000");
  } else {  // Modifier
    // Modifier card
    insertCard(rulesSlide, x, y, "#7E5F13", "#A77F19", stack.modifier.toUpperCase(), 800, 20, "#FFFFFF");

    // Modifier cover card
    insertCard(rulesSlide, x, y, "#926F16", "#EFD593", "MODIFIER", 800, 20, "#926F16");
  }

  const ruleCardBorderColor = i % 2 ? "#B7590D" : "#B03618";
  const ruleCardFillColor = i % 2 ? "#E46F10" : "#E24E29";
  const ruleCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, stack.rule.front.toUpperCase(), 400, 12, "#FFFFFF");
  const ruleCoverCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, "RULE", 400, 20, "#FFFFFF");

  ruleCard.getText().getTextStyle().setItalic(true);
  ruleCoverCard.getText().getTextStyle().setItalic(true);
}

function insertCard(slide, x, y, borderFill, fill, text, fontWeight, fontSize, textColor) {
  const cardDimensions = getCardDimensions();

  const card = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, cardDimensions.cardWidth, cardDimensions.cardHeight);
  card.getBorder().setWeight(3).getLineFill().setSolidFill(borderFill);
  card.getFill().setSolidFill(fill);
  card.getText().appendText(text);
  card.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  card.getText().getTextStyle().setFontFamilyAndWeight("Roboto Condensed", fontWeight).setForegroundColor(textColor).setFontSize(fontSize);
  return card;
}
