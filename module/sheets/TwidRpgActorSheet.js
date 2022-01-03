export default class TwidRpgActorSheet extends ActorSheet {
    get template() {
        return "systems/twidrpg/templates/sheets/actor-sheet.html";
    }

    getData() {
        const baseData = super.getData();

        return {
            owner: this.actor.isOwner,
            editable: this.isEditable,
            actor: baseData.actor,
            data: baseData.actor.data.data,
            config: CONFIG.twidrpg
        };
    }
}