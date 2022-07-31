<template>
  <button type="button" @click="onClickAge">Update Age Event</button>
  <button type="button" @click="ageChangeFn(3)" >Update age CB</button>
  <p>The user is {{age}} years old</p>
  <p>{{ageDouble}}</p>
</template>

<script>
export default {
  name: "UserComponent",
  props:{
    age:{
      type: Number,
      // required: true,
      // default:17
      validator(value){
        return value < 130
      }
    },
    ageChangeFn: Function
  },
  emits:['age-change'],
  computed:{
    ageDouble(){
      return this.age * 2
    }
  },
  methods:{
    onClickAge(){
      this.$emit('age-change' ,3)
    }
  }

};
</script>

<style scoped>

</style>