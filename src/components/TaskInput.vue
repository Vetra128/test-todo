<template>
  <div class="task-input my-list">
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
export default {
  emits: {
    onAddTask({ title, description, id, data, status }) {
      if(title === '' || description === '' || id === '' || data === '' || status === '') {
        alert('Заполните поля данных')
        return false
      }
      return true
    }
  },
  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')
    const id = ref('')
    const data = ref('')
    const status = ref('')
    const onAddTask = () => {
      emit('onAddTask', { title: title.value, description: description.value, id: id.value, data: data.value, status: status.value })
      if (title.value !== '' && description.value !== '' && id.value !== '' && data.value !== '' && status.value !== '') {
        title.value = ''
        id.value = ''
        description.value = ''
        data.value = ''
        status.value = ''
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