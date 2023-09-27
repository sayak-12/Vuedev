<template>
  <!-- <h1>Welcome to my first Vue App</h1> -->
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">Click me</button>
    <div class="modalholder" v-if="showModal">
      <Modal :header="['My name is Sayak Raha', 'This is the description']" theme="sale" @close="toggleModal"/>
    </div>
    <button @click="toggleModal">Click here</button>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Modal from "../components/modal"
export default {
  name: "HomeView",
  components: {
    Modal
  },
  data() {
    return {
      title: "Welcome to my first Vue App",
      showModal :false,
    };
  },
  methods: {
    handleClick(){
      // console.log(this.$refs.name);
      // this.$refs.name.classList.add("vue");
      console.log("button clicked");
    },
    toggleModal(){
      this.showModal = !this.showModal;
    }
  },
};
</script>
<style scoped>
  .vue{
    background: #000;
    color: white;
  }
</style>
