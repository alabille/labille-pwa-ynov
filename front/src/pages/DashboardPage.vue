<template>
  <div>
    <h1>Bonjour,<br> {{name}} ! 👋</h1>

    <div class="q-pa-md" v-bind:key="list.title" v-for="list in lists">
        <ListCard :title="list.title" :tasks="list.tasks"></ListCard>
    </div>
    <!-- <div v-if="promptModal">
        <CreateListModal :promptModal="promptModal" :onClose="closeAddListModal"></CreateListModal>
    </div> -->
    <q-footer elevated>
      <q-toolbar align="center">
          <q-btn flat round dense icon="menu" />
          <q-btn flat round dense icon="add" class="add" @click="showModal = true" />
          <q-btn flat round dense icon="person" />
      </q-toolbar>
    </q-footer>
    <CreateListModal @close="closeModal" v-if="isModalOpen" />
  </div>
</template>

<script>
import ListCard from 'src/components/ListCard.vue'
import CreateListModal from 'src/components/CreateListModal.vue'
import { ref } from 'vue'

const isModalOpen = ref(false)

export default {
  components: {
    ListCard,
    CreateListModal
  },
  data: () => ({
    name: 'John Doe',
    visible: false,
    message: 'Hello',
    checked: false,
    selected: '',
    promptModal: false,
    lists: [
      { title: 'Courses' },
      {
        title: 'École',
        tasks: [{
          id: 1,
          title: 'Exercice 1',
          done: false
        },
        {
          id: 2,
          title: 'TP 1',
          done: false
        }
        ]
      }
    ],
    result: [],
    loading: false,
    return: {
      showModal: false
    }
  }),
  mounted () {
    console.log('Component mounted')
  },
  async created () {
    console.log('Component created')
    await this.loadResult()
  },
  computed: {
    messageReverse () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    f () {
      this.message = 'Test'
    },
    // closeAddListModal () {
    //   this.promptModal = false
    // },
    // showAddListModal () {
    //   this.promptModal = true
    // },
    openModal () {
      isModalOpen.value = true
    },
    // const closeModal = () => {
    //   isModalOpen.value = false
    // }
    async loadResult () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.result = [
          { title: 'Task 1' },
          { title: 'Task 2' },
          { title: 'Task 3' }
        ]
      }, 2000)
    },
    toggleHidden () {
      this.visible = !this.visible
    }
  },
  watch: {
    message (oldVal, newVal) {
      console.log(oldVal, newVal)
    }
  }
}
</script>
