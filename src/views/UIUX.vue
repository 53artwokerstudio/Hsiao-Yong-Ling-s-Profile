<template>
<div class="UIUX" data-aos="fade-up">
        <TitleBar
        :PageName ="PageName" />


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
            v-for=" (item,i) in UIUXListItem "
            :key="i"
            :ListTitle ="item.ListTitle"
            :ListImg ="item.ListImg"
            :ListLink ="item.ListLink"
            :ListText ="item.ListText"
            ></Card>
        </div>


</div>
</template>

<script>
import  TitleBar from "@/components/TitleBar.vue";
import  Card from "@/components/card.vue";

export default {
    name: "UIUX",
    components: { TitleBar ,Card },
    data() {
        return {
            PageName:'UI/UX',
            UIUXListItem:[
                {
                    ListTitle:'<p> 屏東防災資訊平台 </p>',
                    ListImg:require('../assets/img/Project-1.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> 好室旅店。HOUSE HOTEL </p>',
                    ListImg:require('../assets/img/Project-2.png'),
                    ListLink:'https://53artwokerstudio.github.io/SideProject-HOUSE-HOTEL/',
                    ListText:'<p> Vue CLI Side Project，使用 Vue 2 開發，配置環境變數， Vue-Router 設置路由，串接 F2E 2nd API，RWD 響應式網站。</p><br/><p class="pb">Tailwind Css</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">V-Calendar</p><p>引入日曆套件，規劃時間及預約功能</p>',
                },
                {
                    ListTitle:'<p> 亞灣 5GAioT 創新園區 </p>',
                    ListImg:require('../assets/img/Project-3.png'),
                    ListLink:'https://53artwokerstudio.github.io/SideProject-HOUSE-HOTEL/',
                    ListText:'<p> Vue CLI Side Project，使用 Vue 2 開發，配置環境變數， Vue-Router 設置路由，串接 F2E 2nd API，RWD 響應式網站。</p><br/><p class="pb">Tailwind Css</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">V-Calendar</p><p>引入日曆套件，規劃時間及預約功能</p>',
                },
                {
                    ListTitle:'<p> 開運算算 <br> 2022 中原祈福祭 </p>',
                    ListImg:require('../assets/img/Project-4.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> Freelance CAFE’ <br> 自由工作者咖啡廳搜尋系統 </p>',
                    ListImg:require('../assets/img/Project-5.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> PetEats 配食舖 </p>',
                    ListImg:require('../assets/img/Project-6.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> EasySplit 拆帳趣 </p>',
                    ListImg:require('../assets/img/Project-7.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> O Anime <br> 訂閱式影音平台 </p>',
                    ListImg:require('../assets/img/Project-8.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> 舟舟療心室 </p>',
                    ListImg:require('../assets/img/Project-9.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> Time Will Tell <br> 時間管理工具 </p>',
                    ListImg:require('../assets/img/Project-10.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> 感瘦 </p>',
                    ListImg:require('../assets/img/Project-11.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> 小酌圖鑑  <br> 日本酒檢索網站 </p>',
                    ListImg:require('../assets/img/Project-12.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
                {
                    ListTitle:'<p> 蔬適點 </p>',
                    ListImg:require('../assets/img/Project-13.png'),
                    ListLink:'https://pteoc.pthg.gov.tw/',
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">Figma</p><p>設計網站視覺及 Prototype ，載入 A11Y 相關套件做視覺檢測</p>',
                },
            ],

        }
    },
}
</script>