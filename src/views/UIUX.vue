<template>
<div class="UIUX ContainerSpacing">
        <TitleBar
        :PageName ="PageName" />

        <div class="grid grid-cols-3 gap-4 ">
            <div class="bg-lime-400">05</div>
            <div class="col-span-2 bg-red-400">04</div>
        </div>

</div>
</template>

<script>
import  TitleBar from "@/components/TitleBar.vue";

export default {
    name: "UIUX",
    components: { TitleBar },
    data() {
        return {
            PageName:'UI/UX',
        }
    },
}
</script>

<style lang="postcss">
</style>