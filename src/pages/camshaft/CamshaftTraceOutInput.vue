
<template >
  <Header :TitleHeader="TitleHeader"/>
  

  <section class="m-5 flex flex-wrap flex-1 gap-y-6 sm:justify-center">
      <div @click="showInformation = !showInformation" id="title" class="flex w-full sm:w-11/12 shadow-md rounded-md p-3 bg-white pl-7 text-xl font-semibold md:hidden">
          <h1>
              INFORMATION 
          </h1>
          <div class="absolute right-8 sm:right-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>    
          </div>
     </div>

     <div :class="{hidden: showInformation}" class="relative sm:w-11/12 -mt-8 p-3 justify-center bg-white border-t-2 border-slate-300 flex gap-x-8 transition-all ease-in duration-500 md:hidden">
          <div class="text-center space-y-2 ml-4 sm:ml-0">
              <h1 class="font-semibold">REMAIN PROD</h1>
              <n-space vertical>
                  <n-space>
                      <n-progress unit="" type="circle" :percentage="TotalOut" />
                  </n-space>
              </n-space>
              <h1 class="text-xl font-semibold">{{ Total }} / 281 </h1>
          </div>
          <div class="text-center">
              <h1 class="font-semibold">SAFETY STOCK</h1>
              <div class="flex flex-wrap gap-x-3 justify-center text-md gap-y-6">
                  <h2>Min : 60</h2>
                  <h2>Max : 80</h2>
                  <div class="text-center text-2xl font-semibold sm:w-full">
                      <h2>ACTUAL</h2>
                      <span class="text-6xl">80</span>
                  </div>
              </div>

          </div>
     </div>

     

     <div id="summaryProduksi" class="sm:w-11/12 md:w-full  self-center lg:w-[40%] bg-white md:justify-center rounded-md h-auto lg:hidden">
              <div id="headerSummary" class="bg-gray-400 p-2 rounded-t-md text-white text-center font-semibold text-xl">
                  <h1>SUMMARY PRODUKSI</h1>
              </div>
              <div class="p-3">
                  <table class="w-full">
                      <thead >
                          <tr class="border-b">
                              <th class="p-2">Line</th>
                              <th class="p-2">IN</th>
                              <th class="p-2">HI</th>
                              <th class="p-2">EX</th>
                              <th class="p-2">HX</th>
                              <th class="p-2">TOTAL</th>
                              <th class="p-2">TOTAL LINE</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr class="border-b text-center">
                              <th class="p-2">ASSY</th>
                              <td class="p-2">{{ TypeASSYIN }}</td>
                              <td class="p-2">0</td>
                              <td class="p-2">{{ TypeASSYEX }}</td>
                              <td class="p-2">0</td>
                              <td class="p-2">0</td>
                              <td class="p-2 text-center font-bold text-5xl" rowspan="2">{{ Total }}</td>
                          </tr>
                          <tr class="border-b text-center">
                              <th class="p-2">STOCK</th>
                              <td class="p-2">{{ TypeStockIN }}</td>
                              <td class="p-2">0</td>
                              <td class="p-2">{{ TypeStockIN }}</td>
                              <td class="p-2">0</td>
                              <td class="p-2">0</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
      </div>

          <div class="sm:m-16 flex flex-wrap items-stretch gap-y-6 gap-x-3 md:grid md:grid-cols-7 lg:grid-cols-2 lg:-mt-5">
              <input v-model="input" type="text" placeholder="Work No" id="WorkNo" class="border-gray-300 focus:outline-none bg-inherit border-b-2 w-full p-3 md:h-20 md:col-span-4 md:justify-self-end lg:hidden" autofocus>
          
              <div class="w-auto hidden lg:flex lg:flex-wrap mt-4 ml-8">
                  <input v-model="input" id="input" type="text" placeholder="WorkNo" class="w-11/12 h-14 bg-transparent border-b-2 border-gray-400 focus:outline-none m-1" autofocus>
                  <input type="text" placeholder="PalletNo" class="h-14 m-1 p-2 bg-transparent border-b-2 border-gray-400 focus:outline-none">
                  <input v-model="Type" type="text" placeholder="Type" class="h-14 m-1 p-2 bg-transparent border-b-2 border-gray-400 focus:outline-none">
                  <input type="text" placeholder="Actual/Plan" class="h-14 m-1 p-2 bg-transparent border-b-2 border-gray-400 focus:outline-none">
              </div>

              <div class="m-3 hidden md:grid md:ml-16 md:col-span-3 lg:col-span-1 md:w-full lg:justify-items-center">
                  <div class="flex gap-x-4">
                      <div class="p-2 bg-red-500 md:w-full text-center md:pl-5 md:h-36 text-white lg:justify-self-center lg:w-64 md:rounded-xl md:shadow-md lg:pl-4 lg:flex lg:gap-x-20">
                      
                          <n-space horizontal class="">
                          <n-space class="ml-10 sm:ml-14 items-center text-center lg:w-12 md:ml-12 lg:ml-1">
                              <n-progress type="circle" :percentage="TotalOut" :height="1" class="text-green-800"/>
                          </n-space>
                          </n-space>
                              <div class="space-y-8">
                                  <h1 class="text-md">REMAIN PROD</h1>
                                  <h1 class="text-xl font-semibold -mt-2">{{ Total }} / 281 </h1>
                              </div>
                      </div>

                      <div class="p-5 hidden lg:block lg:w-52 bg-blue-500 md:w-full text-center md:pl-5 md:h-36 text-white lg:justify-self-center md:rounded-xl md:shadow-md ">
                          
                          <h1>SAFETY STOCK</h1>
                          <div class="flex gap-x-4 justify-center">
                              <h2>Min : 60</h2>
                              <h2>Max : 60</h2>
                          </div>
                          <div class="">
                              <h1>ACTUAL</h1>
                              <h1 class="mt-2 text-4xl">80</h1>
                          </div>

                      </div>
                  </div>
              </div>


              <input type="text" placeholder="Pallet No" class="border-gray-300 focus:outline-none w-24 bg-inherit border-b-2 p-1 md:w-full md:col-span-2 md:h-20 md:justify-self-end lg:hidden sm:w-44">
              
              <input v-model="Type" type="text" placeholder="Type" class="lg:hidden sm:w-44 border-gray-300 focus:outline-none w-24 bg-inherit border-b-2 p-1 md:h-20">
          
              <input type="text" placeholder="Actual/Plan" class="lg:hidden sm:w-44 border-gray-300 w-24 focus:outline-none bg-inherit border-b-2 p-1 md:h-20">
              
              <div class="m-3 hidden md:grid md:rounded-full md:col-span-3 md:ml-16 md:w-full lg:hidden">
                  <div class="p-5 bg-blue-500 md:w-full text-center md:pl-3 md:h-52 text-white lg:justify-self-center lg:w-1/2 md:rounded-xl md:shadow-md">
                      <h1>SAFETY STOCK</h1>
                      <div class="flex gap-x-4 justify-center">
                          <h2>Min : 60</h2>
                          <h2>Max : 60</h2>
                      </div>
                      <div class="mt-3">
                          <h1>ACTUAL</h1>
                          <h1 class="mt-2 text-6xl">80</h1>
                      </div>
                  </div>
              </div>
          
          </div>

          
          <div class="hidden lg:grid grid-cols-2 lg:w-full lg:-mt-[90px]">
              
              <div>
                  <div class="flex flex-row justify-center gap-x-3 w-full mt-1 sm:gap-x-12 ">
                      <button class="p-3 bg-red-500 rounded-md text-2xl text-white w-32" @click="add( 'ASSY'), getDate">
                          ASSY
                      </button>
                      <button class="p-3 bg-blue-500 rounded-md text-2xl text-white w-32" @click="add( 'STOCK'), getDate">
                          STOCK
                        </button>
                    </div>
                    <div class=" m-3 flex p-2 gap-x-6 justify-center">
                      <button @click="BackSpace" class="p-2 bg-yellow-500 px-5 shadow-md text-white rounded-md">BackSpace</button>
                      <button @click="ShowKeyboard = !ShowKeyboard" class="p-2 bg-blue-500 px-5 shadow-md text-white rounded-md">Keyboard</button>
                      <button @click="Clear" class="p-2 bg-green-500 px-5 shadow-md text-white rounded-md">Clear</button>
                    </div>
                  
                  <div class="flex flex-row justify-center w-full mt-3">
                      <button class="p-3 bg-red-500 rounded-tl-md rounded-bl-md text-xl text-white w-24 sm:w-44">REFRESH</button>
                      <button class="p-3 bg-green-500  text-xl text-white w-24 sm:w-44">CANCEL</button>
                      <router-link to="/TraceOut" class="flex justify-center p-3 bg-blue-500 text-center rounded-tr-md rounded-br-md text-xl text-white w-24 sm:w-44">
                          BACK
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden w-6 h-6 self-end ml-2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                          </svg>
                      </router-link>
                  </div>
              </div>
              <div>
                  <div id="summaryProduksi(Large)" class="sm:w-11/12 md:w-full self-center lg:ml-28 lg:w-3/4 bg-white lg:justify-self-center md:justify-center rounded-md h-auto">
                  <div id="headerSummary" class="bg-gray-400 p-1 rounded-t-md text-white text-center font-semibold text-xl">
                      <h1>SUMMARY PRODUKSI</h1>
                  </div>
                  <div class="p-3">
                              <table class="w-full">
                                  <thead >
                                      <tr class="border-b">
                                          <th class="p-1">Line</th>
                                          <th class="p-1">IN</th>
                                          <th class="p-1">HI</th>
                                          <th class="p-1">EX</th>
                                          <th class="p-1">HX</th>
                                          <th class="p-1">TOTAL</th>
                                          <th class="p-1">TOTAL LINE</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr class="border-b text-center">
                                          <th class="p-1">ASSY</th>
                                          <td class="p-1">{{ TypeASSYIN }}</td>
                                          <td class="p-1">0</td>
                                          <td class="p-1">{{ TypeASSYEX }}</td>
                                          <td class="p-1">0</td>
                                          <td class="p-1">0</td>
                                          <td class="p-1 text-center font-bold text-3xl" rowspan="2">{{ Total }}</td>
                                      </tr>
                                      <tr class="border-b text-center">
                                          <th class="p-1">STOCK</th>
                                          <td class="p-1">{{ TypeStockIN }}</td>
                                          <td class="p-1">0</td>
                                          <td class="p-1">{{ TypeStockEX }}</td>
                                          <td class="p-1">0</td>
                                          <td class="p-1">0</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                  </div>
              </div>

          </div>

          <div class="lg:hidden w-full">
              <div class="flex flex-row justify-center gap-x-3 w-full mt-5 sm:gap-x-12">
                  <button class="p-3 bg-red-500 rounded-md text-2xl text-white w-32" @click="add('ASSY')">
                      ASSY
                  </button>
                  <button class="p-3 bg-blue-500 rounded-md text-2xl text-white w-32" @click="add('STOCK')">
                      STOCK
                  </button>
              </div>    
              <div class="flex flex-row justify-center w-full mt-5">
                  <button class="p-3 bg-red-500 rounded-tl-md rounded-bl-md text-xl text-white w-24 sm:w-44">REFRESH</button>
                  <button class="p-3 bg-green-500  text-xl text-white w-24 sm:w-44">CANCEL</button>
                  <router-link to="/TraceOut" class="p-3 bg-blue-500 text-center rounded-tr-md rounded-br-md text-xl text-white w-24 sm:w-44">
                      BACK 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                  </router-link>
              </div>
          </div>


          <div class="w-11/12 absolute z-50 bg-gray-300 lg:mt-[300px] p-1 rounded-md" :class="{hidden: ShowKeyboard}">
            <button @click="ShowKeyboard = !ShowKeyboard" class="p-1 bg-slate-200 rounded-full m-1 text-red-500 float-right shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
          </div>

          <!-- Sementara -->
          <div>
              <button @click="deleteData(0)">HPus</button>
          </div>
          <!-- End Sementara -->
          <div class="w-full">
              <tableData :DataWork="DataWork.list"/>
          </div>

  </section>
</template>

<script setup>
import tableData from '../../components/TraceOut/tableData.vue';
import Header from '../../components/TraceIn/Header.vue';
import SimpleKeyboard from '../../components/TraceOut/SimpleKeyboard.vue';
import { useRoute } from 'vue-router';
import { ref, reactive, onMounted, computed, onUpdated } from "vue";


const ShowKeyboard = ref(true)

let jumlahBarang = ref() // Variable Nilai Baru Percentage Progress Bar

let percentage = ref(281) // Variable Dengan Nilai Awal Percentage Progress Bar


const showInformation = ref(true)

const TitleHeader = ref('TraceOut Input')
const route = useRoute();

// Variable Untuk Insert Data LocalStorage
let Type = ref(route.params.id);
let WorkNo = ref();
let LineIn = ref();
let No = ref(0);
let Dest = ref();
let date = ref();
let TypeListData = ref();
let Time = ref();
let Shift = ref('R');
let TraceIn = ref('A');
let TraceMiddle = ref('-');

const simpan = ref(false)

// Variable untuk Filter Data ASSY/Stock
const counstDestAssyIN = ref(0)
const counstDestAssyEX = ref(0)
const counstDestStockIN = ref(0)
const counstDestStockEX = ref(0)



const input = ref("")
const BackSpace = () => {
    let del =  input.value.replace(/.$/,"")
    console.log(del);
    return input.value = del

}
const onChange = (input) => {
    input = input.value;
}

const onKeyPress = (button) => {
    // console.log("button", button);
    
    if(button == "{bksp}"){
        let del =  input.value.replace(/.$/,"")
        return input.value = del

    }else{
        input.value = input.value + button
    }
    
    console.log(input.value);
}

const onInputChange = (input) => {
    input.value  = input.target.value;
}

// Ngambil Data Dari LocalStorage

    onMounted(() => {
        DataWork.list = JSON.parse(localStorage.getItem("DataWork.list"));
    })

// Ngambil Data Dari LocalStorage

// Seleksi Data Dest ASSY = IN
const TypeASSYIN = computed(() => {
    let TypeDestIN = DataWork.list.filter(function (index) {
        if(index.Dest === 'ASSY'){
            return index.TypeListData === 'IN'
        }
    })
    return counstDestAssyIN.value = TypeDestIN.length;

})

// Seleksi Data Dest ASSY = EX
const TypeASSYEX = computed(() => {
    let TypeDestEX = DataWork.list.filter(function (index) {
        if(index.Dest === 'ASSY'){
            return index.TypeListData === 'EX'
        }
    })
    return counstDestAssyEX.value = TypeDestEX.length;

})

// Seleksi Data Dest STOCK = IN
const TypeStockIN = computed(() => {
    let TypeDestIN = DataWork.list.filter(function (index) {
        if(index.Dest === 'STOCK'){
            return index.TypeListData === 'IN'
        }
    })
    return counstDestStockIN.value = TypeDestIN.length;

})

const Clear = () => {
    input.value = ""
}

// Seleksi Data Dest ASSY = eEX
const TypeStockEX = computed(() => {
    let TypeDestEX = DataWork.list.filter(function (index) {
        if(index.Dest === 'STOCK'){
            return index.TypeListData === 'EX'
        }
    })
    return counstDestStockEX.value = TypeDestEX.length;

})

// Menghitung Jumlah Data Yang Tersimpann Di LocalStorage
const CountNumber = computed(() => {
  return DataWork.list.length;
})

const Total = computed(() => { 
  return DataWork.list.length;
})

// Rumung Untuk Progress Bar Percentage
const TotalOut = computed(() => {
  jumlahBarang.value = DataWork.list.length;
  let hasil = (jumlahBarang.value / percentage.value) * 100;
  return hasil.toFixed(1);
  
})

// Mengambil Tanggal & Tahun & Waktu
const getDate = () => {
  const today = new Date();
  const date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  date.value = date1
  Time.value = time
}

const deleteData = (value) => {
  DataWork.list = DataWork.list.filter((item, index) => {
      if(index != value) {
          return item
      }
  });
  localStorage.setItem("DataWork.list", JSON.stringify(DataWork.list));
}

// Variable Input Data
const DataWork = reactive({ 
  list: [],
})

// Methods Insert Data LocalStorage
const add = (index) => {
    getDate()
    DataWork.list.unshift({
      No: CountNumber.value + 1,
      WorkNo: input.value,
      Dest: index,
      date: date.value,
      Time: Time.value,
      Shift: Shift.value,
      TraceIn: TraceIn.value,
      TraceMiddle: TraceMiddle.value,
      simpan: simpan.value = true,
      TypeListData: TypeListData = Type.value,
      percentage: percentage.value - 1
  })    
  input.value = input.value.replace(/.$/,+9);
  console.log(input.value)
  if(simpan.value == true){
      localStorage.setItem("DataWork.list", JSON.stringify(DataWork.list));
      alert('Data Berhasil Di Tambahkan')
  }else{
      alert('Data Gagal Di Tambahkan ! ! !')
  }
}


</script>


<style>

.n-progress-text__percentage{
  color: white;
}

</style>


<!-- 
Generate Code

function stringGen(){

  var result = '';
  chars = 'ABYSX74102';

  for (var i = 0;i < 6; i++ ) {

      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("idProduk").value = result;

  return result; 

}

Generate Code -->