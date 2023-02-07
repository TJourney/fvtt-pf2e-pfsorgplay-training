// early function for rendering the Training Selection
function renderTrainingSelection() {
  return '<section class="school"><label class="details-label">Pathfinder Training</label></section>';
}

// Init Hook
Hooks.once(
  'init',
  async () => {
    console.log('PFS Training | Initializing fvtt-pf2e-pforgplay-training');
});

// renderActorSheet Hook
Hooks.on(
  "renderActorSheet",
  (sheet, html) => {
    console.log("PFS Training | ActorSheet Render Hook");
    let $trainingSelection = renderTrainingSelection();
    html.find('.level-bump').after($trainingSelection);
});
