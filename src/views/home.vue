<template>
  <div>
    <h2>Home Page</h2>

    <button @click="goToUsers">Go to User Details (ID: 101)</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToUsers() {
      // Programmatic Navigation
      this.$router.push('/user/101');
    }
  }
};
</script>
