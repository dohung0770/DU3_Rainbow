<template>
  <div class="container">
    <Header />
    <!-- <slot name="header">
        <div id="nav" v-if="$store.state.contents.user">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </slot> -->
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style>
</style>