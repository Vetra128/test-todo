<template>
  <div>
    <ul class="task-list my-list">
      <li v-for="item in taskList" :key="item.id">
        <TaskCard @onRemove="removeTask(item.id)" @onRadacted="redactTask(item)" :model="item"></TaskCard>
      </li>
    </ul>
    <router-link class="add-btn" :to="{ name: 'New' }">Добавить</router-link>
  </div>
</template>

<script>
import TaskCard from "../components/TaskCard.vue";
import router from "../router"
import { store } from '../store'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    TaskCard
  },
  mounted() {
    this.getLocalTaskList()
  },
  methods: {
    ...mapMutations(['getLocalTaskList'])
  },
  computed: {
    ...mapState(['taskList'])
  },
  setup() {
    const addTask = ({title, description, id, data, status}) => {
      store.commit('addLocalTask',{title, description, id, data, status})
    }
    const removeTask = (id) => {
      store.commit('removeLocalTask',id)
    }
    const redactTask = (item) => {
      router.push({ name: 'Task', params: { id: item.id } })
    }
    return {
      addTask,
      removeTask,
      redactTask
    }
  }
}
</script>

<style scoped>
.task-list {
  list-style: none;
}
.add-btn {
  margin: 5px 0;
  border: 1px solid rgb(204, 204, 204);
  padding-bottom: 5px;
  display: block;
  border-radius: 5px;
  text-decoration: none;
}
</style>