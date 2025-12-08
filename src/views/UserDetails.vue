<template>
  <div>
    <h2>User Details Page</h2>
    <p>User ID from URL: <strong>{{ id }}</strong></p>

    <button @click="addUser">Add User</button>
    <p>{{ user?.name }}</p>

    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  props: ['id'],

  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>
