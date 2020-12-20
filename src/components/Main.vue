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
                        <HistoryView></HistoryView>
                        <WordInput></WordInput>
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
  data: () => ({
  }),
};
</script>