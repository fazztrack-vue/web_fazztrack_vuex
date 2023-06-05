<template>
  <div class="bg-[#f3f4f5] min-h-[100vh]">
    <Navbar widhtContain="profile" />
    <main class="container-profile mx-auto flex justify-between gap-2 py-[40px] min-h-[90vh] relative">
      <SideBar />
      <section class="flex-1 ml-[20%] flex justify-between items-start gap-5">
        <SideProfileGlobal />
        <section class="flex-1 flex flex-col gap-8">
          <section class="header flex justify-between items-center">
            <div class="flex">
              <p @click="moveRouter('/profile/about')" class="text-sm border-b-4 border-slate-300 px-1 py-3 cursor-pointer">Tentang</p>
              <div class="border-b-4 border-slate-300 w-2" />
              <p class="text-sm border-b-4 border-primary-orange px-1 py-3 cursor-pointer">Portofolio</p>
            </div>
          </section>
          <main class="grid grid-cols-3">
            <section class="bg-white border-[1px] border-[#dee1e5] p-10 flex flex-col items-center gap-2 cursor-pointer">
              <div class="bg-green-50 rounded-full p-5">
                <v-icon name="hi-solid-plus" fill="green" scale="4"/>
              </div>
              <h3 class="font-bold text-lg">Tambah Portofolio</h3>
              <p class="text-center text-slate-400 text-sm">Tambah dan deskripsikan portofolio untuk mendukung profil kamu</p>
            </section>
          </main>
        </section>
      </section>    
    </main>
    <FooterProfile />
  </div>
</template>
<script lang="ts">
  import Navbar from '../components/organisms/Navbar.vue';
  import SideBar from '../components/molecules/SideBar.vue';
  import FooterProfile from '../components/molecules/FooterProfile.vue'
  import BtnPrimary from '../components/atoms/BtnPrimary.vue';
  import ProfileStatus from '../components/atoms/ProfileStatus.vue';
  import SideProfileGlobal from '../components/molecules/SideProfileGlobal.vue';
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { HiSolidPlus } from "oh-vue-icons/icons";

  addIcons(HiSolidPlus)

  export default {
      components: {
        Navbar,
        FooterProfile,
        BtnPrimary,
        ProfileStatus,
        SideBar,
        SideProfileGlobal,
        "v-icon": OhVueIcon
    },
    methods:{
      moveRouter(path :string) {
        this.$router.push(path)
      }
    }
  }
</script>

<style>
  .linear-gradient{
    background-image: linear-gradient(268.2deg,#f8d389,#f5c462);
  }
</style>
