<template >
  <div class="flex items-center gap-2">
    <div v-if="type === 'live-class'">
      <svg data-v-228acfe6="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="minicamp-moat__icon"><path data-v-228acfe6="" d="M24.6692 10.0199C24.5317 10.057 24.3832 10.1906 24.3126 10.3427C24.2495 10.4763 24.2421 10.5988 24.2421 11.43V12.3651L20.0192 12.38C15.4733 12.3911 15.6478 12.3874 14.8642 12.5878C14.2477 12.7474 13.4603 13.0925 12.944 13.4339C11.1539 14.6213 10.0248 16.6401 10.0025 18.6922C9.99883 19.0892 10.0025 19.1152 10.0991 19.2414C10.2922 19.4974 10.3034 19.4974 11.8113 19.4863L13.1632 19.4752L13.3006 19.3675C13.4826 19.2302 13.5308 19.1041 13.5568 18.7144C13.6088 17.976 13.906 17.3229 14.4222 16.807C14.6859 16.5436 15.1056 16.2615 15.3953 16.1539C15.971 15.9387 15.659 15.9535 20.1306 15.9387L24.2421 15.9276V16.8664C24.2421 17.7014 24.2495 17.8238 24.3126 17.9574C24.45 18.2543 24.7992 18.3842 25.0814 18.2394C25.1668 18.1949 25.9913 17.3934 27.0907 16.2949C28.7286 14.6547 28.9551 14.4098 28.9774 14.2874C29.0405 13.946 29.1111 14.0276 27.0907 12.0052C26.0656 10.9773 25.1631 10.1052 25.0888 10.0644C24.9551 9.99761 24.8252 9.98277 24.6692 10.0199Z" fill="url(#paint0_linear_1499_16272)"></path> <path data-v-228acfe6="" d="M14.3308 28.9801C14.4683 28.943 14.6168 28.8094 14.6874 28.6573C14.7505 28.5237 14.7579 28.4012 14.7579 27.57V26.6349L18.9808 26.62C23.5267 26.6089 23.3522 26.6126 24.1358 26.4122C24.7523 26.2526 25.5397 25.9075 26.056 25.5661C27.8461 24.3787 28.9752 22.3599 28.9975 20.3078C29.0012 19.9108 28.9975 19.8848 28.9009 19.7586C28.7078 19.5026 28.6966 19.5026 27.1887 19.5137L25.8368 19.5248L25.6994 19.6325C25.5174 19.7698 25.4691 19.8959 25.4432 20.2856C25.3912 21.024 25.094 21.6771 24.5778 22.193C24.3141 22.4564 23.8944 22.7385 23.6047 22.8461C23.029 23.0613 23.341 23.0465 18.8694 23.0613L14.7579 23.0724V22.1336C14.7579 21.2986 14.7505 21.1762 14.6874 21.0426C14.55 20.7457 14.2008 20.6158 13.9186 20.7606C13.8332 20.8051 13.0087 21.6066 11.9093 22.7051C10.2714 24.3453 10.0449 24.5902 10.0226 24.7126C9.95945 25.054 9.88888 24.9724 11.9093 26.9948C12.9344 28.0227 13.8369 28.8948 13.9112 28.9356C14.0449 29.0024 14.1748 29.0172 14.3308 28.9801Z" fill="url(#paint1_linear_1499_16272)"></path> <defs data-v-228acfe6=""><linearGradient data-v-228acfe6="" id="paint0_linear_1499_16272" x1="10.008" y1="24.2499" x2="29.0237" y2="24.2499" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F15D00"></stop> <stop data-v-228acfe6="" offset="0.308716" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F69621"></stop></linearGradient> <linearGradient data-v-228acfe6="" id="paint1_linear_1499_16272" x1="10.008" y1="24.2499" x2="29.0237" y2="24.2499" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F15D00"></stop> <stop data-v-228acfe6="" offset="0.308716" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F69621"></stop></linearGradient></defs></svg>
    </div>
    <div v-if="type === 'top-trainer'">
      <svg data-v-228acfe6="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="minicamp-moat__icon"><path data-v-228acfe6="" d="M18.5587 15.421L19.9405 18.5982H20.0563L21.4381 15.421H18.5587ZM27.3536 20.357L25.2324 16.8734C24.6834 15.9732 23.7124 15.421 22.6667 15.421H22.0916L20.7098 18.5982H20.8517C21.0795 18.5982 21.2663 18.7835 21.2663 19.018V21.5106C21.2663 21.7414 21.0795 21.9267 20.8517 21.9267H19.145C18.9172 21.9267 18.7305 21.7414 18.7305 21.5106V19.018C18.7305 18.7835 18.9172 18.5982 19.145 18.5982H19.287L17.9052 15.421H17.3301C16.2844 15.421 15.3134 15.9732 14.7644 16.8734L12.6432 20.357C12.2324 21.0341 12.3295 21.904 12.8747 22.4714L14.1893 23.833L14.9325 23.6477C15.9931 23.3829 17.106 23.4359 18.133 23.8066L23.2418 25.6335L23.3614 24.2264C23.4435 24.4382 23.5892 24.6349 23.8207 24.7635C24.2464 25.0056 24.7805 24.8921 25.1203 24.5403L27.1183 22.4714C27.6673 21.904 27.7644 21.0341 27.3536 20.357ZM16.4076 23.1144L14.559 21.1891L16.1835 18.9008L16.557 23.3186C16.5159 23.2468 16.4674 23.1787 16.4076 23.1144ZM23.5854 23.1144C23.5294 23.1787 23.4809 23.2468 23.4398 23.3186L23.8095 18.9008L25.4378 21.1891L23.5854 23.1144Z" fill="url(#paint0_linear_1499_16264)"></path> <path data-v-228acfe6="" d="M30.5446 26.8703L22.3249 31.5378C21.4099 32.056 20.3194 32.1429 19.3335 31.7761L12.798 29.3402L13.2835 24.7332C13.2835 24.7332 13.2835 24.703 13.2835 24.6916L13.7242 24.5214C14.9267 24.0524 16.2413 23.9805 17.4812 24.3058C17.6268 24.3436 17.7725 24.389 17.9144 24.4382L24.0577 26.545C24.3378 26.6395 24.5507 26.8438 24.6664 27.0972C24.7635 27.309 24.7934 27.5549 24.7336 27.797C24.6179 28.2735 24.1921 28.595 23.7253 28.595C23.6618 28.595 23.5946 28.5875 23.5311 28.5761L17.0218 27.3128L16.9172 27.797L23.4378 29.0603C23.5311 29.0792 23.632 29.0868 23.7253 29.0868C24.4311 29.0868 25.0399 28.6026 25.2079 27.9104C25.2901 27.57 25.2527 27.2258 25.122 26.9194L29.7715 25.1909C29.8761 25.1531 29.9807 25.1341 30.0853 25.1341C30.4363 25.1341 30.7687 25.3422 30.9218 25.6826C31.1123 26.1176 30.9442 26.632 30.5334 26.8665L30.5446 26.8703Z" fill="url(#paint1_linear_1499_16264)"></path> <path data-v-228acfe6="" d="M9 23.0727V30.2782H11.4237C11.8009 30.2782 12.1146 29.9908 12.1557 29.6125L12.6785 24.6689C12.7159 24.2982 12.4806 23.9578 12.1258 23.867L9 23.0765V23.0727Z" fill="#F15D00"></path> <path data-v-228acfe6="" d="M20.0745 8H19.9364C18.5318 8 17.3931 9.15323 17.3931 10.5758V11.8807C17.3931 13.3033 18.5318 14.4566 19.9364 14.4566H20.0745C21.4791 14.4566 22.6178 13.3033 22.6178 11.8807V10.5758C22.6178 9.15323 21.4791 8 20.0745 8Z" fill="url(#paint2_linear_1499_16264)"></path> <defs data-v-228acfe6=""><linearGradient data-v-228acfe6="" id="paint0_linear_1499_16264" x1="19.9975" y1="-8.82667" x2="19.9975" y2="30.6933" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="0.54" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F15D00"></stop></linearGradient> <linearGradient data-v-228acfe6="" id="paint1_linear_1499_16264" x1="20.0046" y1="8.03253" x2="20.0046" y2="31.3076" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F17121" stop-opacity="0.6"></stop></linearGradient> <linearGradient data-v-228acfe6="" id="paint2_linear_1499_16264" x1="20.0074" y1="8.0643" x2="20.0074" y2="25.3499" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="0.54" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F15D00"></stop></linearGradient></defs></svg>
    </div>
    <!-- 
  <div class="user bg-slate-400">
    <i class="fa-solid fa-user" style="color: #000000;"></i>
    <i class="fa-solid fa-user" style="color: #ffffff;"></i>
  </div>
  <div class="daftar-bootcamp bg-slate-400">
    <i class="fa-solid fa-list" style="color: #000000;"></i>
    <i class="fa-solid fa-list" style="color: #ffffff;"></i>
  </div>
  <div class="kelas bg-slate-400">
    <i class="fa-sharp fa-solid fa-clipboard" style="color: #000000;"></i>
    <i class="fa-sharp fa-solid fa-clipboard" style="color: #ffffff;"></i>
  </div>
  <div class="transaksi bg-slate-400">
    <i class="fa-sharp fa-solid fa-file" style="color: #000000;"></i>
    <i class="fa-sharp fa-solid fa-file" style="color: #ffffff;"></i>
  </div>
  <div class="tropy bg-slate-400">
    <i class="fa-sharp fa-solid fa-trophy" style="color: #000000;"></i>
    <i class="fa-sharp fa-solid fa-trophy" style="color: #ffffff;"></i>
  </div>
  <div class="kompetisi bg-slate-400">
    <i class="fa-sharp fa-solid fa-table-list" style="color: #000000;"></i>
    <i class="fa-sharp fa-solid fa-table-list" style="color: #ffffff;"></i>
  </div>
 -->
    <div v-if="type === 'proyek-industri'">
       <svg data-v-228acfe6="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="minicamp-moat__icon"><path data-v-228acfe6="" d="M14.8824 16.5604C15.0754 16.5008 15.2709 16.6451 15.2709 16.847V18.5993C15.2709 18.7324 15.1831 18.8496 15.0554 18.8871L8.38455 20.8466C8.19243 20.903 8 20.759 8 20.5587V18.9059C8 18.7743 8.08577 18.6581 8.21153 18.6192L14.8824 16.5604ZM8 20.3698C8 20.1696 8.19243 20.0256 8.38455 20.082L15.0554 22.0415C15.1831 22.079 15.2709 22.1962 15.2709 22.3293V24.1434C15.2709 24.3454 15.0754 24.4897 14.8824 24.4301L8.21153 22.3712C8.08577 22.3324 8 22.2162 8 22.0846V20.3698ZM9.80985 19.8917C9.94022 19.8917 10.0459 19.9974 10.0459 20.1277V20.9246C10.0459 21.055 9.94022 21.1607 9.80985 21.1607C9.67947 21.1607 9.57378 21.055 9.57378 20.9246V20.1277C9.57378 19.9974 9.67947 19.8917 9.80985 19.8917Z" fill="url(#paint0_linear_1499_16268)"></path> <path data-v-228acfe6="" d="M17.2682 26.5C17.0728 26.5 16.9296 26.3162 16.9773 26.1267L20.0997 13.7267C20.1332 13.5934 20.2531 13.5 20.3906 13.5H22.7306C22.9259 13.5 23.0692 13.6838 23.0215 13.8733L19.8991 26.2733C19.8655 26.4066 19.7457 26.5 19.6082 26.5H17.2682Z" fill="url(#paint1_linear_1499_16268)"></path> <path data-v-228acfe6="" d="M25.1176 24.4301C24.9246 24.4897 24.7291 24.3454 24.7291 24.1434V22.3912C24.7291 22.2581 24.8169 22.1409 24.9446 22.1034L31.6155 20.1439C31.8076 20.0875 32 20.2315 32 20.4317V22.0846C32 22.2162 31.9142 22.3324 31.7885 22.3712L25.1176 24.4301ZM32 20.6206C32 20.8209 31.8076 20.9649 31.6155 20.9085L24.9446 18.949C24.8169 18.9115 24.7291 18.7943 24.7291 18.6612V16.847C24.7291 16.6451 24.9246 16.5008 25.1176 16.5604L31.7885 18.6192C31.9142 18.6581 32 18.7743 32 18.9059V20.6206ZM30.1902 21.0988C30.0598 21.0988 29.9541 20.9931 29.9541 20.8627V20.0658C29.9541 19.9355 30.0598 19.8298 30.1902 19.8298C30.3205 19.8298 30.4262 19.9355 30.4262 20.0658V20.8627C30.4262 20.9931 30.3205 21.0988 30.1902 21.0988Z" fill="url(#paint2_linear_1499_16268)"></path> <defs data-v-228acfe6=""><linearGradient data-v-228acfe6="" id="paint0_linear_1499_16268" x1="32" y1="20" x2="8" y2="20" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="0.475165" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F15D00"></stop></linearGradient> <linearGradient data-v-228acfe6="" id="paint1_linear_1499_16268" x1="32" y1="20" x2="8" y2="20" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="0.475165" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F15D00"></stop></linearGradient> <linearGradient data-v-228acfe6="" id="paint2_linear_1499_16268" x1="32" y1="20" x2="8" y2="20" gradientUnits="userSpaceOnUse"><stop data-v-228acfe6="" stop-color="#F17121"></stop> <stop data-v-228acfe6="" offset="0.475165" stop-color="#F69621"></stop> <stop data-v-228acfe6="" offset="1" stop-color="#F15D00"></stop></linearGradient></defs></svg>
    </div>
    <div v-if="type === 'sidebar-daftar'">
      <i class="fa-solid fa-list w-5" style="color: #000000;"></i>
    </div>
    <div v-if="type === 'sidebar-kelas'">
      <i class="fa-sharp fa-solid fa-clipboard w-5" style="color: #000000;"></i>
    </div>
    <div v-if="type === 'sidebar-kompetisi'">
      <i class="fa-sharp fa-solid fa-table-list" style="color: #000000;"></i>
    </div>
    <div v-if="type === 'sidebar-leaderboard'">
      <i class="fa-sharp fa-solid fa-trophy" style="color: #000000;"></i>
    </div>
    <div v-if="type === 'sidebar-profile'">
      <i class="fa-solid fa-user" style="color: #000000;"></i>
    </div>
    <div v-if="type === 'sidebar-transaksi'">
      <i class="fa-sharp fa-solid fa-file" style="color: #000000;"></i>
    </div>
    <p class="text-sm font-semibold tracking-wide">{{label}}</p>
  </div>
</template>
<script lang="ts">
export default {
  props:{
    label : {
      type :String,
      required : true
    },
    type: {
      type: String,
      required : true
    }
  }
}
</script>
<style lang="">
  
</style>