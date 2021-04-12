<template>
  <div class="task-card">
    <h1>Редактировать задачу {{ id }}</h1>
    <p>
      Наименование
      <input v-model="title" placeholder="Title" type="text">
    </p>
    <p>
      Описание
      <input v-model="description" placeholder="Description" type="text">
    </p>
    <p>
      ID
      <input v-model="id" placeholder="ID" type="number">
    </p>
    <p>
      Дата
      <input v-model="data" placeholder="Data" type="date">
    </p>
    <p>
      Статус
      <select v-model="status" title="Статус" >
        <option>новая</option>
        <option>в работе</option>
        <option>выполнена</option>
      </select>
    </p>
    <div>
      <button @click="redactTask">✎Редактировать✎</button>
      <router-link to='/'>На главную</router-link>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import router from "../router"
import { store } from '../store'
export default {
  props: ["id"],
  setup(props) {
    store.commit('getLocalTaskList')
    const temp = store.state.taskList.filter(x => x.id === props.id)[0]
    if (!temp) {
      router.push('/')
    } else {

    }
    const title = ref(temp.title || '')
    const description = ref(temp.description || '')
    const id = ref(temp.id || '')
    const data = ref(temp.data || '')
    const status = ref(temp.status || '')
    const redactTask = () => {
      store.commit('removeLocalTask', props.id)
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
      redactTask
    }
  }
}
</script>
<style>
</style>