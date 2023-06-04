<template lang="">
    <div>
        <p class="title font-semibold text-[24px]">{{title}}</p>
    </div>
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