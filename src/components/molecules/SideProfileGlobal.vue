<template>
   <section class="w-[25%] flex flex-col gap-5">
          <div class="bg-white border-[1px] border-[#dee1e5] pt-10 text-center">
            <div class="w-32 h-32 rounded-full bg-slate-500 overflow-hidden p-[5px] mx-auto">
              <!-- <img /> -->
            </div>
            <p class="font-semibold px-5 tracking-wide text-lg my-5 relative">User Name</p>
            <div class="flex items-center justify-between px-5 py-3 linear-gradient">
              <p class="text-md tracking-wide">ID STUDENT</p>
              <p class="font-bold text-md tracking-wide">I49FDD4</p>
            </div>
          </div>
          <BtnPrimary title="Edit Profile" :style="`bg-blue-400 hover:bg-blue-500`" />
          <div class="bg-white border-[1px] border-[#dee1e5] p-5 text-[15px] flex flex-col gap-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus beatae minima laudantium fugit quod nemo sint velit aliquam sed ipsa perferendis dolore, ad quam quo, facere cum exercitationem dolorum eum.</p>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="md-email-outlined" />
              <p>useradmin@gmail.com</p>
            </div>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="hi-solid-phone" />
              <p>08546538994.</p>
            </div>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="bi-gender-male" />
              <p>Laki- Laki</p>
            </div>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="ri-cake-2-line" />
              <p>20 Agustus 2000</p>
            </div>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="co-location-pin" />
              <p>Jakarta, Monas</p>
            </div>
            <div class="flex items-center gap-3 break-all">
              <v-icon name="md-volunteeractivism-outlined" />
              <p>Football</p>
            </div>
            <div class="flex items-start gap-3 break-all">
              <v-icon name="la-linkedin" />
              <p class="">http://linkedin.com/in/user</p>
            </div>
          </div>
        </section>
</template>
<script lang="ts">
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { FaRegularEdit , MdEmailOutlined, HiSolidPhone, RiCake2Line, BiGenderMale, CoLocationPin, MdVolunteeractivismOutlined, LaLinkedin } from "oh-vue-icons/icons";
  import BtnPrimary from '../atoms/BtnPrimary.vue';

  addIcons(FaRegularEdit, MdEmailOutlined, HiSolidPhone, RiCake2Line, BiGenderMale, CoLocationPin, MdVolunteeractivismOutlined, LaLinkedin)
  export default {
    components: {
      BtnPrimary,
      "v-icon" : OhVueIcon
    }
  }
</script>
<style>
  
</style>