<template>
  <div class="ExpertiseBox hover:text-myBrown-lightest">
        <h2 class="ExpertiseBoxTitle">
            {{ propsTitle }}
        </h2>
        
        <p v-for="(item,i) in propsText"
        :key="i"
        class="ExpertiseBoxItem"> 
        {{ item }}
        </p>

  </div>
</template>

<script>
export default {
  name: "ExpertiseBox",
  props: {
    propsTitle: String,
    propsText: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">

.ExpertiseBox{
    @apply  bg-myBrown-lightest border border-myBrown-dark  rounded-full
    w-56 h-80 text-center  px-4  mt-20 mr-5 ml-5 sm:ml-0  text-myBrown-dark ;
  }
  .ExpertiseBox:hover{
    transform: translateY(-20px);
    @apply transition ease-linear duration-300 ;
  }

    .ExpertiseBox:last-child{
    @apply  mr-0;
  }

    .ExpertiseBoxTitle{
      @apply mt-8;
    }

  .ExpertiseBoxTitle{
      @apply mt-10 mb-8;
    }

</style>
