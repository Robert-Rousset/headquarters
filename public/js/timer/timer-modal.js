export default {
    init() {
        document.querySelector("#timer-settings-modal-background").onclick = _ => this.hide();
        document.querySelector("#timer-settings-modal-delete").onclick = _ => this.hide();
        document.querySelector("#timer-settings-confirm-button").onclick = _ => this.hide();
    },

    hide() {
        document.querySelector("#timer-settings-modal").classList.remove("is-active");
    }
};

