<template>
<!--  <AppForm>-->
<!--      <template v-slot:help>-->
<!--        <p>{{help}}</p>-->
<!--      </template>-->
<!--      <template v-slot:fields>-->
<!--        <input type="text" placeholder="Email">-->
<!--        <input type="text" placeholder="UserName">-->
<!--        <input type="password" placeholder="password">-->
<!--      </template>-->
<!--      <template v-slot:buttons>-->
<!--        <button type="submit">Submit</button>-->
<!--      </template>-->
<!--  </AppForm>-->
<!--  <p>Dummy Text</p>-->
<!--  <AppForm>-->
<!--    <template v-slot:help>-->
<!--      <p> Contact help text</p>-->
<!--    </template>-->
<!--    <template v-slot:fields>-->
<!--      <input type="text" placeholder="Email">-->
<!--      <input type="text" placeholder="message">-->
<!--    </template>-->
<!--    <template v-slot:buttons>-->
<!--      <button type="submit">Submit</button>-->
<!--    </template>-->
<!--  </AppForm>-->

  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>

</template>

<script>
// import AppForm from './components/Form'
import Home from "./components/Home";
import About from "./components/About";
export default {
  name: 'App',
  components:{
    Home,
    About
    // AppForm
  },
  data(){
    return {
      // help: 'This is some help text.'
      componentName: 'Home'
    }
  }
}
</script>

