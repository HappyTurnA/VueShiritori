<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-1">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <v-container>
                <v-row>
                  <v-col>
                    <HistoryView ref="m_historyView"></HistoryView>
                    <WordInput ref="m_input" @confirm="onClick"></WordInput>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import WordInput from "./WordInput";
import HistoryView from "./HistoryView";
export default {
  components: {
    WordInput,
    HistoryView,
  },
  data: () => ({}),
  methods: {
    onClick(word) {
      if (word.trim() === "") {
        return;
      }
      if(!this.$refs.m_historyView.AddHistory(word)) {
          alert("しりとり になっていない");
      }
      this.$refs.m_input.SetEmpty();
    },
  },
};
</script>