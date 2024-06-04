import { onMounted, ref, type UnwrapRef } from 'vue'

const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null)

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((results: UnwrapRef<T>) => {
        data.value = results
      })
  }

  onMounted(() => {
    getData()
  })

  return {
    data: data,
    refetch: getData
  }
}

export default useFetch
