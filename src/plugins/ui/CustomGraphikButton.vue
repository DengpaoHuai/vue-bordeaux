<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['eventcustom'])
type PropsType = {
    content: string
}
const { content } = defineProps<PropsType>()
</script>


<template>
    <button @click="(e: MouseEvent) => emit('eventcustom', e)" class="custom-button">
        {{ content }}
    </button>
</template>


<style scoped>
.custom-button {
    background-color: #fd44b9;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>