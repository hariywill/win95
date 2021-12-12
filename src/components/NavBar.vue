<template>
    <div class="wrapper">
        <div class="bar-container">
            <div class="start-menu" v-on:click="showMenu">
                <div :class="$store.getters.activeWindow=='Menu' ? 'border' : 'container-border'">
                    <img src="../assets/win95Icons/win95.png" alt="">
                    <div>Start</div>
                </div>
            </div>
            <div class="icon-bar"></div>
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
.border{
    border-style: red;
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