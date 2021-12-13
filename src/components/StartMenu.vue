<template>
    <div class="menu">
        <div class="side">
            <img src="../assets/win95Icons/side-image.png" class="side-image">
        </div>
        <div class="contacts">
            <a href="https://www.instagram.com/chris_bebop/" target="_blank">
                <div class="bar">
                    <img class="social-image" src="../assets/iPhone-Icons/Instagram.webp"/>
                    <u>I</u>nstagram
                </div>
            </a>
            <a href="https://www.facebook.com/chris.pine.75436/" target="_blank">
                <div class="bar">
                    <img class="social-image" src="../assets/iPhone-Icons/Facebook.webp"/>
                    <u>F</u>acebook
                </div>
            </a>
            <a href="https://www.linkedin.com/in/chris-wang-328312227/" target="_blank">
                <div class="bar">
                    <img class="social-image" src="../assets/iPhone-Icons/Linkedin.webp"/>
                    <u>L</u>inkedIn
                </div>
            </a>
            <a href="https://github.com/hariywill" target="_blank">
                <div class="bar">
                    <img class="social-image" src="../assets/iPhone-Icons/Github.webp"/>
                    <u>G</u>itHub
                </div>
            </a>
            <div class="divider"></div>
            <a href="/files/chris_wang_resume.pdf" target="_blank">
                <div class="bar">
                    <img class="social-image" src="../assets/iPhone-Icons/resume.png"/>
                    <u>R</u>ésumé
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.menu {
    width: 165px;
    height: 282px;
    background: black;
    background: rgb(195, 195, 195);
    overflow: hidden;
    border-top: solid rgb(250, 250, 250) 2px;
    border-left: solid rgb(250, 250, 250) 2px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    box-shadow: 1.5px 1.5px black;
    max-height: 100%;
    max-width: 100%;
    align-items: flex-end;
    outline: rgb(222, 222, 222) 1px solid;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    font-size: 12px;
}
.side {
    width: 25px;
    background: rgb(123, 125, 123);
    height: 100%;
    display: flex;
    align-items: flex-end;
}
.side-image {
    width: 100%;
}
.contacts {
    flex-grow: 1;
}
.bar {
    display: flex;
    flex-direction: row;
    padding: 5px 10px 5px 10px;
    align-items: center;
}
.bar:hover {
    background: rgb(0, 0, 118);
    color: white;
}
.social-image {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 6px;
}
.divider {
    width: 100%;
    height: 1px;
    background: rgb(123, 125, 123);
    border-bottom: white solid 1px;
}


</style>