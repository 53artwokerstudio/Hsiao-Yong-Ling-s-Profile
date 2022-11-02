<template>
  <div id="app">
    <div class="flex justify-between px-5 bg-myBrown w-full py-4 mb-5 text-white font-bold sm:hidden">
      <div class="text-left">Hsiao Yong Ling's Profile</div>
      <div @click="toggle"><i class="fa-solid fa-bars"></i></div>
    </div> 

    <div id="nav" class="nav hidden sm:flex">
      <router-link to="/">About</router-link> 
      <router-link to="/Experience">Experience</router-link> 
      <router-link to="/Project">Project</router-link>
      <router-link to="/Expertise">Expertise</router-link> 
      <router-link to="/UIUX">UI/UX</router-link> 
    </div>

    <div id="navsm" class="nav nav_sm" :class="open ? 'flex': 'hidden'">
      <router-link to="/">About</router-link> 
      <router-link to="/Experience">Experience</router-link> 
      <router-link to="/Project">Project</router-link>
      <router-link to="/Expertise">Expertise</router-link> 
      <router-link to="/UIUX">UI/UX</router-link> 
    </div>

<div class="box">
          <router-view />
</div>


  </div>
</template>

<script>
export default {
  name: 'app',
  data () { 
    return { 
      index:0,
      open: false,
       }},
  methods:{
    toggle() {
    this.open = !this.open;
    },
  },
  watch: {
  $route(to, from) {
  console.log(to , from);
  this.open = false;
  }},

}
</script>

<style lang="postcss">
body{
  @apply bg-myYellow;
}

#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @apply flex flex-col items-center sm:relative;
}

.nav {@apply flex sm:relative sm:z-auto
             sm:flex-row sm:text-center sm:justify-center sm:overflow-hidden sm:h-24 sm:py-2 sm:mt-0 sm:w-3/5 lg:w-4/5;}
.nav_sm{@apply flex flex-col w-full  mt-14 absolute z-10;}
.nav a{@apply sm:pt-8 sm:pb-36 mr-1 sm:w-32 sm:mt-4 
            text-myBrown font-bold border sm:border-white
            bg-myBrown-light
            sm:rounded-full text-center
            py-4 w-full;}
.nav a:hover{@apply transition ease-in duration-100 text-white bg-myBrown sm:mt-2;}
.nav .router-link-exact-active{@apply  mt-0
text-myBrown-dark  sm:border-myBrown
bg-myBlue pointer-events-none;}


</style>
