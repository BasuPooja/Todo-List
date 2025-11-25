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

<!-- <template>
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
</style> -->


<!-- <template>
  <div>
    <h2>Attribute Binding</h2>
  </div>
</template> -->



<!-- <template>
  <div class="box">
    <h2>Event Binding (v-on / @) </h2>

    
    <button @click="increment">Count: {{ count }}</button>

    <br /><br />

    
    <input
      type="text"
      placeholder="Type something"
      @input="updateMessage($event)"
    />
    <p>Typed: {{ message }}</p>

    <br />

    
    <input
      type="text"
      placeholder="Press Enter"
      @keyup.enter="enterPressed"
    />
    <p>{{ enterMsg }}</p>

    <br />

    
    <h3 @mouseover="hoverMsg = 'You hovered the text!'">
      Hover over this text
    </h3>
    <p>{{ hoverMsg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: "",
      enterMsg: "",
      hoverMsg: ""
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    updateMessage(e) {
      this.message = e.target.value;
    },
    enterPressed() {
      this.enterMsg = "Enter key pressed!";
    }
  }
};
</script>

<style>
.box {
  width: 350px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: Arial;
}
button {
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
}
input {
  padding: 6px;
  width: 90%;
}
</style> -->


<template>
  <div class="container">
    <h1>Conditional Rendering Demo</h1>

    <button @click="isLoggedIn = !isLoggedIn">
      Toggle Login
    </button>

    <p v-if="isLoggedIn">Welcome, you are logged in! ✔</p>
    <p v-else>You are logged out. ❌</p>

    <br />

    <h3>Score Checking Example</h3>
    <input type="number" v-model="score" placeholder="Enter score" />

    <p v-if="score >= 80">Excellent 🎉</p>
    <p v-else-if="score >= 50">Good 🙂</p>
    <p v-else>Try Again 😔</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoggedIn = ref(false);
const score = ref(0);
</script>

<style>
.container {
  padding: 20px;
  font-family: Arial;
}
button {
  padding: 8px 12px;
  margin-bottom: 10px;
}
input {
  padding: 6px;
  margin-top: 10px;
}
</style>
