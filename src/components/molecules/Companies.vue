<template>
  <section
    class="w-full bg-[#f0f4f9] flex flex-col items-center relative overflow-x-hidden py-14">
    <div class="mb-5 flex flex-col items-center">
      <TitleHire :title="title"/>
      <p class="text-[20px] text-[#797e86]">{{ desc }}</p>
    </div>
    <section class="container-class flex flex-wrap px-6 z-10 mt-5">
      <div v-for="(item, index) in companyHire" :key="index">
        <img
          :src="item.url"
          :alt="item.alt"
          class="w-[113px] lg:w-[126px] ml-2 mt-2" />
      </div>
      <div class="lg:w-[136px] w-[113px] flex justify-center items-center">
        <p class="title font-bold text-2xl">660+</p>
      </div>
    </section>
    <div class="absolute bottom-0">
      <img
        src="https://www.fazztrack.com/_nuxt/img/city-vector.c90a59e.svg"
        alt=""
        class="w-[100vw] min-w-[1400px] z-0" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { companyHire } from "../../data/hire";
import { ITools } from "../../interfaces/IHire";
import TitleHire from "../atoms/TitleHire.vue";

interface Data {
  companyHire: ITools[];
}

export default defineComponent({
  data(): Data {
    return {
      companyHire: companyHire,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    desc:{
      type:String,
      required:false,
      default:''
    }
  },
  components:{
    TitleHire
  }
});
</script>
<style lang=""></style>
