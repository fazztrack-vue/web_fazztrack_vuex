<template>
  <div class="bg-slate-200 py-4 px-5 rounded-md">
    <v-icon v-if="type === 'grad'" name="fa-graduation-cap" scale="1.4" fill="gray"/>
    <v-icon v-if="type === 'star'" name="fa-star" scale="1.4" fill="gray"/>
    <v-icon v-if="type === 'trophy'" name="gi-trophy" scale="1.4" fill="gray"/>
    <v-icon v-if="type === 'grup'" name="bi-people-fill" scale="1.4" fill="gray"/>
    <v-icon v-if="type === 'suitcase'" name="ri-suitcase-fill" scale="1.4" fill="gray"/>
  </div>
</template>
<script lang="ts">
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { FaGraduationCap, FaStar, GiTrophy, BiPeopleFill, RiSuitcaseFill } from "oh-vue-icons/icons";

  addIcons(FaGraduationCap, FaStar, GiTrophy, BiPeopleFill, RiSuitcaseFill)

  export default {
    components:{
      "v-icon" : OhVueIcon
    },
    props: {
      type: {
        type: String,
        required: true
      }
    }
  }
</script>
<style>
  
</style>