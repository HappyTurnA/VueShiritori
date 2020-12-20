<template>
  <div>
    <v-container>
      <v-row v-for="(value, key, index) in m_historys" :key="index">
        <v-chip color="green" class="ma-2" text-color="white">{{
          value
        }}</v-chip>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    m_historys: ["しりとり", "りんご", "ゴリラ", "ラッパ", "パンツ"],
  }),
  methods: {
    AddHistory(word) {
      if (this._PreCheck(word)) {
        this.m_historys.push(word);
        return true;
      } else {
        return false;
      }
    },
    _PreCheck(word) {
      if (word.trim() === "") {
        return false;
      }
      const lastWord = this.m_historys[this.m_historys.length - 1];
      const lastChar = lastWord[lastWord.length - 1];
      const startChar = word[0];
      return lastChar === startChar;
    },
  },
};
</script>