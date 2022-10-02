<template>
<div class="UIUX" data-aos="fade-up">
        <TitleBar
        :PageName ="PageName" />

        <List 
          v-for=" (item,i) in UIUXListItem "
          :key="i"
          :ListTitle ="item.ListTitle"
          :ListImg ="item.ListImg"
          :ListLink ="item.ListLink"
          :ListText ="item.ListText"
        ></List>

</div>
</template>

<script>
import  TitleBar from "@/components/TitleBar.vue";
import  List from "@/components/List.vue";

export default {
    name: "UIUX",
    components: { TitleBar ,List },
    data() {
        return {
            PageName:'UI/UX',
            UIUXListItem:[
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