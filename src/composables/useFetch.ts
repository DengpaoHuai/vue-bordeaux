import { onMounted, ref, type UnwrapRef } from 'vue'

//const useFetch = <T, U extends T[]>(url: string) => {
const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null)

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((results: UnwrapRef<T>) => {
        data.value = results
      })
  }

  /*
  const deleteItemById = async (id: string) => {
    if (!data.value) return
    data.value = data.value.filter((item: any) => item._id !== id)
  }*/

  onMounted(() => {
    getData()
  })

  return {
    data: data,
    refetch: getData
  }
}

export default useFetch
