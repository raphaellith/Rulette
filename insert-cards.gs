function insertCard(slide, x, y, borderFill, fill, text, fontIsHeavy, fontIsLarge, textColor) {
  const cardDimensions = getCardDimensions();

  const card = slide.insertShape(SlidesApp.ShapeType.ROUND_RECTANGLE, x, y, cardDimensions.cardWidth, cardDimensions.cardHeight);

  card.getBorder().setWeight(CARD_BORDER_WEIGHT).getLineFill().setSolidFill(borderFill);
  card.getFill().setSolidFill(fill);

  card.getText().appendText(text);
  card.getText().getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  card.getText().getTextStyle().setFontFamilyAndWeight(FONT_FAMILY, fontIsHeavy ? HEAVY_FONT_WEIGHT : LIGHT_FONT_WEIGHT).setForegroundColor(textColor).setFontSize(fontIsLarge ? LARGE_FONT_SIZE : SMALL_FONT_SIZE);

  return card;
}

function insertStack(rulesSlide, stack, i) {
  const rowIndex = Math.trunc(i / NUM_OF_RULE_COLUMNS);
  const columnIndex = i % NUM_OF_RULE_COLUMNS;

  const cardDimensions = getCardDimensions();
  const gapDimensions = getGapDimensions();

  const x = gapDimensions.horizontalGap + (cardDimensions.cardWidth + gapDimensions.horizontalGap) * columnIndex;
  const y = gapDimensions.verticalGap + (cardDimensions.cardHeight + gapDimensions.verticalGap) * rowIndex;

  // End card
  insertCard(rulesSlide, x, y, END_CARD_BORDER_COLOR, END_CARD_FILL_COLOR, "END", true, true, WHITE);
  
  if ('prompt' in stack) {
    // Prompt card
    insertCard(rulesSlide, x, y, BLACK, WHITE, stack.prompt.toUpperCase(), true, false, BLACK);

    // Prompt cover card
    insertCard(rulesSlide, x, y, BLACK, WHITE, "PROMPT", true, true, BLACK);
  } else {  // Modifier
    // Modifier card
    insertCard(rulesSlide, x, y, MODIFIER_CARD_BORDER_COLOR, MODIFIER_CARD_FILL_COLOR, stack.modifier.toUpperCase(), true, true, WHITE);

    // Modifier cover card
    insertCard(rulesSlide, x, y, MODIFIER_COVER_CARD_BORDER_COLOR, MODIFIER_COVER_CARD_FILL_COLOR, "MODIFIER", true, true, MODIFIER_COVER_CARD_BORDER_COLOR);
  }

  const ruleCardBorderColor = i % 2 ? RULE_CARD_BORDER_COLOR_1 : RULE_CARD_BORDER_COLOR_2;
  const ruleCardFillColor = i % 2 ? RULE_CARD_FILL_COLOR_1 : RULE_CARD_FILL_COLOR_2;
  const ruleCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, stack.rule.front.toUpperCase(), false, false, WHITE);
  const ruleCoverCard = insertCard(rulesSlide, x, y, ruleCardBorderColor, ruleCardFillColor, "RULE", false, true, WHITE);

  ruleCard.getText().getTextStyle().setItalic(true);
  ruleCoverCard.getText().getTextStyle().setItalic(true);
}
