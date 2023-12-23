<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from 'vue';
const data = ref(null);

const fetchData = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const result= await response.json();
  console.log(result);
  data.value = result;
};
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">
      <div v-for="result in data.results" :key="result in data.results">
        <p>{{result.email}}</p>
        <img :src="result.picture.thumbnail" alt="user pic">
      </div>
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
