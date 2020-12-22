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

      // 変換代入先
      let convLastChar = "";
      let convStartChar = "";

      // 文字を平仮名に変換
      convLastChar = convHira(lastChar);
      convStartChar = convHira(startChar);

      return convLastChar === convStartChar;
    },
  },
};

// 平仮名変換関数
// pram : 1文字
// ret  : 平仮名に変換された一文字、paramが平仮名の場合はfalseを返す
function convHira(str) {

  const Kata_Start = 12449;   // カタカナの最初の文字コード
  const Kata_End   = 12538;   // カタカナの最後の文字コード

  // カタカナなら平仮名に変換
  if (Kata_Start <= str.charCodeAt() <= Kata_End) {
    return str.replace(/[\u30A1-\u30FA]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60)
    );
  }else{
    return false;
  }
}

</script>