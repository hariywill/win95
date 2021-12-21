<template>
    <interact draggable :dragOption="dragOption" class="resize-drag" resizable :resizeOption="resizeOption" :style="style" @dragmove="dragmove" @resizemove="resizemove" :class="{fullscreen: $store.getters.isBioFullscreen}">
        <div class="window" id="container" :class="{fullscreen: $store.getters.isBioFullscreen, close: !$store.getters.isShownBio}">
            <div class="top-bar" id="top-bar" v-on:dblclick="$store.commit(toggleShownBio('isBioFullscreen', true))" :class="$store.getters.activeWindow=='Bio' ? 'top-bar' : 'top-bar-unfocused'">
                <div style="color: white; margin-left: 3px; display: flex; align-items: center;"><img class="icon-image" src="../assets/win95Icons/bio.png" alt="" />Welcome</div>
                <div class="buttons">
                    <div class="button-hide" v-on:click="hideBio" ><span class="hide"></span></div>
                    <div class="button-expand" v-on:click="$store.commit(toggleShownBio('isBioFullscreen', true))" style=""><span class="expand"></span></div>
                    <div class="button-close" v-on:click="closeBio">×</div>
                </div>
            </div>
            <div class="content">
                <div class="scroll-container" :class="{ expandedScrollContainer: $store.getters.isFullscreenBio }">
                    <img class="self" src="../assets/Biography/self.webp" />
                    <div class="header">Chris W (王昴)</div>
                    <div class="subtitle">Web Developer | UI/UX Designer </div>
                    <div class="subtitle">Brisbane 📍</div>
                    <div class="badge-grid">
                        <img class="badge" alt="JavaScript" src="https://img.shields.io/badge/-Javascript-yellow" />
                        <img class="badge" alt="HTML/CSS" src="https://img.shields.io/badge/-HTML%2FCSS-yellowgreen" />
                        <img class="badge" alt="Node" src="https://img.shields.io/badge/-Node-lightgrey" />
                        <img class="badge" alt="React" src="https://img.shields.io/badge/-ReactJS-3e8bc3" />
                        <img class="badge" alt="Vue" src="https://img.shields.io/badge/-VueJS-61b083" />
                        <img class="badge" alt="MUI" src="https://img.shields.io/badge/-MUI-blue" />
                        <img class="badge" alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-4ca158" />
                        <img class="badge" alt="AWS" src="https://img.shields.io/badge/-AWS-64a2c9" />
                        <img class="badge" alt="Adobe XD" src="https://img.shields.io/badge/-Adobe XD-8c5aee" />
                    </div>
                        <div class="inner-content">
                            <div class="heading"><b>About Me</b></div>
                            <div class="paragraph">Hello there! I am Chris from China and I am an 25 year old student who's extremely passionate in both programming and design for the web. I am currently still international student studying in Brisbane at QUT</div>
                            <div class="paragraph">I have worked with a mixture of design and frontend/backend technologies, be it for Web Development.</div>
                        </div>
                        <div class="inner-content">
                            <div class="heading"><b>Eco Guide</b></div>
                            <div class="paragraph">ECO GUIDE is a habit building tool for Individuals who lead busy lives are looking to live more sustainably but can come up against a range of challenges when trying to create long-term sustainable living habits.</div>
                            <div class="paragraph">Through research and feedback from target users, the lived experiences and challenges they have faced during their sustainability journey can be analysed to improve the EcoGuide application. Our goal is to create platform that will help users reach their sustainability goals.</div>
                            <div class="paragraph">The scope of our design objective is find solutions that support individuals in their habit-building process and propose solutions that address these key areas. We are looking to innovate and design features as well as build on the elements of the Eco-Guide mobile application.</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Internships</b></div>
                            <div class="paragraph">I have had one internship opportunities so far. The internship was working with a professor at college providing solutions for visualized algorithms and websites development. </div>
                            <div class="paragraph">Throughout the internships I worked with a mixture of mobile and Web Technologies. Echart was used in my internship and Vuejs with Bootstrap was used in my second internship.</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Web Developer</b></div>
                            <div class="paragraph">As a web developer, I have also had a lot of chances to practice and participate in projects to further hone my skills. I have some experience with backend (Node) as well as databases using MongoDB and Redis solutions. But most of my time is dedicated to frontend development using Reactjs, Vuejs and elaborate styling of websites (such as this one 😁).</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>UI/UX Designer</b></div>
                            <div class="paragraph">Fullstack development is very sought after nowadays and I have made sure to keep up with such trends by honing my skills in UI/UX design as well. I am thankful for the various opportunities I have had to work alongside industry expert and have also taken the chance to learn and hone my UI/UX design skills with tools such as Figma.</div>
                        </div>

                        <div class="inner-content">
                            <div class="heading"><b>Résumé</b></div>
                            <a style="color: #FF5733;" href="/files/resume.pdf" class="paragraph">Check out my résumé here.</a>
                        </div>                
                </div>
            </div>
        </div>
    </interact>
</template>

<script>
    /* eslint-disable */
    import interact from "interactjs";
    export default {
    data: () => {
        return {
            resizeOption: {
                edges: { top: true, left: true, bottom: true, right: true },

            },
            positions: {
                clientX: undefined,
                clientY: undefined,
                movementX: 0,
                movementY: 0
            },
            dragOption: {
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: "parent",
                        endOnly: true
                    })
                ],
                allowFrom: '.top-bar',
            },

            // values for interact.js transformation
            x: 0,
            y: 0,

        }
    },
    computed: {
        style() {
            return {
                height: `${this.h}px`,
                width: `${this.w}px`,
                transform: `translate(${this.x}px, ${this.y}px)`,
                '--fullscreen': window.innerHeight - 40 + "px"
            };
        }
    },
    methods: {
        showPhotos(e) {
            e.stopPropagation()
            this.$store.commit('changeActiveWindow', 'Photos')
            this.$store.commit('toggleShownPhotos', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'photos')
            }, 1);
        },
        showColorization(e) {
          e.stopPropagation()
          this.$store.commit('changeActiveWindow', 'Colorization')
          this.$store.commit('toggleShownColorization', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'colorization')
            }, 1);
        },
        showNossaflex(e) {
            e.stopPropagation()
            this.$store.commit('changeActiveWindow', 'NOSSAFLEX')
            this.$store.commit('toggleShownNossaflex', true)
            setTimeout(() => {  
                this.$store.commit('zIndexIncrement', 'noss')
            }, 1);
        },
        dragmove(event) {
            this.x += event.dx;
            this.y += event.dy;
            this.$store.commit('zIndexIncrement', 'bio')
        },
        resizemove(event) {
            this.w = event.rect.width;
            this.h = event.rect.height;

            this.x += event.deltaRect.left;
            this.y += event.deltaRect.top;
        },
        dragMouseDown: function(event) {
            event.preventDefault()
            // get the mouse cursor position at startup:
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            document.onmousemove = this.elementDrag
            document.onmouseup = this.closeDragElement
        },
        elementDrag: function(event) {
            event.preventDefault()
            this.positions.movementX = this.positions.clientX - event.clientX
            this.positions.movementY = this.positions.clientY - event.clientY
            this.positions.clientX = event.clientX
            this.positions.clientY = event.clientY
            // set the element's new position:
            this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
            this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
        },
        closeDragElement() {
            document.onmouseup = null
            document.onmousemove = null
        },
        minimizeBio(e) {
            e.stopPropagation()
            this.$store.commit('toggleShownBio', false)
            this.$store.commit('changeActiveWindow', 'Finder')
        },
        closeBio(e) {
            e.stopPropagation()
            this.$store.commit('toggleCloseBio', false)
            this.$store.commit('toggleShownBio', false)
        }
    },
    mounted: () => {
        // Query the element
        const ele = document.getElementById('container');

        // The current position of mouse
        let x = 0;
        let y = 0;

        // The dimension of the element
        let w = 0;
        let h = 0;

        const mouseDownHandlerRight = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerRight);
            document.addEventListener('mouseup', mouseUpHandlerRight);
        }

        const mouseDownHandlerLeft = function(e) {
            x = e.clientX;

            const styles = window.getComputedStyle(ele)
            w = parseInt(styles.width, 10);

            document.addEventListener('mousemove', mouseMoveHandlerLeft);
            document.addEventListener('mouseup', mouseUpHandlerLeft);
        }

        const mouseDownHandlerUp = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerUp);
            document.addEventListener('mouseup', mouseUpHandlerUp);
        }

        const mouseDownHandlerDown = function(e) {
            y = e.clientY;

            const styles = window.getComputedStyle(ele)
            h = parseInt(styles.height, 10);

            document.addEventListener('mousemove', mouseMoveHandlerDown);
            document.addEventListener('mouseup', mouseUpHandlerDown);
        }

        const mouseMoveHandlerUp = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h - dy}px`;
        };

        const mouseMoveHandlerDown = function(e) {
            // How far the mouse has been moved
            const dy = e.clientY - y;

            // Adjust the dimension of element
            ele.style.height = `${h + dy}px`;
        };

        const mouseMoveHandlerRight = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w + dx}px`;
        };

        const mouseMoveHandlerLeft = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - x;

            // Adjust the dimension of element
            ele.style.width = `${w - dx}px`;
        };

        const mouseUpHandlerUp = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerUp);
            document.removeEventListener('mouseup', mouseUpHandlerUp);
        };

        const mouseUpHandlerDown = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerDown);
            document.removeEventListener('mouseup', mouseUpHandlerDown);
        };

        const mouseUpHandlerRight = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerRight);
            document.removeEventListener('mouseup', mouseUpHandlerRight);
        };

        const mouseUpHandlerLeft = function() {
            // Remove the handlers of `mousemove` and `mouseup`
            document.removeEventListener('mousemove', mouseMoveHandlerLeft);
            document.removeEventListener('mouseup', mouseUpHandlerLeft);
        };
        // Query all resizers
        const resizersRight = ele.querySelectorAll('.resizer-r');
        const resizersUp = ele.querySelectorAll('.resizer-t');
        const resizersDown = ele.querySelectorAll('.resizer-b');
        const resizersLeft = ele.querySelectorAll('.resizer-l');

        [].forEach.call(resizersRight, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerRight);
        });

        [].forEach.call(resizersUp, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerUp);
        });

        [].forEach.call(resizersDown, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerDown);
        });

        [].forEach.call(resizersLeft, function(resizer) {
            resizer.addEventListener('mousedown', mouseDownHandlerLeft);
        });
    }
}
</script>

<style scoped>
.resize-drag {
    box-sizing: border-box;
    background: none;
    width: 500px;
    border-color: black;
    margin: 5px;
    padding: 5px;
    /* To prevent interact.js warnings */
    user-select: none;
    -ms-touch-action: none;
    touch-action: none;
}
.window {
    min-height: 500px;
    min-width: 350px;
    height: 500px;
    width: 600px;
    background: rgb(195, 195, 195);
    overflow: hidden;
    border-top: solid white 2px;
    border-left: solid white 2px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    box-shadow: 1.5px 1.5px black;
    max-height: 100%;
    max-width: 100%;
    align-items: flex-end;
    outline: rgb(222, 222, 222) 1px solid;
}
.top-bar {
    display: flex;
    height: 25px;
    width: auto;
    background: rgb(0, 0, 118);
    z-index: 10;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 2px;
}
.top-bar-unfocused {
    background: grey;
}
.icon-image {
    /* width: 50px;
    height: 50px; */
}
.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.button-hide, .button-expand, .button-close {
    background: rgb(195, 195, 195);
    border-top: solid rgb(250, 250, 250) 1px;
    border-left: solid rgb(250, 250, 250) 1px;
    border-right: solid rgb(90, 90, 90) 1px;
    border-bottom: solid rgb(90, 90, 90) 1px;
    box-shadow: 1px 1px black;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin-left: 2px;
}
.button-hide:hover, .button-expand:hover, .button-close:hover {
    cursor: pointer;
}
.button-hide:active, .button-expand:active, .button-close:active {}
.hide {
    height: 2px;
    width: 6px;
    background: black;
    margin-top: 8px;
    /* margin-right: 2px; */
    /* border-bottom: black 1px solid; */
}
.expand {
    height: 8px; 
    width: 9px; 
    border-right: black 1px solid; 
    border-left: black 1px solid; 
    border-bottom: black 1px solid; 
    border-top: black 2px solid;
}
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
.scroll-container {
    overflow: scroll;
    padding-right: 50px;
    padding-left: 50px;
    padding-top: 20px;
}
.self {
    width: 100%;
    height: auto;
}

</style>