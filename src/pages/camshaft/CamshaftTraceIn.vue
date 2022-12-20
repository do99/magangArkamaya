<script setup>
// import { table } from 'console';
import Header from "../../components/TraceIn/Header.vue";
import DataTable from "../../components/TraceIn/DataTable.vue";
import { ref, reactive, onMounted, computed } from "vue";

const show = ref(true);
let hasilpercen = ref()
let jumlahBarang = ref()
let percentage = ref(281); 

const TitleHeader = ref("TraceIn");
var date = new Date();
var years = date.getFullYear();
var month = date.getMonth()+1;
var date = date.getDate();
var hari = String(date)

const MonthToChar = (BulanSekarang) => {
    let bulanPertama = 1;
    let acuan = 65;
    // let jumlahAlphabet = 12;

    let kodeAsciiFromBulan = (BulanSekarang + acuan) - bulanPertama;
    let hasil = String.fromCharCode(kodeAsciiFromBulan);

    return hasil;

}

const yearsToChar = (tahunSekarang) => {
    let tahunPertama = 2022;
    let acuan = 65
    let jumlahAlphabet = 26;

    if (tahunSekarang > tahunPertama + jumlahAlphabet) {
        tahunSekarang -= jumlahAlphabet * (Math.floor(tahunSekarang / tahunPertama));
    }

    let kodeAsciiFromTahun = tahunSekarang - (tahunPertama - acuan);
    let hasil = String.fromCharCode(kodeAsciiFromTahun);
 
    return hasil;
}

const dayToChar = (hari) => {     
    if(hari.length == 1 ){
        // console.log("0"+String(hari));
        var day = "0"+String(hari);
    }else{
        var day = hari;
    }
    return day;
}

const DataGanjil = reactive({
  listData: []
})
const DataGenap = reactive({
  listData: []
})

const DataAwal = reactive({
  list: []
})

  const addShift = (index) => { 
  const shift = index;
  localStorage.setItem("shift", JSON.stringify(shift));
};

const DataWork = reactive({
  DataList: [],
});

onMounted(() => {
  DataWork.DataList = JSON.parse(localStorage.getItem("DataWork"));
});

const DataGenerate = reactive({
  list: []
})

onMounted((index) => {
  for(var i =1; i<=10; i++){
    DataGenerate.list.push({
      Index: i,
      Years: yearsToChar(years),
      Line: "",
      Day: dayToChar(hari),
      Month: MonthToChar(month),
      Shift: "",
      Increment: i.toString().padStart(4, '0'),
      status: false
    })
    localStorage.setItem("DataGenerate.list", JSON.stringify(DataGenerate.list));
  }
})

const filter = (index) => {
  DataAwal.listData = JSON.parse(localStorage.getItem("DataGenerate.list"));

  if(index === 'Ganjil'){

    if(DataGanjil.listData.length == 0){
        
        DataGanjil.listData = JSON.parse(localStorage.getItem("DataGanjil"));
        
        if(DataGanjil.listData == null){
          const list = DataAwal.listData.filter(item => Number(item.Increment) % 2 == 1);
        
          localStorage.setItem("DataGanjil", JSON.stringify(list));
          console.log("Data Genap Tersimpan");

        } else {
          console.log("Data Genap Tidak Tersimpan");
        }
    }
  }
  else if(index === 'Genap'){

      console.log("Genap");
        if(DataGenap.listData.length == 0){
          DataGenap.listData = JSON.parse(localStorage.getItem("DataGenap"));
          if(DataGenap.listData == null){
            const list = DataAwal.listData.filter(item => Number(item.Increment) % 2 == 0);
            localStorage.setItem("DataGenap", JSON.stringify(list));
            console.log("Data Genap Tersimpan");
          }else {
            console.log("Data Genap Tidak Tersimpan");
          }
        }

    }
  }

const TotalOut = computed(() => {
  jumlahBarang.value = DataWork.DataList.length;
  let hasil = (jumlahBarang.value / percentage.value) * 100;
  return hasil.toFixed(1);
})

const Total = computed(() => {
  return DataWork.DataList.length;
});


</script>
<template class="overflow-y-auto">
  <Header :TitleHeader="TitleHeader"/>
  <body id="body" class="overflow-hidden">
    <div class="flex flex-col">
      <div class="relative px-2">
        <div class="container-xl flex flex-col gap-6 py-4">
          <div></div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <section class="col-span-1">
              <div id="btn" class="grid grid-cols-5">
                <div
                  class="flex col-span-5 lg:col-span-5 justify-center gap-6 py-4"
                >
                  <router-link
                    to="/TraceInInput/IN"
                    :class="{ invisible: show }"
                    class="w-3/4 sm:w-1/2 md:w-40 lg:w-60 p-4 bg-red-500 text-center text-2xl font-semibold text-white rounded-xl"
                  >
                  <button @click="filter('Ganjil')">
                    IN
                  </button>
                  </router-link>
                  <router-link
                    to="/TraceInInput/EX"
                    :class="{ invisible: show }"
                    class="w-3/4 p-4 sm:w-1/2 md:w-40 lg:w-60 bg-blue-500 text-center text-2xl font-semibold text-white rounded-xl"
                  >
                    <button
                    @click="filter('Genap')">
                      EX
                    </button>
                  </router-link>
                </div>
                <div class="col-span-5">
                  <div
                    class="flex col-span-5 font-semibold text-lg justify-center"
                  >
                    <h1>SHIFT</h1>
                  </div>
                  <section
                    class="flex col-span-3 lg:col-span-3 justify-center text-white font-Poppins"
                  >
                    <button
                      @click="addShift('R'), (show = !show)"
                      class="bg-red-500 rounded-l-md py-2 px-7 hover:bg-red-900 active:scale-90 drop-shadow-xl"
                    >
                      RED
                    </button>
                    <button
                      @click="addShift('W'), (show = !show)"
                      class="bg-green-500 rounded-r-md py-2 px-5 hover:bg-green-900 active:scale-90 drop-shadow-xl"
                    >
                      WHITE
                    </button>
                  </section>
                </div>
              </div>
            </section>

            <!-- <section class="col-span-1">
              <div class="grid grid-cols-5">
                <div
                  class="flex col-span-5 lg:col-span-5 justify-center gap-6 my-8 lg:my-16"
                >
                  
                </div>
              </div>
            </section> -->
            <section
              class="font-Poppins col-span-1 justify-items-center text-center rounded-2xl"
            >
              <div
                class="col-span-5 justify-center py-4 lg:col-span-1 flex rounded-b-xl font-Poppins"
              >
                <div class="flex">
                  <div
                    class="hidden font-Poppins md:flex md:flex-col md:max-w md:bg-slate-50 md:rounded-xl md:overflow-hidden md:shadow-xl md:justify-items-center"
                  >
                    <div
                      class="p-5 bg-red-500 md:w-full text-center md:pl-5 md:h-52 text-white lg:justify-self-center lg:w-60 md:rounded-xl md:shadow-md lg:pl-4"
                    >
                      <h1>REMAIN PROD</h1>
                      <n-space vertical>
                        <n-space
                          class="ml-10 m-1 sm:ml-16 items-center text-center md:ml-12 lg:ml-10"
                        >
                          <n-progress
                            type="circle"
                            :percentage="TotalOut"
                          />
                        </n-space>
                      </n-space>
                      <h1 class="text-xl font-semibold">{{ Total }} / 281</h1>
                    </div>
                  </div>
                  <div
                    class="md:hidden relative w-full lg:px-0 overflow-hidden rounded-t-lg"
                  >
                    <input
                      type="checkbox"
                      class="absolute top-0 inset-x-0 w-full h-10 opacity-0 z-10 cursor-pointer peer"
                    />
                    <div
                      class="bg-blue-500 h-10 w-full pl-5 flex items-center font-semibold text-white font-Poppins"
                    >
                      <h1 class="text-sm t">Remain Production</h1>
                    </div>
                    <!-- Tanda Panah -->
                    <div
                      class="absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div
                      class="white overflow-hidden bg-slate-200 transition-all duration-500 max-h-0 peer-checked:max-h-40 flex justify-center rounded-b-xl font-Poppins"
                    >
                      <p class="text-6xl font-semibold p-6">281</p>
                      <p
                        class="relative text-xl font-semibold pt-16 mr-4 lg:mr-0"
                      >
                        0/281
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div> 
          <div id="table" class="w-11/12 md:w-full self-start">
            <DataTable :DataWork="DataWork.DataList" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>

  .n-progress-text__percentage, .n-progress-text__unit{
    color: white;
  }

</style>