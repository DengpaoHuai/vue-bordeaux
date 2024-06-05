<script setup lang="ts">
import { useQuery, useQueryClient } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import { getData } from "@/services/planet.services"
import { onMounted, onUnmounted, ref } from 'vue';
const router = useRouter()

const page = ref(1)
const { data, isLoading } = useQuery({
    queryKey: ['planets', page],
    queryFn: () => getData(page.value),
    gcTime: 1000 * 60,
    staleTime: 5000,
})


const queryClient = useQueryClient()


</script>

<template>
    <RouterLink to="/list_movies">aller sur les people</RouterLink>
    <button @click="router.push('/movies_list')"></button>
    <div class="loading" v-if="isLoading">
    </div>
    <div v-for="(planet, index) in data?.results" :key="index">
        <p>Name : {{ planet.name }}</p>
    </div>

    <button @click="page--">Previous</button>

    <button @click="page++">Next</button>

    <button @click="queryClient.invalidateQueries('planets')">Refresh</button>
</template>

<style scoped>
.loading {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 4px solid black;
    border-top-color: white;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>