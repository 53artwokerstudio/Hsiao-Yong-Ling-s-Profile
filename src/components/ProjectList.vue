<template>
    <div class="ProjectList ItemSpacing">
        <div class="ProjectItemImg">
            <a :href="ProjectListLink" Target="_blank">
            <img :src="ProjectListImg"
                 class="ProjectListImgSet"
                 alt="開新視窗" srcset="">
            </a>
        </div>


        <div class="ProjectItemText col-span-2">
            <div class="ItemSpacing">
                <a :href="href" Target="_blank">
                    <h2> {{ ProjectListTitle }} </h2>
                </a>
                <div v-html="ProjectListText"></div>
            </div>

            <a  :href="ProjectListLink"
                Target="_blank"
                class="ViewBTN"> VIEW </a>
        </div>
        
   </div>
</template>

<script>
export default {
  name: "ProjectList",
  props:{ 
    ProjectListTitle : String,
    ProjectListImg : String,
    ProjectListLink : String,
    ProjectListText : String,
   },
};
</script>

<style lang="postcss">
    .ProjectList{
        @apply grid grid-cols-3 gap-4  border-b border-myBrown-light pb-10 items-center;
    }

    .ProjectItemImg{
        @apply border border-myBrown rounded-3xl shadow-md overflow-hidden h-60;
    }
    .ProjectItemImg:hover{
        @apply transition duration-300 shadow-lg;
    }

    .ProjectListImgSet{
        @apply object-cover overflow-hidden w-full h-full;
    }


    .ViewBTN{
        @apply bg-myBrown-light border border-myBrown shadow-md py-2 px-16 rounded-full;
    }
    .ViewBTN:hover{
        @apply text-myBrown-light bg-myBrown border border-myBrown-light transition ;
    }
</style>