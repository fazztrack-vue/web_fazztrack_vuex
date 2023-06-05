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
              <p class="text-sm border-b-4 border-primary-orange px-1 py-3 cursor-pointer">Tentang</p>
              <div class="border-b-4 border-slate-300 w-2" />
              <p @click="moveRouter('/profile/portofolio')" class="text-sm border-b-4 border-slate-300 px-1 py-3 cursor-pointer">Portofolio</p>
            </div>
            <BtnPrimary title="Lihat CV" />
          </section>
          <section class="grad-history bg-white border-[1px] border-[#dee1e5] p-5">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold">Riwayat Pendidikan</h2>
              <div class="flex items-center gap-1 cursor-pointer">
                <v-icon name="fa-regular-edit" fill="#ef6807" />
                <p class="text-primary-orange text-sm font-bold">Edit</p>
              </div>
            </div>
            <div class="bg-slate-200 h-[1px] w-full my-5" />
            <main>
              <div class="flex items-start gap-5 mb-5">
                <ProfileStatus type="grad" />
                <section class="flex flex-col gap-1">
                  <h3 class="font-semibold text-lg">Fazztrack</h3>
                  <p class="text-sm">Fullstack Web Developer</p>
                  <p class="text-slate-400 text-sm">Oktober 2022 - Januari 2023</p>
                </section>
              </div>
            </main>
          </section>
          <section class="skill bg-white border-[1px] border-[#dee1e5] p-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-xl font-bold">Kemampuan</h2>
              <div class="flex items-center gap-1 cursor-pointer">
                <v-icon name="fa-regular-edit" fill="#ef6807" />
                <p class="text-primary-orange text-sm font-bold">Edit</p>
              </div>
            </div>
            <p class="text-sm">Kemampuan diambil dari repositori kamu dan nantinya akan tampil di PDF CV kamu.</p>
            <div class="bg-slate-200 h-[1px] w-full my-5" />
            <main>
              <div class="flex items-start gap-5 mb-5">
                <ProfileStatus type="star" />
                <section class="flex items-center gap-3 flex-wrap mt-2">
                  <div v-for="item in [0,0,0,0,0,0,0,]" :key="item">
                    <p class="bg-blue-200 p-1 text-sm rounded-md font-bold tracking-wide">React Native</p>
                  </div>
                </section>
              </div>
            </main>
          </section>
          <section class="prestasi bg-white border-[1px] border-[#dee1e5] p-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-xl font-bold">Prestasi</h2>
              <div class="flex items-center gap-1 cursor-pointer">
                <v-icon name="fa-regular-edit" fill="#ef6807" />
                <p class="text-primary-orange text-sm font-bold">Edit</p>
              </div>
            </div>
            <div class="bg-slate-200 h-[1px] w-full my-5" />
            <main>
              <div class="flex items-start gap-5 mb-5">
                <ProfileStatus type="trophy" />
                <section class="flex flex-col gap-1">
                  <h3 class="font-semibold text-lg">Juara Lomba Membuat Web Tingkat Provinsi</h3>
                  <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil.</p>
                  <p class="text-slate-400 text-sm">Oktober 2022</p>
                </section>
              </div>
            </main>
          </section>
          <section class="organisasi bg-white border-[1px] border-[#dee1e5] p-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-xl font-bold">Organisasi</h2>
              <div class="flex items-center gap-1 cursor-pointer">
                <v-icon name="fa-regular-edit" fill="#ef6807" />
                <p class="text-primary-orange text-sm font-bold">Edit</p>
              </div>
            </div>
            <div class="bg-slate-200 h-[1px] w-full my-5" />
            <main>
              <div class="flex items-start gap-5 mb-5">
                <ProfileStatus type="grup" />
                <section class="flex flex-col gap-1">
                  <h3 class="font-semibold text-lg">OSIS SMA</h3>
                  <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil.</p>
                  <p class="text-slate-400 text-sm">Oktober 2022</p>
                </section>
              </div>
            </main>
          </section>
          <section class="pengalaman bg-white border-[1px] border-[#dee1e5] p-5">
            <div class="flex items-center justify-between mb-2">
              <h2 class="text-xl font-bold">Pengalaman Kerja</h2>
              <div class="flex items-center gap-1 cursor-pointer">
                <v-icon name="fa-regular-edit" fill="#ef6807" />
                <p class="text-primary-orange text-sm font-bold">Edit</p>
              </div>
            </div>
            <div class="bg-slate-200 h-[1px] w-full my-5" />
            <main>
              <div class="flex items-start gap-5 mb-5">
                <ProfileStatus type="suitcase" />
                <section class="flex flex-col gap-1">
                  <h3 class="font-semibold text-lg">PT Makmur Abadi Sentosa</h3>
                  <p class="text-sm">Frontend Developer - Magang</p>
                  <p class="text-slate-400 text-sm">November 2023 - Juli 2023</p>
                  <p class="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, nihil.</p>
                </section>
              </div>
            </main>
          </section>
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

  export default {
      components: {
    Navbar,
    FooterProfile,
    BtnPrimary,
    ProfileStatus,
    SideBar,
    SideProfileGlobal
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
