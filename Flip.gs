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