<template>
  <div
      :class="classObject()"
  >
    <div>
      <h4>{{ model.title }}</h4>
      <p>{{ model.id }}</p>
      <p>{{ model.data }}</p>
      <p>{{ model.description }}</p>
    </div>
    <div>
      <button @click="emitOnRadacted">✎</button>
      <button @click="emitOnRemove">❌</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['onDone', 'onRemove'],
  props: {
    model: {
      required: true,
      default: {
        id: 0,
        title: 'Create video',
        description: 'And upload on YouTube',
        data:'1111-11-11',
        status: 'новая'
      }
    }
  },
  setup(props, { emit }) {
    const emitOnRemove = () => {
      emit('onRemove')
    }
    const emitOnRadacted = () => {
      emit('onRadacted', props.model)
    }
    const classObject = () => {
      switch (props.model.status) {
        case 'новая': {
          return 'task-card my-style status-new'
        }
        case 'в работе': {
          return 'task-card my-style status-on-work'
        }
        case 'выполнена': {
          return 'task-card my-style status-done'
        }
        default: {
          return 'task-card my-style'
        }
      }
    }
    return {
      emitOnRemove,
      emitOnRadacted,
      classObject
    }
  }
}
</script>

<style scoped>
.task-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-card.status-new {
  background-color: aqua;
}
.task-card.status-on-work {
  background-color: cornflowerblue;
}
.task-card.status-done {
  background-color: lightgoldenrodyellow;
}
</style>