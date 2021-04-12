import { createStore } from 'vuex'

const saveLocalTaskList = (list) => {
    let parsed = JSON.stringify(list)
    localStorage.setItem('taskList', parsed)
}

export const store = createStore({
    state: {
      taskList: []
    },
    mutations: {
        getLocalTaskList(state) {
            if(localStorage.getItem('taskList')) {
                try {
                    state.taskList = JSON.parse(localStorage.getItem('taskList'));
                } catch(e) {
                    localStorage.removeItem('taskList');
                }
            }
        },
        removeLocalTask (state, id) {
            state.taskList = state.taskList.filter(x => x.id !== id)
            saveLocalTaskList(state.taskList)
        },
        addLocalTask (state, task) {
            if (state.taskList.find( x => x.id === task.id )) {
                state.taskList = state.taskList.length ? [...state.taskList.filter(x => x.id !== task.id), task] : [task]
            } else {
                state.taskList = state.taskList.length ? [...state.taskList, task] : [task]
            }
            saveLocalTaskList(state.taskList)
        }
    },
    actions: {

    },
    getters: {

    }
})