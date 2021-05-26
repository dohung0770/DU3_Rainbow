<template>
  <div id="app">
    <MainLayout v-if="$store.state.contents.user">
      <template v-slot:main>
        <router-view />
      </template>
    </MainLayout>
    <template v-else><router-view /></template>
  </div>
</template>

<script>
import MainLayout from "./layout/MainLayout";

export default {
  components: {
    MainLayout,
  },
};
</script>


<style>
/* // #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;
// }

// #nav a {
//   font-weight: bold;
//   color: #2c3e50;
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }
// */
</style>
