import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({ //Vuex.Store with a capital S not Vuex.store
    state: {
        // Active window 
        activeWindow: 'Bio',
        // Start Menu
        isShownMenu: false,
        closeMenu: false,
    },
    mutations: {
        //Active Window
        updateActiveWindow(state, window) {
            state.activeWindow = window
        },
        //Start Menu
        toggleShownMenu(state, shownBool) {
            state.isShownMenu = shownBool
        },
        toggleCloseMenu(state, closeBool) {
            state.closeMenu = closeBool
        },
    },
    getters: {
        activeWindow: state => state.activeWindow,
        isShownMenu: state => state.isShownMenu,
    },
    actions: {}
})