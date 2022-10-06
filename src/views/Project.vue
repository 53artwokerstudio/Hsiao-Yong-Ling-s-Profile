<template>
<div class="Project" data-aos="fade-up">
  <TitleBar
  :PageName ="PageName" />

  <div class="ListSection" 
        v-for=" (item,i) in ProjectListItem" 
        :key="i">
      <div class="ItemSpacing grid grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        <div class="ListImg col-span-3 lg:col-span-1">
            <a :href="item.ListLink" Target="_blank">
              <img :src="item.ListImg" 
                    class="ImgSet"
                    alt="" srcset="">
            </a>
        </div>

        <div class="col-span-3 lg:col-span-2 flex flex-col items-center lg:items-start">
            
            <div class="mb-8">
                <a :href="item.ListLink" Target="_blank">
                    <h2 class="ListTitle">{{ item.ListTitle }}</h2>
                </a>
                <div v-html="item.ListText"></div>
            </div>

        <a  :href="item.ListLink"
            Target="_blank"
            class="ViewBTN"> VIEW
        </a>

        </div>
    </div>
  </div>

</div>
</template>

<script>
import  TitleBar from "@/components/TitleBar.vue";

export default {
    name: "Project",
    components: { TitleBar },
    data() {
        return {
            PageName:'Project',
            ProjectListItem:[
                {
                    ListTitle:'屏東防災資訊平台',
                    ListImg:require('../assets/img/Project-1.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'好室旅店。HOUSE HOTEL',
                    ListImg:require('../assets/img/Project-2.png'),
                    ListLink:'https://53artwokerstudio.github.io/SideProject-HOUSE-HOTEL/',
                    ListText:'<p> Vue CLI Side Project，使用 Vue 2 開發，配置環境變數， Vue-Router 設置路由，串接 F2E 2nd API，RWD 響應式網站。</p><br/><p class="pb">Tailwind Css</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">V-Calendar</p><p>引入日曆套件，規劃時間及預約功能</p>',
                }
            ],

        }
    },
}
</script>

<style lang="postcss">
.ListTitle:hover{
  @apply text-myBrown transition;
}
.ListImg{
    @apply border border-myBrown rounded-3xl shadow-md overflow-hidden h-48; 
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