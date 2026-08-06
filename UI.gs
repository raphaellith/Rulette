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