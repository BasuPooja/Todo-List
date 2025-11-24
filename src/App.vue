<!-- <template>
  <div>
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script> -->

<style>
button {
  padding: 10px;
  font-size: 18px;
}
</style>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

