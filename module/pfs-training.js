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
    console.log('PFS Training | Initializing fvtt-pf2e-pforgplay-training');
    log("pfsorgplay-training.logging.messages.hook.init");
});

// renderActorSheet Hook
Hooks.on(
  "renderActorSheet",
  (sheet, html) => {
    console.log("PFS Training | ActorSheet Render Hook");
    log("pfsorgplay-training.logging.messages.hook.renderActorSheet");
    let $trainingSelection = renderTrainingSelection();
    html.find('.level-bump').after($trainingSelection);
});
