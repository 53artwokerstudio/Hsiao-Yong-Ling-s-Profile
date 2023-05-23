<template>
        <div class="flex flex-col group">
            <div class="CardImg mb-4">
                <a :href="ListLink.UI" Target="_blank">
                   <img :src="ListImg" 
                        class="ImgSet"
                        alt="" srcset="">
                </a>

            </div>

            <ul class="CardListLink flex justify-center">
                <li v-if="ListIcon.UI">
                    <a :href="ListLink.UI" Target="_blank">
                        <i class="fa-brands fa-figma"></i>
                    </a>
                </li>
                <li  v-if="ListIcon.WebPrototype">
                    <a :href="ListLink.WebPrototype" Target="_blank">
                        <i class="fa-solid fa-laptop"></i>
                    </a>
                </li>
                <li  v-if="ListIcon.MobilePrototype">
                    <a :href="ListLink.MobilePrototype" Target="_blank">
                        <i class="fa-solid fa-mobile"></i>
                    </a>
                </li>
                <li v-if="ListIcon.Web">
                    <a :href="ListLink.Web" Target="_blank">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </li>

            </ul>

            <a :href="ListLink.UI" Target="_blank" class="text-center">
                <h2 v-html="ListTitle"></h2>
            </a>

        </div>
</template>

<script>

export default {
  name: "Card",
  props:{ 
    ListTitle : String,
    ListImg : String,
    ListIcon: Array,
    ListLink : String,
    ListText : String,
   },
};
</script>

<style lang="postcss">
.CardImg{
    @apply border border-myBrown rounded-3xl shadow-md overflow-hidden h-64 md:h-36 lg:h-40; 
}
.ListImg:hover{
    @apply shadow-lg transition; 
}
.ImgSet{
    @apply object-cover overflow-hidden w-full h-full transform  hover:scale-110 duration-500; 
}

.CardListLink li{
    @apply text-center  text-myBrown hover:text-myBrown-dark w-7 h-7 mx-1;
}

.ViewBTN{
    @apply bg-myBrown-light border border-myBrown shadow-md py-2 px-16 rounded-full;
}
.ViewBTN:hover{
    @apply text-myBrown-light bg-myBrown border border-myBrown-light transition ;
}

</style>