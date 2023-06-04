<template>
  <Navbar />
  <div class="w-full flex flex-col items-center">
    <section class="container-class">
      <Banner
        imgSize="w-[348px] h-[348px]"
        secondConten="To Meet Industry Needs"
        desc="Bring more kickass talent to Indonesia’s tech ecosystem."
        imgContent="https://www.fazztrack.com/hire/_nuxt/img/fazztrack-hiring-platform.5243e20.png"
        conten="Our Graduates Are Ready"
        btnTitle="Hire now" />
      <section class="w-full px-5 flex flex-wrap justify-center">
        <div class="w-[330px] ml-7 mb-8">
          <TitleHire title="Our Talents" />
          <p class="text-xl text-[#797e86]">
            Our talents are diverse across many roles and we speak the latest
            technologies & tools
          </p>
        </div>
        <div
          v-for="(_item, index) in tools"
          :key="index"
          class="w-[330px] bg-[#fef3ec] rounded-md p-6 ml-7 mb-8">
          <p class="title font-semibold text-[16px]">{{ _item.title }}</p>
          <div class="flex flex-wrap justify-between mt-8">
            <img
              v-for="(item, index) in _item.data"
              :key="index"
              :src="item.url"
              :alt="item.alt" />
          </div>
        </div>
      </section>
    </section>
    <section class="w-full bg-[#f0f4f9] flex justify-center">
      <section class="container-class pt-14 px-5">
        <div class="w-full flex justify-center mb-10">
          <TitleHire title="Hiring Option" />
        </div>
        <section class="flex justify-between gap-3 rounded-lg">
          <CardHireOption
            title="Hire Directly"
            desc="Hire our graduates without hiring fees. Contract directly between company and talent" />
          <CardHireOption
            title="Hire through Outsource"
            desc="Hire our graduates without hassle, choose us as your intermediary.
            3-6 Months contract available." />
          <CardHireOption
            title="Vendorship"
            desc="Explain your needs, discuss the requirement, and we will help you in building your dream product." />
        </section>
      </section>
    </section>
    <Companies title="Companies Trust Us" />
    <section class="w-full flex justify-center my-20">
      <section class="container-class px-5 flex">
        <div class="w-[40%]">
          <img
            src="https://www.fazztrack.com/hire/_nuxt/img/talent-quality-control-h.074589f.png"
            alt="" />
        </div>
        <div class="w-[60%]">
          <TitleHire title="Talent Quality Control" />
          <p class="text-[#494c51] text-xl mb-4">
            To provide quality talent, previously we carried out a series of
            processes until we felt that they were ready to enter the industry.
          </p>
          <ListDesc
            v-for="(item, index) in listQualityDesc"
            :key="index"
            :desc="item.desc" />
        </div>
      </section>
    </section>
    <HireNow
      btn-title="hire now"
      title-section="Ready To Hire The Best Talent?" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BtnPrimary from "../components/atoms/BtnPrimary.vue";
import CardHireOption from "../components/atoms/CardHireOption.vue";
import Companies from "../components/molecules/Companies.vue";
import TitleHire from "../components/atoms/TitleHire.vue";
import ListDesc from "../components/atoms/ListDesc.vue";
import HireNow from "../components/molecules/HireNow.vue";
import Navbar from "../components/organisms/Navbar.vue";
import Footer from "../components/organisms/Footer.vue";
import Banner from "../components/molecules/Banner.vue";
import { ITools } from "../interfaces/IHire";
import {
  QualityDesc,
  backend,
  digitalMarketing,
  fullstack,
  ios,
  qaEngineer,
} from "../data/hire";
interface Data {
  tools: {
    title: string;
    data: ITools[];
  }[];
  listQualityDesc: IQualityList[];
}

interface IQualityList {
  id: number;
  desc: string;
}

export default defineComponent({
  data(): Data {
    return {
      tools: [
        {
          title: "Fullstack Web & Mobile",
          data: fullstack,
        },
        {
          title: "Backend Developer",
          data: backend,
        },
        {
          title: "iOS Developer",
          data: ios,
        },
        {
          title: "QA Automation Engineer",
          data: qaEngineer,
        },
        {
          title: "Digital Marketing",
          data: digitalMarketing,
        },
      ],
      listQualityDesc: QualityDesc,
    };
  },
  components: {
    BtnPrimary,
    CardHireOption,
    Companies,
    TitleHire,
    ListDesc,
    HireNow,
    Navbar,
    Footer,
    Banner,
  },
  mounted() {},
});
</script>
<style>
.title {
  font-family: "Sora", sans-serif;
}
</style>
