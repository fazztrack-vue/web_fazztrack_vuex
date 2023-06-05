<template>
  <Navbar />
  <div class="w-full flex flex-col items-center">
    <section class="container-class">
      <Banner
        img-size="w-full h-full"
        reverse-content="flex-col-reverse"
        conten="Build Life-Changing Education"
        thirConten="Build Life-Changing Education"
        secondConten="Our Mission Is To"
        desc="Bring more kickass talent to Indonesia’s tech ecosystem."
        imgContent="https://www.fazztrack.com/_nuxt/img/about-page-hero.3a699a8.png"
        btnTitle="Daftar sekarang" />
      <section class="w-full px-5 flex items-center mb-16">
        <div class="w-[40%] ml-7 flex flex-col justify-center">
          <TitleHire title="The New Career Hacks" />
          <p class="text-xl text-[#797e86]">
            Di Fazztrack kami percaya ada cara yang lebih baik untuk sukses:
          </p>
        </div>
        <div class="w-[60%]">
          <div class="flex items-start mt-5">
            <i
              class="fa-solid fa-check text-primary-orange fa-lg mt-3 mr-5"></i>
            <p class="text-base text-[#797e86]">
              Menggunakan skema Income Share Agreement (ISA) sehingga tidak ada
              biaya pendidikan di depan.
            </p>
          </div>
          <div class="flex items-start mt-5">
            <i
              class="fa-solid fa-check text-primary-orange fa-lg mt-3 mr-5"></i>
            <p class="text-base text-[#797e86]">
              Memberikan skill yang dibutuhkan sesuai standar industri.
            </p>
          </div>
          <div class="flex items-start mt-5">
            <i
              class="fa-solid fa-check text-primary-orange fa-lg mt-3 mr-5"></i>
            <p class="text-base text-[#797e86]">
              Menyalurkan lulusan Fazztrack ke perusahaan rekanan Fazztrack.
            </p>
          </div>
        </div>
      </section>
    </section>
    <Companies
      desc="Kami membantu ratusan perusahaan untuk mengembangkan bisnisnya melalui lulusan Fazztrack."
      title="From Startup to Enterprise" />
    <section class="w-full flex justify-center my-20">
      <section class="container-class px-5 flex flex-col items-center">
        <div class="mb-8">
          <TitleHire title="Hubungi Fazztrack" />
        </div>
        <div class="w-[80%] flex justify-center items-center">
          <div class="mr-10">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  class="gmap_iframe"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=fazztrack&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://capcuttemplate.org/">Capcut Template</a>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between h-full">
            <h2 class="text-xl font-semibold text-primary-orange">Fazztrack Head Office</h2>
            <p class="text-[#494c51] text-xl mb-4">
              CIBIS Park, Jl. TB Simatupang No.2, RT.13/RW.5, Cilandak Tim.,
              Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota
              Jakarta 12560
            </p>
            <p class="text-[#494c51] text-xl mb-4">Senin - Jumat (08.00 - 18.00)</p>
            <div>
              <h2 class="text-xl font-semibold text-primary-orange">Kontak Kami</h2>
              <p class="text-[#494c51] text-xl">+6282261564148</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <HireNow
      btn-title="daftar sekarang"
      title-section="Tunggu Apa Lagi? Gabung Bersama Kami!" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BtnPrimary from "../components/atoms/BtnPrimary.vue";
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
.mapouter {
  position: relative;
  text-align: right;
  width: 254px;
  height: 254px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 254px;
  height: 254px;
}
.gmap_iframe {
  width: 254px !important;
  height: 254px !important;
}
</style>
