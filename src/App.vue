<template>
    <div id="app">
      <div id="screen" class="screen" style="position: relative; z-index: 100;" v-on:click="resetWindow">
        <desktop style="position: absolute;" />
        <startMenu v-if="$store.getters.activeWindow=='Menu'"  />
      </div>
      
      <navBar/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import StartMenu from './components/StartMenu.vue'
import Desktop from './components/Desktop.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    StartMenu,
    Desktop
},
  methods: {
    resetWindow() {
      console.log('Reset Menu');
      this.$store.commit('updateActiveWindow', '')
      this.$store.commit('toggleShownMenu', false)
    }
  },
  computed: {},
  mounted() {
    
  },
}
</script>

<style>
#app {
    font-family: 'MS Sans Serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    flex-direction: column;
    overflow: hidden;
}
body {
  margin: 0;
    padding: 0;
    overflow: hidden;
    background: #018281;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
