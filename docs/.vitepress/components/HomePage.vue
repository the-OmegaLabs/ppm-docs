<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { computed, shallowRef } from 'vue'
import { iconMap } from './icons'



const members = computed(() => [
  {
    avatar: 'https://github.com/Stevesuk0.png',
    name: 'Stevesuk',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/Stevesuk0' },
      {
        icon: { svg: iconMap.bilibili },
        link: 'https://space.bilibili.com/341884500',
      },
    ],
  },
  {
    avatar: 'https://github.com/bzym2.png',
    name: 'BIZONUSERYAKAMO',
    title: 'Programmer',
    links: [
      { icon: 'github', link: 'https://github.com/bzym2' },
    ],
  },
])
</script>

<template>
  <div flex="~ col wrap" mt8 items-center>
    <h2 text="center gray xl" mt-11 mb-4 pb-2>
      {{ 'Plusto Package Manager developed by ❤' }}
    </h2>
    <VPTeamMembers class="w-full px-4" size="small" :members="members" />
  </div>
</template>

<style></style>
