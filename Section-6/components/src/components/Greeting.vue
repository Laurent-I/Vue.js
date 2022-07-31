<template>
  <p v-if="age > 17">{{msg}}</p>
  <p v-else>You must be 17 years older to view this message mate!!!</p>
</template>

<script>
export default {
  name: "GreetingComponent",
  props:['age'],
  data(){
    return{
      msg: "Hello World!",
    }
  }
};
</script>

<style scoped>
p{
  color: red;
}
</style>
