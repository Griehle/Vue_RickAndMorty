<template>
    <div id="app">
      <Header />
      <main id="main">
        <router-view />
      </main>
      <Footer />
    </div>
</template>

<script>
import Header from './components/Headers.vue'
import Footer from './components/Footer.vue'
import './assets/styles.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
button{
    background-color: #12EE6D;
    font-size: 11pt;
    color: red;
    margin-bottom: 10px;
}
</style>
