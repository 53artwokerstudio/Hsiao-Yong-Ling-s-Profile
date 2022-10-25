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
            :ListIcon ="item.ListIcon"
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
                    ListIcon:{
                    UI: true,
                    WebPrototype: false,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/t9yoGDcPmFLbesBwgrbZTI/%E5%B1%8F%E6%9D%B1%E9%98%B2%E7%81%BD%E8%B3%87%E8%A8%8A%E6%95%B4%E5%90%88%E5%B9%B3%E5%8F%B0?node-id=0%3A1',
                        WebPrototype: '',
                        MobilePrototype: '',
                        Web: 'https://pteoc.pthg.gov.tw/',
                    },
                    ListText:'<p>屏東縣政府消防局官方防災資訊平台，依據 AAA 無障礙規範製作檢測通過，RWD 響應式網站。</p><br/><p class="pb">Sass + Bootstrap5</p><p>規劃響應式版型及客製化樣式</p><b</p>',
                },
                {
                    ListTitle:'<p> 亞灣 5GAioT 創新園區 </p>',
                    ListImg:require('../assets/img/Project-3.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: false,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/ppinmu37z7AoiZOyi6oDn9/5GAIoT?node-id=8%3A80',
                        WebPrototype: '',
                        MobilePrototype: '',
                        Web: 'https://asiabay.org.tw/',
                    },
                    ListText:'<p> Vue CLI Side Project，使用 Vue 2 開發，配置環境變數， Vue-Router 設置路由，串接 F2E 2nd API，RWD 響應式網站。</p><br/><p class="pb">Tailwind Css</p><p>規劃響應式版型及客製化樣式</p><br/><p class="pb">V-Calendar</p><p>引入日曆套件，規劃時間及預約功能</p>',
                },
                {
                    ListTitle:'<p> 開運算算 <br> 2022 中原祈福祭 </p>',
                    ListImg:require('../assets/img/Project-4.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/YujbJ9tTK4DFlwVlZX4Fdv/%E9%96%8B%E9%81%8B%E7%AE%97%E7%AE%97?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/YujbJ9tTK4DFlwVlZX4Fdv/%E9%96%8B%E9%81%8B%E7%AE%97%E7%AE%97?page-id=0%3A1&node-id=2%3A3&viewport=293%2C67%2C0.04&scaling=min-zoom&starting-point-node-id=2%3A3&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://fate.opoint.com.tw/ullambana/ceremony2022/index#data-section',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> Freelance CAFE’ <br> 自由工作者咖啡廳搜尋系統 </p>',
                    ListImg:require('../assets/img/Project-5.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: true,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/bL3ZCy46PxYeY2CQrosIhJ/CAFE?node-id=374%3A46',
                        WebPrototype: 'https://www.figma.com/proto/bL3ZCy46PxYeY2CQrosIhJ/CAFE?page-id=0%3A1&node-id=65%3A0&viewport=-35%2C-340%2C0.21&scaling=scale-down&starting-point-node-id=65%3A0&show-proto-sidebar=1',
                        MobilePrototype: 'https://www.figma.com/proto/bL3ZCy46PxYeY2CQrosIhJ/CAFE?page-id=0%3A1&node-id=65%3A0&viewport=-35%2C-340%2C0.21&scaling=scale-down&starting-point-node-id=65%3A0&show-proto-sidebar=1',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> PetEats 配食舖 </p>',
                    ListImg:require('../assets/img/Project-6.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: true,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/3VZWUjlZisosNjEzdWktz6/Pet-Eats?node-id=8%3A2',
                        WebPrototype: 'https://www.figma.com/proto/3VZWUjlZisosNjEzdWktz6/Pet-Eats?page-id=0%3A1&node-id=51%3A2694&viewport=196%2C64%2C0.04&scaling=min-zoom&starting-point-node-id=51%3A2694',
                        MobilePrototype: 'https://www.figma.com/proto/3VZWUjlZisosNjEzdWktz6/Pet-Eats?page-id=151%3A4527&node-id=151%3A4528&viewport=354%2C129%2C0.02&scaling=min-zoom&starting-point-node-id=151%3A4528',
                        Web: 'https://learn-at-rocketcamp.github.io/project-peteats-2022/',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> EasySplit 拆帳趣 </p>',
                    ListImg:require('../assets/img/Project-7.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: true,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/Z4XEjruN8fzXUjplshEc1B/Easy-Split?node-id=9%3A352',
                        WebPrototype: 'https://www.figma.com/proto/Z4XEjruN8fzXUjplshEc1B/Easy-Split?page-id=0%3A1&node-id=2%3A94&viewport=319%2C216%2C0.03&scaling=scale-down-width&starting-point-node-id=2%3A94',
                        MobilePrototype: 'https://www.figma.com/proto/Z4XEjruN8fzXUjplshEc1B/Easy-Split?page-id=162%3A1946&node-id=254%3A1949&viewport=357%2C141%2C0.03&scaling=min-zoom&starting-point-node-id=254%3A1949',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> O Anime <br> 訂閱式影音平台 </p>',
                    ListImg:require('../assets/img/Project-8.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/3JqlxXGEZpuHW5TWS2AL3j/0Anime?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/3JqlxXGEZpuHW5TWS2AL3j/0Anime?page-id=0%3A1&node-id=2%3A2&viewport=302%2C137%2C0.18&scaling=min-zoom&starting-point-node-id=2%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://n0918679182.github.io/O-Anime-Demo-BS5/',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 舟舟療心室 </p>',
                    ListImg:require('../assets/img/Project-9.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/pWBGZX61mjQ2BPyEdWI310/%E8%88%9F%E8%88%9F%E7%99%82%E5%BF%83%E5%AE%A4?node-id=10%3A12',
                        WebPrototype: 'https://www.figma.com/proto/pWBGZX61mjQ2BPyEdWI310/%E8%88%9F%E8%88%9F%E7%99%82%E5%BF%83%E5%AE%A4?page-id=0%3A1&node-id=10%3A12&viewport=634%2C245%2C0.15&scaling=min-zoom&starting-point-node-id=10%3A12&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://yichienlu.github.io/HealingChou/',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> Time Will Tell <br> 時間管理工具 </p>',
                    ListImg:require('../assets/img/Project-10.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: true
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/ZpXcKbe0ABIbRkXdgDdkD7/Time-Will-Tell?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/ZpXcKbe0ABIbRkXdgDdkD7/Time-Will-Tell?page-id=0%3A1&node-id=2%3A141&viewport=375%2C281%2C0.1&scaling=min-zoom&starting-point-node-id=2%3A141&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://chiayinin.com/timeWillTell-layout/',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 感瘦 </p>',
                    ListImg:require('../assets/img/Project-11.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/nPJ1xLVOMwPkpatTTPAmpK/%E6%84%9F%E7%98%A6?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/nPJ1xLVOMwPkpatTTPAmpK/%E6%84%9F%E7%98%A6?page-id=0%3A1&node-id=2%3A2&viewport=290%2C53%2C0.07&scaling=min-zoom&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 小酌圖鑑  <br> 日本酒檢索網站 </p>',
                    ListImg:require('../assets/img/Project-12.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/uphvMuJpZepAEDYoi5pSoc/Sakeholic?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/uphvMuJpZepAEDYoi5pSoc/Sakeholic?page-id=0%3A1&node-id=42%3A806&viewport=232%2C41%2C0.15&scaling=min-zoom&starting-point-node-id=42%3A806&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 蔬適點 </p>',
                    ListImg:require('../assets/img/Project-13.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/tMk1YCcInpPTdLPA1TDVpK/%E8%94%AC%E9%81%A9%E9%BB%9E?node-id=2%3A64',
                        WebPrototype: 'https://www.figma.com/proto/tMk1YCcInpPTdLPA1TDVpK/%E8%94%AC%E9%81%A9%E9%BB%9E?page-id=2%3A64&node-id=2%3A65&viewport=338%2C130%2C0.15&scaling=min-zoom&starting-point-node-id=2%3A65&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
            ],

        }
    },
}
</script>