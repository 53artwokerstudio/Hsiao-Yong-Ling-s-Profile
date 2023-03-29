<template>
<div class="UIUX" data-aos="fade-up">
        <TitleBar
        :PageName ="PageName" />


        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
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
                    ListTitle:'<p>開運算算 <br>2022 中原祈福祭</p>',
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
                    Web: true,
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/nPJ1xLVOMwPkpatTTPAmpK/%E6%84%9F%E7%98%A6?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/nPJ1xLVOMwPkpatTTPAmpK/%E6%84%9F%E7%98%A6?page-id=0%3A1&node-id=2%3A2&viewport=290%2C53%2C0.07&scaling=min-zoom&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://jhoujhou.github.io/feelthin_project/',
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
                    Web: true,
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/uphvMuJpZepAEDYoi5pSoc/Sakeholic?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/uphvMuJpZepAEDYoi5pSoc/Sakeholic?page-id=0%3A1&node-id=42%3A806&viewport=232%2C41%2C0.15&scaling=min-zoom&starting-point-node-id=42%3A806&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://aki168.github.io/sakeholic/',
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
                {
                    ListTitle:'<p> 郊友趣 </p>',
                    ListImg:require('../assets/img/Project-14.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/BZYLslkSfD8Wi2CfRhjO5h/%E9%83%8A%E5%8F%8B%E8%B6%A3?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/BZYLslkSfD8Wi2CfRhjO5h/%E9%83%8A%E5%8F%8B%E8%B6%A3?page-id=0%3A1&node-id=1-2&viewport=302%2C66%2C0.09&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> LoveMD 電影評論網站 </p>',
                    ListImg:require('../assets/img/Project-15.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/hbSMKiWVuEuZG4DobN76Qx/L%E2%99%A5MD?node-id=441%3A3536',
                        WebPrototype: 'https://www.figma.com/proto/hbSMKiWVuEuZG4DobN76Qx/L%E2%99%A5MD?page-id=0%3A1&node-id=1-2&viewport=247%2C81%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://kirakira32.github.io/LoveMD/home',
                    },
                    ListText:'',
                },                
                {
                    ListTitle:'<p> 爬蟲工作室 </p>',
                    ListImg:require('../assets/img/Project-16.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/UVBPgqM69UTTFtbJwdtMNZ/%E7%88%AC%E8%9F%B2%E5%B7%A5%E4%BD%9C%E5%AE%A4?node-id=0%3A1',
                        WebPrototype: 'https://www.figma.com/proto/UVBPgqM69UTTFtbJwdtMNZ/%E7%88%AC%E8%9F%B2%E5%B7%A5%E4%BD%9C%E5%AE%A4?page-id=0%3A1&node-id=1-2&viewport=290%2C94%2C0.1&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> Hi Kids <br> 兒童才藝班預約服務 </p>',
                    ListImg:require('../assets/img/Project-17.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/7YTC4b2ISFjxUhAWQRojQX/Hi-Kids?node-id=302%3A2&t=y12FWK6Jn2Qf4xiA-1',
                        WebPrototype: 'https://www.figma.com/proto/7YTC4b2ISFjxUhAWQRojQX/Hi-Kids?page-id=0%3A1&node-id=1-2&viewport=290%2C65%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: 'https://jimmyfang-ai.github.io/JS-sideProject-Hi-kids/index.html',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 粉黛蛋糕店 </p>',
                    ListImg:require('../assets/img/Project-18.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/LRNCFBSmthkDgS31YbaZox/%E7%B2%89%E9%BB%9B%E8%9B%8B%E7%B3%95%E5%BA%97?node-id=0%3A1&t=wz6knBSdGaRj9CAO-1',
                        WebPrototype: 'https://www.figma.com/file/LRNCFBSmthkDgS31YbaZox/%E7%B2%89%E9%BB%9B%E8%9B%8B%E7%B3%95%E5%BA%97?node-id=0%3A1&t=SE2vcAPhBLbA92t6-1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> City Lab 電動滑板電商 </p>',
                    ListImg:require('../assets/img/Project-19.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/69nc4Lj8yvUHQWb6qJkqDg/CITY-LAB?node-id=0%3A1&t=qQoXDj8ofBn7d8Pd-1',
                        WebPrototype: 'https://www.figma.com/proto/69nc4Lj8yvUHQWb6qJkqDg/CITY-LAB?page-id=0%3A1&node-id=1-2&viewport=150%2C112%2C0.36&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 記帳 ExpenSaver </p>',
                    ListImg:require('../assets/img/Project-20.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/38ZYhi2alEVNI0gbl2teSM/ExpenSaver?node-id=0%3A1&t=TyZdZN3jKaEi8p3i-1',
                        WebPrototype: 'https://www.figma.com/proto/SpOV0HqkSn9LPDfaCvinAy/%E8%8C%B6%E8%91%89%E9%9B%BB%E5%95%862.0?page-id=0%3A1&node-id=1-2&viewport=250%2C74%2C0.12&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 鮮品味 </p>',
                    ListImg:require('../assets/img/Project-21.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/SpOV0HqkSn9LPDfaCvinAy/%E8%8C%B6%E8%91%89%E9%9B%BB%E5%95%862.0?node-id=0%3A1&t=TVzi84HWQGJnNitm-1',
                        WebPrototype: 'https://www.figma.com/proto/SpOV0HqkSn9LPDfaCvinAy/%E8%8C%B6%E8%91%89%E9%9B%BB%E5%95%862.0?page-id=0%3A1&node-id=1-2&viewport=250%2C74%2C0.12&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> Fangsis芳心 </p>',
                    ListImg:require('../assets/img/Project-22.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/iESjalOX6DDVhIld3nrHVZ/Fangsis%E8%8A%B3%E5%BF%83?node-id=0%3A1&t=lEcKqAcjHQGlpLaU-1',
                        WebPrototype: 'https://www.figma.com/proto/iESjalOX6DDVhIld3nrHVZ/Fangsis%E8%8A%B3%E5%BF%83?page-id=0%3A1&node-id=1-2&viewport=305%2C65%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 籃球家教 </p>',
                    ListImg:require('../assets/img/Project-23.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/LRNCFBSmthkDgS31YbaZox/%E7%B2%89%E9%BB%9B%E8%9B%8B%E7%B3%95%E5%BA%97?node-id=0%3A1&t=wz6knBSdGaRj9CAO-1',
                        WebPrototype: 'https://www.figma.com/proto/LKxpNEGtnWXBoxepyldy5U/%E7%B1%83%E7%90%83%E5%AE%B6%E6%95%99?page-id=0%3A1&node-id=1-2&viewport=283%2C71%2C0.11&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
                        MobilePrototype: '',
                        Web: '',
                    },
                    ListText:'',
                },
                {
                    ListTitle:'<p> 超級便辨變 </p>',
                    ListImg:require('../assets/img/Project-24.png'),
                    ListIcon:{
                    UI: true,
                    WebPrototype: true,
                    MobilePrototype: false,
                    Web: false
                    },
                    ListLink:{
                        UI: 'https://www.figma.com/file/xtulC3wA9qVW7SED5HzdgG/%E8%B6%85%E7%B4%9A%E4%BE%BF%E8%BE%A8%E8%AE%8A?node-id=0%3A1&t=ryE2h9Nm5jeMupo4-1',
                        WebPrototype: 'https://www.figma.com/proto/xtulC3wA9qVW7SED5HzdgG/%E8%B6%85%E7%B4%9A%E4%BE%BF%E8%BE%A8%E8%AE%8A?page-id=0%3A1&node-id=1-2&viewport=251%2C106%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A2&show-proto-sidebar=1',
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

<style lang="postcss">  

</style>