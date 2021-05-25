<template>
  <div class="container">
    <header>
      <slot name="header">
        <div id="nav" v-if="$store.state.contents.user">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </slot>
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>