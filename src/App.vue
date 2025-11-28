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

<!-- <template>
  <div class="container">
    <h1>Conditional Rendering Demo</h1>

    <h3>Score Checking Example</h3>
    <input type="number" v-model="score" placeholder="Enter score" />

    <p v-if="score >= 80">Excellent</p>
    <p v-else-if="score >= 50">Good</p>
    <p v-else>Try Again</p>
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
</style> -->

<!-- <template>
  <div class="container">
    <h1>List Rendering (v-for) Demo</h1>

    <h3>Fruits List:</h3>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ index + 1 }}. {{ fruit }}
      </li>
    </ul>

    <h3>Users List:</h3>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} — {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fruits = ref(["Apple", "Banana", "Mango", "Orange"]);

const users = ref([
  { id: 1, name: "Pooja" },
  { id: 2, name: "Aarav" },
  { id: 3, name: "Kiran" },
]);
</script>

<style>
.container {
  padding: 20px;
  font-family: Arial;
}
</style> -->


<!-- <template>
  <div class="container">
    <h1>Array Change Detection</h1>
    <br>
    <h2>Original Items:</h2>
    <p>{{ items }}</p>
    <br>
    <div style="height: 30px;">
      <button @click="addItem">push()</button>
      <button @click="removeLast">pop()</button>
      <button @click="removeFirst">shift()</button>
      <button @click="addFirst">unshift()</button>
      <button @click="removeFromMiddle">splice()->RevomeInMid</button>
      <button @click="addInMiddle">splice()->AddInMid</button>
      <button @click="sortItems">sort()</button>
      <button @click="reverseItems">reverse()</button>
      <button @click="filterItems">filter()</button>
      <button @click="sliceItems">slice()</button>
      <button @click="concatItems">concat()</button>
    </div>
    <br>
    <br>
    <div>
      <br>
      <h2>Updated Items:</h2>
      <p>{{ items }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { name: "A", price: 50 },
  { name: "B", price: 150 },
  { name: "C", price: 200 }
]);

/* -------------   MUTATION METHODS (Vue Detects Automatically)  ----------------------------- */

// push() Add item at end
const addItem = () => {
  items.value.push({ name: "New Item", price: 120 });
};

// pop() Remove last item
const removeLast = () => {
  items.value.pop();
};

// shift() Remove first item
const removeFirst = () => {
  items.value.shift();
};

// unshift() Add item at start
const addFirst = () => {
  items.value.unshift({ name: "First", price: 300 });
};

// splice() Remove items
const removeFromMiddle = () => {
  items.value.splice(1, 1); // remove 1 item at index 1
};

// splice() Add items
const addInMiddle = () => {
  items.value.splice(1, 0, { name: "X", price: 90 }, { name: "Y", price: 80 });
};

// sort()
const sortItems = () => {
  items.value.sort((a, b) => a.name.localeCompare(b.name));
};

// reverse()
const reverseItems = () => {
  items.value.reverse();
};

/* ----------------------   NON-MUTATION METHODS (Return New Arrays) ----------------------- */

// filter()
const filterItems = () => {
  items.value = items.value.filter(item => item.price > 100);
};

// slice()
const sliceItems = () => {
  items.value = items.value.slice(0, 2);
};

// concat()
const concatItems = () => {
  items.value = items.value.concat([{ name: "Extra", price: 500 }]);
};
</script>

<style>
.container {
  max-width: 600px;
  margin: 20px auto;
}
button {
  margin: 5px;
  padding: 6px 12px;
}
</style> -->


<!-- <template>
  <div class="container">
    <h1>Question & Answer Bot</h1>

    <input 
      v-model="question" 
      type="text" 
      placeholder="Ask your question..."
    />

    <p>{{ question }}</p>

    <p><strong>Answer:</strong> {{ answer }}</p>

    <p v-if="loading">Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      loading: false
    };
  },

  watch: {
    question(newQ, oldQ) {
      console.log("Old:", oldQ, "New:", newQ);

      
      // If question contains “?”, call API
      if (newQ.includes("?")) {
        this.getAnswer();
      }
    }
  },

  methods: {
    async getAnswer() {
      this.loading = true;
      this.answer = "Thinking...";

      try {
        const res = await fetch("https://yesno.wtf/api");
        const data = await res.json();
        this.answer = data.answer;
      } catch (err) {
        this.answer = "Error: " + err;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
}
</style> -->


<!-- <template>
  <div class="container">
    <h1>Vue Instance – data(), methods & Local State</h1>

    <p><strong>Name:</strong> {{ name }}</p>
    <p><strong>Count:</strong> {{ count }}</p>

    
    <button @click="increment">Increment Count</button>
    <button @click="toggleName">Toggle Name</button>

    <p v-if="isVisible">This text is controlled by local state (isVisible)</p>
    <button @click="toggleVisibility">Show/Hide Text</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Pooja",
      count: 0,
      isVisible: true
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    toggleName() {
      this.name = this.name === "Pooja" ? "SuperBotics Intern" : "Pooja";
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px #ccc;
}

button {
  margin-right: 10px;
  padding: 8px 15px;
  border: none;
  background: #42b883;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style> 

 
<script>
export default {
  data() {
    return {
      count: 0
    };
  },

  created() {
    console.log("created() - data is ready:", this.count);
  },

  mounted() {
    console.log("mounted() - component is on screen!");
  },

  updated() {
    console.log("updated() - data changed:", this.count);
  },

  unmounted() {
    console.log("unmounted() - component removed!");
  },

  methods: {
    increment() {
      this.count++;
    }
  }
};
</script> -->



<!----------------- LifeCycle hooks ------------>

<!----------- Created --------->

<!-- <template>
  <h2>created Example</h2>
</template>

<script>
export default {
  data() {
    return { msg: "Vue is created!" };
  },

  created() {
    console.log("created data available:", this.msg);
  }
};
</script> -->


<!---------- mounted -------->

<!-- <template>
  <p id="title">mounted Example</p>
</template>

<script>
export default {
  mounted() {
    console.log("mounted Component added to DOM");
    const el = document.getElementById("title");
    el.style.color = "green";
  }
};
</script> -->

<!-------------- Updated -------------->

<!-- <template>
  <div>
    <h2>updated Example</h2>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },

  updated() {
    console.log("updated DOM re-rendered");
  }
};
</script> -->

<!---------------- Unmounted -------------->
<!-- <template>
  <h2>Unmounted Example</h2>
</template>

<script>
export default {
  unmounted() {
    console.log("unmounted Component removed from DOM");
  }
};
</script> -->
