<template>
    <div class="desktop">
        <button class="app" v-on:dblclick="openBio" v-touch:tap="openBio">
            <img src="../assets/win95Icons/bio.png" class="icon" />
            <div class="border">
                <div>Biography</div>
            </div>
        </button>
        <button class="app" v-touch:tap="openResume" v-on:dblclick="openResume">
            <img class="icon app-github" src="../assets/iPhone-Icons/resume.png"/>
            <div class="border">
                <div class="icon-text">Résumé</div>
            </div> 
        </button>
        <button class="app" v-touch:tap="openPhotos" v-on:dblclick="openPhotos">
            <img class="icon app-photos" src="../assets/win95Icons/photos.png"/>
            <div class="border">
                <div class="icon-text">Photos</div>
            </div>
        </button>
        <button class="app" v-touch:tap="openEco" v-on:dblclick="openEco">
            <img class="icon app-eco" src="../assets/win95Icons/eco.webp"/>
            <div class="border">
                <div class="icon-text">EcoGuide</div>
            </div>
        </button>
        <button class="app" v-touch:tap="openMail" v-on:dblclick="openMail">
            <img class="icon app-mail" src="../assets/win95Icons/mail.png"/>
            <div class="border">
                <div class="icon-text">Mail</div>
            </div>  
        </button>
        <button class="app">
            <a href="https://github.com/hariywill" target="_blank">
            <img class="icon app-github" src="../assets/win95Icons/Github.webp"/>
            <div class="border">
                <div class="icon-text">GitHub</div>
            </div> 
            </a> 
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            openBio() {
                this.$store.commit('toggleShownBio', true)
                console.log(this.$store.getters.isShownBio)
            },
            openResume() {
                this.$store.commit('toggleShownRes', true)
                console.log(this.$store.getters.isShownRes)
            },
            openPho() {
                this.$store.commit('toggleShownPho', true)
                console.log(this.$store.getters.isShownPho)
            },
            openEco() {
                this.$store.commit('toggleShownEco', true)
                console.log(this.$store.getters.isShownEco)
            },
            openMail() {
                this.$store.commit('toggleShownMail', true)
                console.log(this.$store.getters.isShownMail)
            },
        },
    }
</script>

<style scoped>
.desktop {
    display: grid;
    grid-gap: 20px;
    margin-left: 20px;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
}
button {
    background: none;
	color: inherit;
	border: none;
	font: inherit;
	outline: inherit;
}
.app {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    color: white;
    padding: 10px;
}
.icon {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
}
a {
    color: white;
    text-decoration: none;
}
.app:focus .border {
    border: rgb(255, 255, 148) dotted 1px;
}
.app:focus .icon{
    filter: grayscale(100%) brightness(30%) sepia(100%) hue-rotate(-180deg) saturate(400%) contrast(0.9);
}
.app:focus .icon-text{
    background: rgb(0, 0, 118);
}
</style>