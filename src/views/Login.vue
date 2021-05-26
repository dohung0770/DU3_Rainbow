<template>
  <!-- <div class="container pt-32 bg-gray-300 min-h-screen min-w-full">
    <div
      class="container mx-auto bg-white w-max p-8 rounded-lg shadow-2xl border-l-4 border-blue-900"
    >
      <h1 class="text-blue-800 text-5xl mb-8">Login</h1>
      <form @submit.prevent="onSubmit" class="flex flex-col">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="pass" type="password" placeholder="Password" />
        <input type="submit" value="submit" />
      </form>
    </div>
  </div> -->
  <!-- component -->
  <div
    class="flex flex-col items-center justify-center bg-gray-300 h-screen select-none"
  >
    <div
      class="flex flex-col -mt-32 bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md border-l-4 border-purple-600"
    >
      <div
        class="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-purple-600 shadow-2xl p-6 rounded-full text-white"
      >
        Sign In
      </div>
      <div class="mt-10">
        <form @submit.prevent="onSubmit">
          <div class="relative w-full mb-3">
            <input
              v-model="username"
              type="username"
              name="username"
              class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Username"
              style="transition: all 0.15s ease 0s"
            />
            <!-- <small class="p-2 text-red-500">* Email</small> -->
          </div>
          <div class="relative w-full mb-3">
            <input
              v-model="pass"
              type="password"
              name="password"
              class="border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              placeholder="Password"
              style="transition: all 0.15s ease 0s"
            />
            <!-- <small class="p-2 text-red-500">* Password</small> -->
          </div>
          <div class="text-center mt-6">
            <input
              type="submit"
              name="signin"
              id="signin"
              value="Sign In"
              class="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500"
            />
          </div>
          <div class="flex flex-wrap mt-6">
            <div class="w-1/2 text-left">
              <a href="#" class="text-blue-900 text-xl"
                ><small>Forgot password?</small></a
              >
            </div>
            <div class="w-1/2 text-right">
              <a href="#" class="text-blue-900 text-xl"
                ><small>Sign In</small></a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
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
