<!-- <template>
  <div>
    <h3>Child Component</h3>
    <!-- <p>Name from parent: {{ message }}</p>
    <p>id from parent: {{ count }}</p> 
    <p> Array from parent: </p>
    <p  v-for="(value,index) in  comment_ids" :key="index">
      <p v-if="index==1">{{ value}}</p> 
    </p>

    <!-- <p v-show="false"> v-show</p>
    <p v-if="false"> v-if </p> 

  </div>
</template>

<script>
// export default {
//   data(){
//     return{
//       :props{
//         id: 10,
//         name: "Pooja"
//       }
//     }
//   }
// };

export default {
  props: {
    message: String,
    count: Number,
    comment_ids: Array,
  }
};


</script> -->

<!-- emit  -->

<template>
  <div>
    <button @click="sendToParent">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendToParent() {
      this.$emit("send-message", "Hello Parent! This is Child.");
    }
  }
};
</script>

