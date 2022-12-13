<template>

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
import { defineComponent, ref, defineProps } from 'vue'

const columns = [
  {
    title: 'NO',
    key: 'No',
    width: 100,
  },
  {
    title: 'WorkNo',
    key: 'WorkNo',
    width: 200,
    fixed: "right",

  },
  {
    title: 'Dest',
    key: 'Dest',
    width: 200,
  },
  {
    title: 'Date',
    key: 'date',
    width: 150,
  },
  {
    title: 'Time',
    key: 'Time',
    width: 150,
  },
  {
    title: 'Shift',
    key: 'Shift',
    width: 150,
  },
  {
    title: 'TraceIn',
    key: 'TraceIn',
    width: 150,
  },
  {
    title: 'Trace Middle',
    key: 'TraceMiddle',
    width: 150,
  },
]

    const tableRef = ref(null)

    defineProps({
      DataWork: Array
  })

</script>
