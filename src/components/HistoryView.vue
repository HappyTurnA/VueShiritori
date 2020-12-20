<template>
  <div>
    <v-container>
      <v-row v-for="(value, key, index) in m_historys" :key="index">
        <v-chip color="green" class="ma-2" text-color="white">{{value}}</v-chip>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
      m_historys: [
          'しりとり',
          'りんご',
          'ゴリラ',
          'ラッパ',
          'パンツ'
      ],
      test: "sasasa",
  }),
};
</script>