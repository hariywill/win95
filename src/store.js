import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vue.store({
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
        
    },
    actions: {}
})