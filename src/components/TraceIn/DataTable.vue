<template>
  <!--Container-->
  <!-- <div class="container w-full xl:w-auto  mx-auto px-2"> -->

  <!--Card-->
  <!-- <div id='recipients' class=" lg:mt-0 rounded-md shadow-md bg-white pb-4">


    <table id="example" class="display nowrap" style="width:100%;">
        <thead class="bg-slate-300 rounded-t-md">
            <tr>
                <th data-priority="2" class="p-3">No</th>
                <th data-priority="3" class="p-3">Work NO</th>
                <th data-priority="4" class="p-3">Dest</th>
                <th data-priority="5" class="p-3">Date</th>
                <th data-priority="6" class="p-3">Time</th>
                <th data-priority="7" class="p-3">Shift</th>
                <th data-priority="8" class="p-3">TraceIn</th>
                <th data-priority="9" class="p-3">Trace Middle</th>
            </tr>
        </thead>
        <tbody >
            <tr class="p-3" v-for="(items, index) in DataWork">
                <td class="p-3 text-center">{{ items.No }}</td>
                <td class="p-3 text-center">{{ items.WorkNo }}</td>
                <td class="p-3 text-center">{{ items.Dest }}</td>
                <td class="p-3 text-center">{{ items.date }}</td>
                <td class="p-3 text-center">{{ items.Time }}</td>
                <td class="p-3 text-center">{{ items.Shift }}</td>
                <td class="p-3 text-center">{{ items.TraceIn }}</td>
                <td class="p-3 text-center">{{ items.TraceMiddle }}</td>
            </tr>
        </tbody>

    </table>


</div> -->
  <!--/Card-->

  <!-- </div> -->
  <!--/container-->

  <n-space vertical :size="12" class="">
    <n-data-table
      ref="table"
      :max-height="150"
      :columns="columns"
      :data="DataWork"
      :scroll-y="1800"
      :pagination="pagination"
    />
  </n-space>
</template>

<script setup>
import { defineComponent, ref, defineProps } from "vue";

const columns = [
  {
    title: "NO",
    key: "No",
    width: 100,
  },
  {
    title: "WorkNo",
    key: "WorkNo",
    width: 200,
    fixed: "right",
  },
  {
    title: "PartCode",
    key: "PartCode",
    width: 200,
  },
  {
    title: "Type",
    key: "Type",
    width: 150,
  },
  {
    title: "Line",
    key: "Line",
    width: 150,
  },
  {
    title: "Date",
    key: "Date",
    width: 150,
  },
  {
    title: "Time",
    key: "Time",
    width: 150,
  },
  {
    title: "Shift",
    key: "Shift",
    width: 150,
  },
];

const tableRef = ref(null);

defineProps({
  DataWork: Array,
});
</script>
