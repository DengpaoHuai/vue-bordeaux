import { onMounted, ref, type UnwrapRef } from 'vue'

const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null)

  onMounted(() => {
    fetch(url)
      .then((response) => response.json())
      .then((results: UnwrapRef<T>) => {
        data.value = results
      })
  })

  return data
}

export default useFetch
