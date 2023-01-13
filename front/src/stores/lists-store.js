import { defineStore } from 'pinia'
import { useTasksStore } from './tasks-store'
import { Notify } from 'quasar'
import listsService from 'services/lists'

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [],
    list: null
  }),

  getters: {},

  actions: {
    async getAll () {
      try {
        this.lists = await listsService.getAllLists()
      } catch (e) {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Une erreur est survenue lors du chargement des listes'
        })
      }
    },
    async get (id) {
      try {
        this.list = await listsService.getList(id)
      } catch (e) {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Une erreur est survenue lors du chargement de la liste'
        })
      }
    },
    async create (data) {
      try {
        await listsService.createList(data)
        await this.getAll()
      } catch (e) {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Une erreur est survenue lors de la création de la liste'
        })
      }
    },
    async update (id, data) {
      try {
        const updatedList = await listsService.updateList(id, data)
        await this.getAll()

        if (this.list && this.list._id === id) {
          this.list = updatedList
        }
      } catch (e) {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Une erreur est survenue lors de la mise à jour de la liste'
        })
      }
    },
    async delete (id) {
      try {
        const useTasksStore = useTasksStore()
        await listsService.deleteList(id)

        await this.getAll()
        await useTasksStore.getAll()
      } catch (e) {
        Notify.create({
          type: 'negative',
          position: 'top',
          message: 'Une erreur est survenue lors de la suppression de la liste'
        })
      }
    }
  }
})
