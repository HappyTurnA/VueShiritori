<template>
  <div>
    {{m_endText}}
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
    m_endText: '',
  }),
  methods: {
    AddHistory(word) {
      if (this._PreCheck(word)) {
        this.m_historys.push(word);
        this.m_endText = this._GameEndCheck(word);
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

      // 文字を平仮名に変換
      const convLastChar = convHira(lastChar);
      const convStartChar = convHira(startChar);

      return convLastChar === convStartChar;
    },
    _GameEndCheck(word){  // 「ん」チェック用メンバ
      if (word.trim() === "") {
        return false;
      }
      const lastWord = this.m_historys[this.m_historys.length - 1];
      const lastChar = lastWord[lastWord.length - 1];

      // 文字を平仮名に変換
      const convLastChar = convHira(lastChar);

      if(convLastChar === 'ん'){
        return 'あんたの負けよ！';
      }else{
        return'';
      }

    }
  },
};

// 平仮名変換関数
// param : 1文字
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