// early function for rendering the Training Selection
function renderTrainingSelection() {
  return '<section class="school"><label class="details-label">' + game.i18n.localize("pfsorgplay-training.display.selection.label") + '</label></section>';
}

function log(message) {
  console.log(game.i18n.localize("pfsorgplay-training.logging.prefix") + game.i18n.localize("pfsorgplay-training.logging.delimiter") + game.i18n.localize(message))
}

// Init Hook
Hooks.once(
  "init",
  async () => {
    console.log('DEBUG: init pf2e-pforgplay-training');
});

// Localization Init Hook
Hooks.once(
  "i18nInit",
  async () => {
    log("pfsorgplay-training.logging.message.hook.i18nInit");
});

// renderActorSheet Hook
Hooks.on(
  "renderActorSheet",
  (sheet, html) => {
    log("pfsorgplay-training.logging.messages.hook.renderActorSheet");
    html.find('.level-bump').after(renderTrainingSelection());
});
