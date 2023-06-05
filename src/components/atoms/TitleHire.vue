<template lang="">
        <p class="title font-semibold text-xl md:text-[24px]">{{title}}</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        title:{
            type:String,
            required:true
        }
    }
})
</script>