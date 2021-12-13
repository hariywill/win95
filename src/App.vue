<template>
    <div id="app">
      <div id="screen" class="screen" v-on:click="resetWindow">
        <startMenu v-if="$store.getters.activeWindow=='Menu'"  />
      </div>
      
      <navBar/>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import StartMenu from './components/StartMenu.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    StartMenu,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
