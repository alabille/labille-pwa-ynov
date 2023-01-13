<template>
  <q-dialog v-model="prompt" persistent >
    <q-card>
      <q-card-section>
        <div>Créer une nouvelle liste</div>
      </q-card-section>

      <q-card-section>
        <p>List name</p>
        <q-input outlined v-model="text" autofocus @keyup.enter="prompt" label="Ex: Courses" />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn @click="onClose" flat label="Annuler" v-close-popup />
        <q-btn @click="addList" flat label="Créer" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'CreateListModal',
  props: ['onClose', 'promptDialog'],
  data () {
    return {
      prompt: this.promptDialog,
      text: ''
    }
  }
}
</script>
