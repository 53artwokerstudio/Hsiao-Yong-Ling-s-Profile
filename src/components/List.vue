<template>
        <div class="ItemSpacing grid grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            <div class="ListImg col-span-3 lg:col-span-1">
                <a :href="ListLink" Target="_blank">
                   <img :src="ListImg" 
                        class="ImgSet"
                        alt="" srcset="">
                </a>
            </div>

            <div class="col-span-3 lg:col-span-2 flex flex-col items-center lg:items-start">
                 
                 <div class="ItemSpacing">
                    <a :href="ListLink" Target="_blank">
                        <h2 class="ListTitle">{{ ListTitle }}</h2>
                    </a>
                <div v-html="ListText"></div>
            </div>

            <a  :href="ListLink"
                Target="_blank"
                class="ViewBTN"> VIEW
            </a>

            </div>
        </div>
</template>

<script>
export default {
  name: "List",
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
.ListImg{
    @apply border border-myBrown rounded-3xl shadow-md overflow-hidden h-60; 
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