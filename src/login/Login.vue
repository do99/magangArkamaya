<template>
    <div class="flex flex-col md:flex-row h-screen w-screen">
        <div class="h-1/3 md:h-full md:w-2/3 bg-cover bg-center flex"
            style="background-image:url('https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62a05794648c4d6e0d010288_iot%205.jpeg')">
            <div class="w-[200px] h-[200px] bg-white/30 m-auto backdrop-blur-md rounded-full flex">
                <p class="shadow-sm m-auto  text-white font-bold text-3xl text-center">New Engine Sytem</p>
            </div>
        </div>
        <div class="text-center m-auto">
            <div class="w-fit sm:w-64 mx-auto p-5">
                <h1 class="font-bold mb-1">Login Here</h1>

                <n-input type="email" placeholder="Email" v-model:value="value" class="input peer">
                    <template #prefix>
                        <n-icon :component="MailOutline" />
                    </template>
                </n-input>
                <span>{{ errorMessage }}</span>
                <!-- <p class="text-sm m-1 text-pink-700 invisible peer-invalid:visible">Email tidak valid</p> -->

                <n-input placeholder="Password" class="input mb-1" type="password" show-password-on="mousedown">
                    <template #prefix>
                        <n-icon :component="KeyOutline" />
                    </template>
                </n-input>
                <n-button @click="loginOnClick">Login</n-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import {
    KeyOutline, PersonOutline, GlassesOutline, Glasses, MailOutline
} from '@vicons/ionicons5';
import { useMessage } from 'naive-ui';


const message = useMessage()


// const loginOnClick = () => {
//     const result = val.validate();

//     console.log({ result });
//     // message.error("Message");
//     // message.info("Login");
//     // message.success("Berhasil")
// };
</script>