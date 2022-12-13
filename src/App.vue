<template>
  <!-- <router-view /> -->
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider placement="bottom-right">
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import {
  darkTheme, 
  NConfigProvider
} from 'naive-ui'

const themeOverrides = {
  // common: {
  //   primaryColor: '#FF0000'
  // },
  // Button: {
  //   textColor: '#FF0000'
  // },
  // Select: {
  //   peers: {
  //     InternalSelection: {
  //       textColor: '#FF0000'
  //     }
  //   }
  // }
}
</script>