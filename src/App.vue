<!--<template>-->
<!--  <main>-->
<!--    <button-->
<!--        @click="() => {isTaskInput = !isTaskInput}"-->
<!--        class="add-btn"-->
<!--    >{{isTaskInput ? 'Скрыть форму добавления' : 'Добавить'}}</button>-->
<!--    <TaskInput v-if="isTaskInput" @onAddTask="addTask"></TaskInput>-->
<!--    <div class="task-input my-list" v-if="isRedact">-->
<!--      <input v-model="title" placeholder="Title" type="text">-->
<!--      <input v-model="description" placeholder="Description" type="text">-->
<!--      <input v-model="id" placeholder="ID" type="number">-->
<!--      <input v-model="data" placeholder="Data" type="date">-->
<!--      <select v-model="status" title="Статус" >-->
<!--        <option>новая</option>-->
<!--        <option>в работе</option>-->
<!--        <option>выполнена</option>-->
<!--      </select>-->
<!--      <button @click="onRedact(id, currentId)">Редактировать</button>-->
<!--    </div>-->
<!--    <ul class="task-list my-list">-->
<!--      <li v-for="item in taskList" :key="item.id">-->
<!--        <TaskCard @onRemove="removeTask(item.id)" @onRadacted="redactTask(item)" :model="item"></TaskCard>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </main>-->
<!--</template>-->

<!--<script>-->
<!--import TaskInput from "./components/TaskInput.vue";-->
<!--import TaskCard from "./components/TaskCard.vue";-->
<!--import {ref} from 'vue'-->
<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    TaskCard,-->
<!--    TaskInput-->
<!--  },-->
<!--  mounted() {-->
<!--    if(localStorage.getItem('taskList')) {-->
<!--      try {-->
<!--        this.taskList = JSON.parse(localStorage.getItem('taskList'));-->
<!--      } catch(e) {-->
<!--        localStorage.removeItem('taskList');-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  setup() {-->
<!--    let isTaskInput = ref(false)-->
<!--    const isRedact = ref(false)-->
<!--    const title = ref('')-->
<!--    const description = ref('')-->
<!--    const id = ref('')-->
<!--    const data = ref('')-->
<!--    const status = ref('')-->
<!--    const currentId = ref('')-->
<!--    const taskList = ref([{id: 0, data:'1111-11-11', title: 'Create video', description: 'And upload on YT', status: 'новая'}])-->
<!--    const addTask = ({title, description, id, data, status}) => {-->
<!--      if (title && description && id && data && status) {-->
<!--        if (taskList.value.find( x => x.id === id )) {-->
<!--          taskList.value = taskList.value.length ? [...taskList.value.filter(x => x.id !== id), {title, description, id, data, status}] : [{title, description, id, data, status}]-->
<!--        } else {-->
<!--          taskList.value = taskList.value.length ? [...taskList.value, {title, description, id, data, status}] : [{title, description, id, data, status}]-->
<!--        }-->
<!--        saveLocal()-->
<!--        isTaskInput.value = !isTaskInput.value-->
<!--      }-->
<!--    }-->
<!--    const removeTask = (id) => {-->
<!--      taskList.value = taskList.value.filter(x => x.id !== id)-->
<!--      saveLocal()-->
<!--    }-->
<!--    const redactTask = (item) => {-->
<!--      title.value = item.title-->
<!--      description.value = item.description-->
<!--      id.value = item.id-->
<!--      data.value = item.data-->
<!--      status.value = item.status-->
<!--      isRedact.value = true-->
<!--      currentId.value = item.id-->
<!--    }-->
<!--    const onRedact = (id, currentId) => {-->
<!--      isRedact.value = false-->
<!--      removeTask(currentId)-->
<!--      addTask({title: title.value, description: description.value, id: id, data: data.value, status: status.value})-->
<!--      isTaskInput.value = !isTaskInput.value-->
<!--      saveLocal()-->
<!--    }-->
<!--    const saveLocal = () => {-->
<!--      let parsed = JSON.stringify(taskList.value)-->
<!--      localStorage.setItem('taskList', parsed)-->
<!--    }-->
<!--    return {-->
<!--      isTaskInput,-->
<!--      isRedact,-->
<!--      taskList,-->
<!--      title,-->
<!--      description,-->
<!--      id,-->
<!--      data,-->
<!--      status,-->
<!--      currentId,-->
<!--      addTask,-->
<!--      removeTask,-->
<!--      redactTask,-->
<!--      onRedact-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.task-list {-->
<!--  list-style: none;-->
<!--}-->
<!--.add-btn {-->
<!--  margin: auto;-->
<!--}-->
<!--</style>-->

<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link :to="{ name: 'Task', params: { id: '1' } }">About</router-link>-->
<!--  </div>-->
  <main>
    <router-view />
  </main>
</template>