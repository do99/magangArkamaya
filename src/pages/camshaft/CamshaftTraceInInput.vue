<template class="overflow-y-auto">
  <Header />
  <body id="body" class="overflow-hidden">
    <div class="flex flex-col">
      <div class="relative px-2">
        <div class="container-xl flex flex-col gap-6 py-2">
          <section class="flex justify-center col-span-2">
            <h1 class="text-2xl flex justify-center w-full lg:mt-4">
              <input
                v-model="WorkNo"
                class="text-center focus:outline-none w-[50%] bg-transparent border-gray-400 border-b-2"
                type="text"
                placeholder="WORK NO" 
              />
            </h1>
          </section>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <section class="col-span-1">
              <div class="grid grid-cols-5">
                <div
                  class="flex col-span-5 lg:col-span-5 justify-center gap-6 py-4"
                >
                  <button
                    @click="add('REGULER'), getDate"
                    class="rounded-md md:px-20 md:py-6 lg:px-14 px-2 py-3 text-xl bg-blue-500 font-bold text-white hover:bg-blue-900 active:scale-90 drop-shadow-xl"
                  >
                    REGULER
                  </button>

                  <button
                    @click="add('HYBRID'), getDate"
                    class="rounded-md md:px-20 md:py-6 lg:px-14 px-4 py-3 text-xl bg-red-500 font-bold text-white hover:bg-red-900 active:scale-90 drop-shadow-xl"
                  >
                    HYBRID
                  </button>
                </div>
                <div class="col-span-5">
                  <section
                    class="flex col-span-3 lg:col-span-3 justify-center text-white font-Poppins"
                  >
                    <button
                    @click="AddLine"
                      class="bg-blue-500 rounded-l-md py-2 px-5 hover:bg-blue-900 active:scale-90 drop-shadow-xl"
                    >
                      AUTO
                    </button>
                    <button
                    @click="AddLine"
                      class="bg-red-500 py-2 px-5 hover:bg-red-900 active:scale-90 drop-shadow-xl"
                    >
                      MANUAL
                    </button>
                    <button
                      @click="simpan"
                      class="bg-green-500 rounded-r-md py-2 px-5 hover:bg-green-900 active:scale-90 drop-shadow-xl"
                    >
                      NEXT
                    </button>
                  </section>
                </div>
              </div>
            </section>
            <section
              class="font-Poppins col-span-1 justify-items-center text-center rounded-2xl"
            >
              <div
                class="col-span-5 justify-center lg:col-span-1 flex rounded-b-xl font-Poppins"
              >
                <div
                  id="qty"
                  class="sm:w-11/12 md:w-1/2 self-center lg:w-[40%] bg-white md:justify-center rounded-md h-auto mr-4"
                >
                  <div
                    id="qty"
                    class="bg-gray-400 p-2 rounded-t-md text-white text-center font-semibold text-xl"
                  >
                    <h1>QUANTITY</h1>
                  </div>
                  <div class="p-3">
                    <table class="w-full">
                      <thead>
                        <tr class="border-b">
                          <th class="p-2">IN</th>
                          <th class="p-2">HI</th>
                          <th class="p-2">EX</th>
                          <th class="p-2">HX</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b text-center">
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                        </tr>
                        <tr class="border-b text-center">
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                          <td class="p-2">0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
          <div class="w-full">
            <DataTable :DataWork="DataWork.DataList" />
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-for="(item, index) in GenerateData.list.Data">
      {{index}} {{item.Data}}
    </div> -->

  </body>
</template>

<script setup>
import DataTable from "../../components/TraceIn/DataTable.vue";
import Header from "../../components/TraceIn/Header.vue";
import { useRoute } from "vue-router";
import { ref, reactive, onMounted, computed } from "vue";

let percentage = ref(281); // Variable Dengan Nilai Awal Percentage Progress Bar

const route = useRoute();

// Variable Untuk Insert Data LocalStorage
let No = ref(0);
let WorkNo = ref();
let Type = ref();
let PartCode = ref("CA");
let Line = ref("A");
let date = ref();
let Time = ref();
let Shift = ref();
let jumlahBarang = ref();
const simpan = ref(false);
let GenerateData = reactive({
  list: []
})

var DataGanjil = []
var DataGenap = []
// Ngambil Data Dari LocalStorage
onMounted(() => {
  DataWork.DataList = JSON.parse(localStorage.getItem("DataWork"));

  GenerateData.list = JSON.parse(localStorage.getItem("DataGenerate.list"));

  Shift = JSON.parse(localStorage.getItem("shift"));
  setInterval(() => {
    setInterval(getDate, 1000);
  });
});


var i  = 0;
var indeksSekarang = 2;
const AddLine = () => {

  if(route.params.id === "IN"){
    // DataGanjil = JSON.parse(localStorage.getiItem("DataGanjil"));
    WorkNo.value = "Data Ganjil"
  }else{
    DataGenap = JSON.parse(localStorage.getItem("DataGenap"));
    var shift = JSON.parse(localStorage.getItem("shift"));
    // console.log(DataGenap);
    DataGenap.forEach(element => {
      if(Type.value == "IN"){
        DataGenap[i].Line = "A"
        localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      }else if(Type.value == "EX"){
        DataGenap[i].Line = "B"
        localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      }else if(Type.value == "HI"){
        DataGenap[i].Line = "C"
        localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      }else if(Type.value == "HX"){
        DataGenap[i].Line = "D"
        localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      }

      // if(shift == "R"){
        // DataGenap[i].Shift = "RED"
      //   localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      // }else {
      //   DataGenap[i].Shift = "WHITE"
      //   localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
      // }

      DataGenap[i].Status = true;
      localStorage.setItem("DataGenap", JSON.stringify(DataGenap));
    
      if(Number(element.Increment) == indeksSekarang){
        WorkNo.value = element.Years + element.Line + element.Day + element.Month + element.Shift + element.Increment
      }
    });
  }
  // i++;
}

// Mengambil Tanggal & Tahun & Waktu
const getDate = () => {
  const today = new Date();
  const date1 =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  date.value = date1;
  Time.value = time;
};

const CountNumber = computed(() => {
  return DataWork.DataList.length;
});

const TotalOut = computed(() => {
  jumlahBarang.value = DataWork.DataList.length;
  let hasil = (jumlahBarang.value / percentage.value) * 100;
  return hasil.toFixed(1);
})



const Total = computed(() => {
  return DataWork.DataList.length;
});

// Variable Input Data
const DataWork = reactive({
  DataList: [],
});

// Methods Insert Data LocalStorage
const add = (index) => {
  // if (index == "REGULER")
  if(route.params.id === "IN"){
    if(index == "REGULER"){
      Type.value = "IN"
      console.log(Type.value);
    }else{
      Type.value = "HI"
      console.log(Type.value);
    } 
  }else if(route.params.id === "EX"){
    if(index == "REGULER"){
      Type.value = "EX"
      console.log(Type.value);
    }else {
      Type.value = "HX"
      console.log(Type.value);
    }
  }
  console.log(Type.value);
};
</script>
