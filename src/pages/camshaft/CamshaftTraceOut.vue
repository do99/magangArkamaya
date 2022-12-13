<template>
    <Header :TitleHeader="TitleHeader"/>

    <main>
        <div class="flex flex-wrap m-2 flex-1 w-auto items-stretch justify-center gap-y-16 mt-8">
            <div class="flex flex-wrap flex-1 justify-center gap-y-16 md:flex-row-reverse">
                <div id="summaryProduksi" class="sm:w-11/12 md:w-1/2 self-center lg:w-[40%] bg-white md:justify-center rounded-md h-auto">
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
                                <td class="p-2"> {{ TypeASSYEX }} </td>
                                <td class="p-2">0</td>
                                <td class="p-2">0</td>
                                <td class="p-2 text-center font-bold text-5xl" rowspan="2">{{ Total }}</td>
                            </tr>
                            <tr class="border-b text-center">
                                <th class="p-2">Stock</th>
                                <td class="p-2">{{ TypeStockIN }}</td>
                                <td class="p-2">0</td>
                                <td class="p-2">{{ TypeStockEX }}</td>
                                <td class="p-2">0</td>
                                <td class="p-2">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>

            <div id="btnType" class="w-4/5 flex gap-x-4 sm:w-1/2 self-start md:self-center md:justify-center">
                <router-link to="/TraceOutInput/IN" class="w-3/4 sm:w-1/2 md:w-40 lg:w-60 p-4 bg-red-500 text-center text-2xl font-semibold text-white rounded-xl">
                    IN
                </router-link>
                <router-link to="/TraceOutInput/EX" class="w-3/4 p-4 sm:w-1/2 md:w-40 lg:w-60 bg-blue-500 text-center text-2xl font-semibold text-white rounded-xl">
                    EX
                </router-link>
            </div>
 
            </div>
            <div id="table" class="w-11/12 md:w-full self-start">
                <tableData :DataWork="DataWork.list"/>
            </div>
        </div>
    </main>
    
    <!-- <Table /> -->

</template>

<script setup>
import tableData from '../../components/TraceOut/tableData.vue';
import Header from '../../components/TraceIn/Header.vue';
import { ref, reactive, onMounted, computed } from 'vue';

const TitleHeader = ref('TraceOut')
const counstDestStockIN = ref(0)
const counstDestStockEX = ref(0)
const counstDestAssyIN = ref(0)
const counstDestAssyEX = ref(0)

const DataWork = reactive({
  list: []
})

onMounted(() => {
    DataWork.list = JSON.parse(localStorage.getItem("DataWork.list"));
})


const TypeASSYIN = computed(() => {
    let TypeDestIN = DataWork.list.filter(function (index) {
        if(index.Dest === 'ASSY'){
            return index.TypeListData === 'IN'
        }
    })
    return counstDestAssyIN.value = TypeDestIN.length;
})

const TypeASSYEX = computed(() => {
    let TypeDestEX = DataWork.list.filter(function (index) {
        if(index.Dest === 'ASSY'){
            return index.TypeListData === 'EX'
        }
    })
    return counstDestAssyEX.value = TypeDestEX.length;
})

const TypeStockIN = computed(() => {
    let TypeDestIN = DataWork.list.filter(function (index) {
        if(index.Dest === 'STOCK'){
            return index.TypeListData === 'IN'
        }
    })
    return counstDestStockIN.value = TypeDestIN.length;
})

const TypeStockEX = computed(() => {
    let TypeDestEX = DataWork.list.filter(function (index) {
        if(index.Dest === 'STOCK'){
            return index.TypeListData === 'EX'
        }
    })
    return counstDestStockEX.value = TypeDestEX.length;
})

const CountNumber = computed(() => {
  return DataWork.list.length;
})

const Total = computed(() => { 
  return DataWork.list.length;
})

</script>