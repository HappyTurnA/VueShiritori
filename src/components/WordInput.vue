<template>
  <div>
    <v-container>
      <v-row>
        <v-text-field label="[ ツ ] から始まることば" v-model="m_inputWord"></v-text-field>
        <v-btn @click="$emit('confirm', m_inputWord)" rounded color="primary" dark>決定</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
      m_inputWord: '',
  }),
  methods: {
      SetEmpty() {
          this.m_inputWord = "";
      }
  },
};
</script>