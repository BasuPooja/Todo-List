<template>
  <div>
    <h2>Login Page</h2>

    <button @click="loginUser">
      Login
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    loginUser() {

      localStorage.setItem("token", "abc123");

      this.$router.replace('/dashboard');
    }
  }
};
</script>
