<template>
        <div class="flex flex-col transform hover:scale-105 duration-500 ease-in-out
        group">
            <div class="CardImg mb-4">
                <a :href="ListLink" Target="_blank">
                   <img :src="ListImg" 
                        class="ImgSet"
                        alt="" srcset="">
                </a>

            </div>

            <a :href="ListLink" Target="_blank" class="text-center">
                <h2 class="group-hover:text-myBrown transition" v-html="ListTitle"></h2>
            </a>
        </div>
</template>

<script>
export default {
  name: "Card",
  props:{ 
    ListTitle : String,
    ListImg : String,
    ListLink : String,
    ListText : String,
   },
};
</script>

<style lang="postcss">
.ListTitle:hover{
  @apply text-myBrown transition;
}
.CardImg{
    @apply border border-myBrown rounded-3xl shadow-md overflow-hidden h-48 ; 
}
.ListImg:hover{
    @apply shadow-lg transition; 
}
.ImgSet{
    @apply object-cover overflow-hidden w-full h-full; 
}

.ViewBTN{
    @apply bg-myBrown-light border border-myBrown shadow-md py-2 px-16 rounded-full;
}
.ViewBTN:hover{
    @apply text-myBrown-light bg-myBrown border border-myBrown-light transition ;
}

</style>