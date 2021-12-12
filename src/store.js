import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.store({
    state: {
        // Start Menu
        isShownMenu: false,
        closeMenu: false,
    },
    mutations: {
        //Start Menu
        toggleShownMenu(state, shownBool) {
            state.isShownMenu = shownBool
        },
        toggleCloseMenu(state, closeBool) {
            state.closeMenu = closeBool
        },
    },
    getters: {
        activeWindow: state => {
            return state.activeWindow
        },
    },
    actions: {}
})