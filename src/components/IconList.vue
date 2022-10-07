<template>
            <ul class="CardListLink grid grid-cols-3 border border-green-400">
                <li v-if="UI">
                    <a :href="ListLink" Target="_blank">
                        <i class="fa-brands fa-figma"></i>
                    </a>
                </li>
                <li  v-if="Prototype">
                    <a :href="ListLink" Target="_blank">
                        <i class="fa-solid fa-play"></i>
                    </a>
                </li>
                <li v-if="Web">
                    <a :href="ListLink" Target="_blank">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </li>

            </ul>

</template>

<script>
export default {
  name: "IconList",
  props:{ 
    UI: Boolean,
    Prototype: Boolean,
    Web: Boolean,
    ListLink : String,
   },
};
</script>
