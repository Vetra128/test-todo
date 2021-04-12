<template>
  <div class="task-input my-list">
    <h1>Новая задача</h1>
    <input v-model="title" placeholder="Title" type="text">
    <input v-model="description" placeholder="Description" type="text">
    <input v-model="id" placeholder="ID" type="number">
    <input v-model="data" placeholder="Data" type="date">
    <select v-model="status" title="Статус" >
      <option>новая</option>
      <option>в работе</option>
      <option>выполнена</option>
    </select>
    <button @click="onAddTask">Add task</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from "../router"
import { store } from '../store'
export default {
  setup(props, context) {
    const title = ref('')
    const description = ref('')
    const id = ref('')
    const data = ref('')
    const status = ref('')
    const onAddTask = () => {
       if(title.value === '' || description.value === '' || id.value === '' || data.value === '' || status.value === '') {
         alert('Заполните поля данных')
       } else {
         store.commit('addLocalTask',{ title: title.value, description: description.value, id: id.value, data: data.value, status: status.value })
         router.push('/')
       }
    }
    return {
      title,
      description,
      id,
      data,
      status,
      onAddTask
    }
  }
}
</script>

<style scoped>
.task-input {
  margin: 10px 0;
}
</style>