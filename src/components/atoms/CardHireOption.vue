<template lang="">
  <section class="w-1/3 rounded-lg shadow-lg bg-white">
    <div class="bg-[#2557a7] p-6 text-white font-semibold text-xl rounded-t-lg">
      <li>{{title}}</li>
    </div>
    <div class="p-6 text-base">
      <p>
        {{desc}}
      </p>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props:{
        title:{
            type:String,
            required:true
        },
        desc:{
            type:String,
            required:true
        }
    }
});
</script>
<style lang=""></style>
