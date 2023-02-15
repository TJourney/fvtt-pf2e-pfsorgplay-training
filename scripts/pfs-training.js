import { registerTemplates } from "./register-templates.js";

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
    registerTemplates();
  }
);

// Localization Init Hook
Hooks.once(
  "i18nInit",
  async () => {
    log("pfsorgplay-training.logging.message.hook.i18nInit");

    // register settings
    // training selection dropdown
    game.settings.register('pfsorgplay-training', 'trainingSelection', {
      name: game.i18n.localize("pfsorgplay-training.display.selection.label"),
      hint: "write something for here",
      scope: "world",
      config: true,
      type: String,
      choices: {
        "UN": "pfsorgplay-training.display.selection.dropdown.options.default.name",
        "SP": "pfsorgplay-training.display.selection.dropdown.options.spells.name",
        "SC": "pfsorgplay-training.display.selection.dropdown.options.scrolls.name",
        "SW": "pfsorgplay-training.display.selection.dropdown.options.swords.name",
        "GE": "pfsorgplay-training.display.selection.dropdown.options.generalist.name",
        "FC": "pfsorgplay-training.display.selection.dropdown.options.fieldcomission.name"
      },
      default: "UN"
    });

  // end Localization Init
  }
);



// renderActorSheet Hook
Hooks.on(
  "renderActorSheet",
  (sheet, html) => {
    log("pfsorgplay-training.logging.messages.hook.renderActorSheet.init");

    log("pfsorgplay-training.logging.messages.hook.renderActorSheet.prepareInjection");
    const selectionTemplatePath = '/modules/pfsorgplay-training/templates/selection.hbs');
    const selectionInjection    = await renderTemplate(selectionTemplatePath);

    log("pfsorgplay-training.logging.messages.hook.renderActorSheet.findTarget");
    const selectionInjectTarget = $(html).find('.level-bump');

    log("pfsorgplay-training.logging.messages.hook.renderActorSheet.inject");
    selectionInjectTarget.after(selectionInjection);

    log("pfsorgplay-training.logging.messages.hook.renderActorSheet.complete");
  }
);
