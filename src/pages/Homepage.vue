<template>
  <ToastSuccess v-if="isAlert" title="Success Add Minicamp" />
  <Navbar />
  <main class="pb-20 z-10 border">
    <header class="container-class py-10 mx-auto">
      <h1 class="font-bold pb-10 text-4xl font-sora">Part-time bootcamp bersama expert terkemuka</h1>
      <div class="flex pb-8 items-center justify-between w-2/3">
         <LogoText :label="`Top Trainer dari Perusahaan`" type="top-trainer" />
         <LogoText :label="`Proyek Level Industri`" type="proyek-industri" />
         <LogoText :label="`Live Class`" type="live-class" />
      </div>
    </header>
    <NavbarSection @on-selected="filterMinicamp" :options="options" />
    <section>
      <Modal @on-confirm="handleConfirm" v-if="isModal" />
      <div v-if="isLogin !== false && listMinicamp.isError === false"  class="container-class pt-10 mx-auto text-right">
        <button @click="handleModal" class="border-2 rounded-md py-2 px-3 bg-primary-orange text-white tracking-wide border-primary-orange"><i class="fa-solid fa-circle-plus fa-2xl"></i></button>
      </div>
      <main class="container-class py-10 mx-auto grid grid-cols-3 gap-8 z-10 items-stretch">
        <SkeletonMinicamp v-if="listMinicamp.isLoading === true" />
        <div v-if="listMinicamp.isError === true" class="col-start-2">
          <p class="bg-red-300 rounded-md py-3 text-center font-semibold">{{listMinicamp.errMessage}}</p>
        </div>
        <div v-for="item in listMinicamp.data" :key="item.id">
          <CardMinicamp v-if="listMinicamp.isLoading === false" :options="item" />
        </div>
    </main>
    </section>
  </main>
  <Footer />
  <Contact />
</template>
<script lang="ts">
  import { mapGetters, mapActions } from 'vuex';

  import ToastSuccess from '../components/atoms/ToastSuccess.vue';
  import LogoText from '../components/atoms/LogoText.vue';
  import Contact from '../components/atoms/Contact.vue'
  import Footer from '../components/organisms/Footer.vue'
  import Navbar from '../components/organisms/Navbar.vue';
  import Modal from '../components/molecules/AddMinicamp.vue'
  import NavbarSection from '../components/molecules/NavbarSection.vue';
  import CardMinicamp from '../components/molecules/CardMinicamp.vue';
  import SkeletonMinicamp from '../components/atoms/SkeletonMinicamp.vue'
  import IDataMinicamp from '../interfaces/IMinicamp';
 
  const token = localStorage.getItem('token')

  interface Data {
    options : IOptions[]
    isModal : boolean
    isLogin : string | boolean
    isAlert: boolean
  }

  interface IOptions {
    id : number
    value : string
    active : boolean
  }

  export default {
    data() : Data {
        return{
          options:[
            {id : 1,
            value : 'Semua',
            active: true},
            {id : 2,
            value : 'Disalurkan',
            active: false},
            {id : 3,
            value : 'Tidak Disalurkan',
            active: false},
        ],
        // dataMinicamps : [] as IDataMinicamp[],
        isModal : false,
        isLogin : token || false,
        isAlert: false
      }
    },
    components:{
      Contact,
      Footer,
      Navbar,
      LogoText,
      NavbarSection,
      CardMinicamp,
      Modal,
      ToastSuccess,
      SkeletonMinicamp
    },
    methods:{
      insertData(data : IDataMinicamp) {
        this.insertDataMinicamp(data).then((_res : any) => {
          this.isAlert = true
          setTimeout(() => {
            this.fetchData()
          }, 2000);
        }).catch((error : any) => {
          alert(error.message)
        })
      },
      handleModal(){
        this.isModal = !this.isModal
      },
      handleConfirm(val : any){
        if(val === 'cancel'){
          this.handleModal()
        }else{
          this.handleModal()
          this.insertData(val)
        }
      },
      async filterMinicamp(_data : any){
        alert('API tidak men-support filter')
        // if(data.value === 'Disalurkan'){
        //   this.dataMinicamps = this.listDisalurkan
        // }else if(data.value === 'Tidak Disalurkan'){
        //   this.dataMinicamps = this.listTidakDisalurkan
        // }else{
        //   this.dataMinicamps = this.listMinicamp.data
        // }
      },
      ...mapActions({
        fetchDataMinicamp : "minicamp/getListMinicamp",
        insertDataMinicamp : "minicamp/insertDataMinicamp"
      })
    },
    mounted(){
      this.fetchDataMinicamp()
    },
    computed:{
      ...mapGetters({
        listMinicamp : "minicamp/getList",
        listDisalurkan : "minicamp/getListDisalurkan",
        listTidakDisalurkan : "minicamp/getListTidakDisalurkan",
      })
    }
  }
</script>
<style lang="">
  
</style>
