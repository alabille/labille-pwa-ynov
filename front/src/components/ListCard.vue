<template>
  <q-card flat>
    <q-card-section class="card-header">
      <h3 class="card-title">{{cardTitle}}</h3>
      <!-- <h3 :title="list._id">{{ list.title }}</h3> -->
      <q-btn flat icon="more_horiz">
        <q-menu cover auto-close>
          <q-list>
            <q-item clickable>
              <q-item-section @click="onEdit">Modifier</q-item-section>
            </q-item>
            <q-item clickable >
              <q-item-section @click="onDelete">Supprimer</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-card-section>

    <q-card-section class="card-body">
      <div v-if=cardContent class="d-flex flex-column">
          <q-checkbox v-for="task in cardContent" v-bind:key="task.id" v-model="task.done" :label="task.title" />
      </div>
      <p v-else>
          Cette liste ne contient aucune tâche, ajoutez en une depuis la liste
      </p>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat @click="showList">Voir la liste complète</q-btn>
      <!-- <router-link :to="`/list/${list._id}`">Voir la liste complète</router-link> -->
    </q-card-actions>
  </q-card>
</template>

<script>
// import { getList, updateList, deleteList } from '../services/lists'
// import { getAllTasks } from '../services/tasks'
// import { ref } from 'vue'

// const props = defineProps({
//   list: {
//     type: Object,
//     required: true,
//     default: () => ({
//       title: 'Loading...'
//     })
//   }
// })
// const newTaskName = ref('')
// const listCopy = ref(props.list)

export default {
  name: 'ListCard',
  data () {
    return {
      cardTitle: this.title,
      cardContent: this.tasks,
      checked: false
    }
  },
  // methods: {
  //   async showList () {
  //     return getList(props.list._id)
  //   },
  //   async onDelete () {
  //     const deletedList = await deleteList(props.list._id)
  //     if (deletedList) {
  //       window.location.reload()
  //     }
  //   },
  //   async onEdit () {
  //     const updatedList = await updateList(props.list._id, {
  //       title: newTaskName.value
  //     })
  //     if (updatedList) {
  //       listCopy.value.title = newTaskName.value
  //     }
  //   }
  // },
  props: ['title', 'tasks']
}

</script>
