<script setup lang="ts">
type PropsType = {
    demo: string;
}
const { demo } = defineProps<PropsType>()
</script>

<template>
    <div>
        <slot name="header"></slot>
        <h1>
            {{ demo && "trop long" }}
        </h1>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>
