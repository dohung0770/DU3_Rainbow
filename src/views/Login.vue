<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="pass" type="password" placeholder="Password" />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
import { fakeLogin } from "../helper/funtionUnity";
// import router from "../router";

export default {
  data() {
    return {
      username: "",
      pass: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("updateUser", {
        user: fakeLogin(this.username, this.pass),
      });
      // router.push("/");
      this.$router.push("/");
    },
  },
};
</script>
