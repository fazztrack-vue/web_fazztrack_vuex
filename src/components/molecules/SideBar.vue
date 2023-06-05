<template>
  <section class="w-[14%] flex flex-col gap-6 fixed overflow-hidden">
        <section class="flex flex-col gap-3">
          <h3 class="pl-5 font-semibold text-zinc-400 text-sm tracking-wider">KELAS</h3>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-daftar" label="Daftar Bootcamp" />
          </div>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-kelas" label="Kelas" />
          </div>
        </section>
        <section class="flex flex-col gap-3">
          <h3 class="pl-5 font-semibold text-zinc-400 text-sm tracking-wider">ARENA(SEGERA)</h3>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-kompetisi" label="Kompetisi" />
          </div>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-leaderboard" label="Leaderboard" />
          </div>
        </section>
        <section class="flex flex-col gap-3">
          <h3 class="pl-5 font-semibold text-zinc-400 text-sm tracking-wider">LAIN LAIN</h3>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-profile" label="Profile" />
          </div>
          <div class="pl-5 py-2 cursor-pointer hover:bg-blue-300">
            <LogoText type="sidebar-transaksi" label="Transaksi" />
          </div>
        </section>
      </section>
</template>
<script lang="ts">
import LogoText from '../atoms/LogoText.vue';

export default {
    components: { LogoText }
}
</script>
<style>
  
</style>