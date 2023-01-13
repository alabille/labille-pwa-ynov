import { defineStore } from 'pinia'
// import tasksService from 'services/tasks'
// import { useListsStore } from './lists-store'
// import { Notify } from 'quasar'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    task: null
  }),

  actions: {
    // async getAll () {
    //   try {
    //     this.tasks = await tasksService.getAllTasks()
    //   } catch (e) {
    //     Notify.create({
    //       type: 'negative',
    //       position: 'top',
    //       message: 'Une erreur est survenue lors du chargement des tâches'
    //     })
    //   }
    // },
  }
})
