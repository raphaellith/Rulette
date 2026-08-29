function onOpen() {
  const ui = SlidesApp.getUi();

  ui.createMenu('Rulette')
      .addItem('Add rules slide', 'addRulesSlideToPresentation')
      .addItem('Add empty slide', 'addSlideToPresentation')
      .addSeparator()
      .addItem('Add host rule', 'addHostRuleToActiveSlide')
      .addSeparator()
      .addItem('Flip selected rule', 'flip')
      .addToUi();
}

function addRulesSlideToPresentation() {
  const rulesSlide = addSlideToPresentation();

  const stacks = generateStacks();
  for (const [i, stack] of stacks.entries()) {
    insertStack(rulesSlide, stack, i);
  }  
}

function addSlideToPresentation() {
  const slide = SlidesApp.getActivePresentation().appendSlide();
  slide.getBackground().setSolidFill(SLIDE_BACKGROUND_COLOR);
  return slide;
}

function addHostRuleToActiveSlide() {
  const presentation = SlidesApp.getActivePresentation();

  const activeSlide = presentation.getSelection().getCurrentPage().asSlide();

  const cardDimensions = getCardDimensions();
  
  const x = (presentation.getPageWidth() - cardDimensions.cardWidth) / 2;
  const y = (presentation.getPageHeight() - cardDimensions.cardHeight) / 2;

  const ruleCard = insertCard(activeSlide, x, y, "#B7590D", "#E46F10", hostRule.front.toUpperCase(), false, 12, WHITE);
  ruleCard.getText().getTextStyle().setItalic(true);
}

function flip() {
  const ui = SlidesApp.getUi();

  const selectedPageElements = SlidesApp.getActivePresentation().getSelection()
    .getPageElementRange()
    .getPageElements();
  
  if (selectedPageElements.length === 0) {
    ui.alert("Please select a rule to flip.")
    return;
  }

  if (selectedPageElements.length > 1) {
    ui.alert("You may select only one page element at a time.")
    return;
  }

  const selectedPageElement = selectedPageElements[0];

  if (selectedPageElement.getPageElementType() !== SlidesApp.PageElementType.SHAPE) {
    ui.alert("The selected page element is not a rule card.");
    return;
  }

  const selectedShape = selectedPageElement.asShape();
  const displayedRule = selectedShape.getText().asString().trim().toUpperCase();

  let flippedRule;
  for (const rule of [...rules, hostRule]) {
    const ruleFront = rule.front.trim().toUpperCase();
    const ruleBack = rule.back.trim().toUpperCase();

    if (ruleFront === displayedRule) {
      flippedRule = ruleBack;
      break;
    } else if (ruleBack === displayedRule) {
      flippedRule = ruleFront;
      break;
    }
  }

  if (flippedRule === undefined) {
    ui.alert("The rule cannot be found. Please flip this rule manually.");
    return;
  }

  selectedShape.getText().setText(flippedRule);
}
