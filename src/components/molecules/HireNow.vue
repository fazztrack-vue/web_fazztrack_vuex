<template lang="">
  <section class="w-full flex justify-center bg-[#fff3e4] py-14">
    <section class="container-class">
      <div class="flex flex-col items-center">
        <TitleHire :title="titleSection" />
        <div class="mt-5">
            <BtnPrimary :title="btnTitle" />
        </div>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TitleHire from '../atoms/TitleHire.vue';
import BtnPrimary from '../atoms/BtnPrimary.vue';


export default defineComponent({
    props:{
        titleSection:{
            type:String,
            required:true
        },
        btnTitle:{
            type:String,
            required:true
        }
    },
    components:{
        BtnPrimary,
        TitleHire
    }
});
</script>
<style lang=""></style>
