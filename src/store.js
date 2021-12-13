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
        //Bio 
        isShownBio: false,
        closeBio: false,
        isBioFullscreen: false,
        //Res
        isShownRes: false,
        closeRes: false,
        isResFullscreen: false,
        //Pho
        isShownPho: false,
        closePho: false,
        isPhoFullscreen: false,
        //Eco
        isShownEco: false,
        closeEco: false,
        isEcoFullscreen: false,
        //Mail
        isShownMail: false,
        closeMail: false,
        isMailFullscreen: false,
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
        //Bio
        toggleShownBio(state, shownBool) {
            state.isShownBio = shownBool
        },
        toggleCloseBio(state, closeBool) {
            state.closeBio = closeBool
        },
        toggleFullscreenBio(state) {
            state.isFullscreenBio = !state.isFullscreenBio
        },
        //Res
        toggleShownRes(state, shownBool) {
            state.isShownRes = shownBool
        },
        toggleCloseRes(state, closeBool) {
            state.closeRes = closeBool
        },
        toggleFullscreenRes(state) {
            state.isFullscreenRes = !state.isFullscreenRes
        },
        //Pho
        toggleShownPho(state, shownBool) {
            state.isShownPho = shownBool
        },
        toggleClosePho(state, closeBool) {
            state.closePho = closeBool
        },
        toggleFullscreenPho(state) {
            state.isFullscreenPho = !state.isFullscreenPho
        },
        //Eco
        toggleShownEco(state, shownBool) {
            state.isShownEco = shownBool
        },
        toggleCloseEco(state, closeBool) {
            state.closeEco = closeBool
        },
        toggleFullscreenEco(state) {
            state.isFullscreenEco = !state.isFullscreenEco
        },
        //Mail
        toggleShownMail(state, shownBool) {
            state.isShownMail = shownBool
        },
        toggleCloseMail(state, closeBool) {
            state.closeMail = closeBool
        },
        toggleFullscreenMail(state) {
            state.isFullscreenMail = !state.isFullscreenMail
        },
    },
    getters: {
        activeWindow: state => state.activeWindow,
        isShownMenu: state => state.isShownMenu,
        isShownBio: state => state.isShownBio,
        isShownRes: state => state.isShownRes,
        isShownPho: state => state.isShownPho,
        isShownEco: state => state.isShownEco,
        isShownMail: state => state.isShownMail,
    },
    actions: {}
})