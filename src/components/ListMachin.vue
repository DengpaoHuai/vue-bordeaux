<script setup lang="ts">

type PropsType = {
    list: [];
    keyObject: string
}
const { list, keyObject } = defineProps<PropsType>()

</script>


<template>

    <div v-for="(machin, index) in list" :key="index">
        <p>{{ keyObject }} : {{ machin[keyObject] }}</p>
    </div>


</template>