<template>


    <div class="overflow-x-auto m-5 md:m-24 relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="md:py-3 md:px-6">
                    <div class="flex items-center">
                        No 
                        
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    Work No
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Dest
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Date
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Time                        
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Shift                        
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Trace IN
                    </div>
                </th>
                <th scope="col" class="py-3 px-6">
                    <div class="flex items-center">
                        Trace Middle
                    </div>
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white pl-7">
                    1
                </th>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white pl-2">
                    AAA08KR00001
                </th>
                <td class="py-4 px-6 pl-2">
                    ASSY Line
                </td>
                <td class="py-4 px-6 pl-2">
                    2022-08-23
                </td>
                <td class="py-4 px-6 pl-5">
                    11:20:08
                </td>
                <td class="py-4 px-6 pl-9">
                    R 
                </td>
                <td class="py-4 px-6 pl-12">
                    A
                </td>
                <td class="py-4 px-6 pl-[70px]">
                    -
                </td>
                
            </tr>
            
        </tbody>
    </table>
</div>


</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  DataWork: Array
})

</script>