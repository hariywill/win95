<template>
    <div class="wrapper">
        <div class="bar-container">
            <div class="start-menu" v-on:click="showMenu">
                <div >
                    <img src="../assets/win95Icons/win95.png" class="start-icon">
                    <div>Start</div>
                </div>
            </div>
            <div class="icon-bar">
                <div >
                    <img src="../assets/win95Icons/bio.png" alt="Bio" class="icon-image">
                    Biography
                </div>
                <div >
                    <img src="../assets/win95Icons/resume.png" alt="Bio" class="icon-image">
                    Resume
                </div>
                <div >
                    <img src="../assets/win95Icons/photos.png" alt="Bio" class="icon-image">
                    Photos
                </div>
                <div >
                    <img src="../assets/win95Icons/eco.webp" alt="Bio" class="icon-image">
                    Eco Guide
                </div>
                <div >
                    <img src="../assets/win95Icons/mail.png" alt="Bio" class="icon-image">
                    Mail
                </div>
            </div>
            <div class="time">
                <img src="../assets/win95Icons/speakers.png" class="icon-image">
                <span>{{this.time}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default ({
    props: {
        
    },
    data() {
        return {
            time: '',
            date: ''
        }
    },
    beforeMount() {
        setInterval(() => {
            this.time = moment().format('h:mm:ss A')
        }, 1000);
    },
    methods: {
        toogleShow() {},
        showMenu() {
            console.log("SHow menu!");
        },
    },
})
</script>


<style scoped>

.wrapper {
    border-style: dashed;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    width: 100%;
}
.bar-container {
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    background: rgb(192, 192, 192);
    border-top: solid rgb(250, 250, 250) 2px;
}
.start-icon {
    width: 18px;
    height: 18px;
}
.start-menu {
    width: 65px;
    margin: 5px;
    height: 23px;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    align-items: center;
}
.icon-bar {
    border-style: dashed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
}


.time {
    width: 75px;
    margin: 5px;
    height: 25px;
    background: rgb(192, 192, 192);
    border-right: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-top: solid rgb(90, 90, 90) 1.5px;
    border-left: solid rgb(90, 90, 90) 1.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-size: 0.6em;
}
</style>