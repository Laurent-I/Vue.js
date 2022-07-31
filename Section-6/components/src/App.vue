<template>
<greeting :age="age"></greeting>
  <p>Damn Bro</p>
  <user :age="age" @age-change="updateAge" :ageChangeFn='updateAgeCB'></user>
</template>

<script>
import Greeting from "@/components/Greeting";
import User from "@/components/User";
export default {
  name:"App",
  components:{
    Greeting,
    User
  },
  data(){
    return {
      age: 10
    }
  },
  methods:{
    updateAge(num){
      this.age += num
    },
    updateAgeCB(num){
      this.age += num
    }
  }
}

</script>




