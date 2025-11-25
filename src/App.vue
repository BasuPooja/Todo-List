<!-- <template>
  <div>
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script> -->

<!-- <style>
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
</template> -->

<template>
  <div class="card">
    <h2>Text Interpolation</h2>

    <p>Message: <strong>{{ message }}</strong></p>
    <p>Expression example: <strong>{{ count + 1 }}</strong></p>

    <button style="height: 30px; " @click="count++">
      Increment (count is {{ count }})
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Pooja, Vue is working!",
      count: 0
    };
  }
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 30px auto;
  width: 400px;
  border-radius: 8px;
  font-family: Arial;
}
</style>


