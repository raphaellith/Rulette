function insertStack(rulesSlide, stack, i) {
  const rowIndex = Math.trunc(i / numOfRowColumns);
  const columnIndex = i % numOfRowColumns;

  const cardDimensions = getCardDimensions();
  const gapDimensions = getGapDimensions();

  const x = gapDimensions.horizontalGap + (cardDimensions.cardWidth + gapDimensions.horizontalGap) * columnIndex;
  const y = gapDimensions.verticalGap + (cardDimensions.cardHeight + gapDimensions.verticalGap) * rowIndex;

  // End card
  insertCard(rulesSlide, x, y, END_CARD_BORDER_COLOR, END_CARD_FILL_COLOR, "END", true, 20, WHITE);
  
  if ('prompt' in stack) {
    // Prompt card
    insertCard(rulesSlide, x, y, BLACK, WHITE, stack.prompt.toUpperCase(), true, 12, BLACK);

    // Prompt cover card
    insertCard(rulesSlide, x, y, BLACK, WHITE, "PROMPT", true, 20, BLACK);
  } else {  // Modifier
    // Modifier card
    insertCard(rulesSlide, x, y, MODIFIER_CARD_BORDER_COLOR, MODIFIER_CARD_FILL_COLOR, stack.modifier.toUpperCase(), true, 20, WHITE);

    // Modifier cover card
    insertCard(rulesSlide, x, y, MODIFIER_COVER_CARD_BORDER_COLOR, MODIFIER_COVER_CARD_FILL_COLOR, "MODIFIER", true, 20, MODIFIER_COVER_CARD_BORDER_COLOR);
  }

  const ruleCardBorderColor = i % 2 ? RULE_CARD_BORDER_COLOR_1 : RULE_CARD_BORDER_COLOR_2;
  const ruleCardFillColor = i % 2 ? RULE_CARD_BORDER_COLOR_2 : RULE_CARD_FILL_COLOR_2;
  const ruleCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, stack.rule.front.toUpperCase(), false, 12, WHITE);
  const ruleCoverCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, "RULE", false, 20, WHITE);

  ruleCard.getText().getTextStyle().setItalic(true);
  ruleCoverCard.getText().getTextStyle().setItalic(true);
}

function insertCard(slide, x, y, borderFill, fill, text, fontIsHeavy, fontSize, textColor) {
  const cardDimensions = getCardDimensions();

  const card = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, cardDimensions.cardWidth, cardDimensions.cardHeight);
  card.getBorder().setWeight(3).getLineFill().setSolidFill(borderFill);
  card.getFill().setSolidFill(fill);
  card.getText().appendText(text);
  card.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  card.getText().getTextStyle().setFontFamilyAndWeight("Roboto Condensed", fontIsHeavy ? 800 : 400).setForegroundColor(textColor).setFontSize(fontSize);
  return card;
}
