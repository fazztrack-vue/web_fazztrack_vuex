<template>
  <div class="flex">
    <li class="text-primary-orange text-2xl"></li>
    <p class="text-[#494c51] text-xl mb-4">
      {{ desc }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        props:{
            desc:{
                type:String,
                required:true
            }
        }
    })
</script>