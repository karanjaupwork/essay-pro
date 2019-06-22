<template>
  <v-form v-model="valid">
    <v-container fluid grid-list-xl>
      <v-layout wrap align-center>
        <v-flex xs12 sm6 d-flex>
          <v-select :items="types" v-model="order.type" label="Type" outline></v-select>
        </v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-select :items="services" v-model="order.service" label="Service" outline></v-select>
        </v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-select :items="pages" v-model="order.pages" label="Number of pages/words" outline></v-select>
        </v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-select :items="level" v-model="order.level" label="Level" outline></v-select>
        </v-flex>
        <v-flex xs12 sm6 d-flex>
          <v-datetime-picker label="Due Date" v-model="order.due"></v-datetime-picker>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import DatetimePicker from "./DatetimePicker";
export default {
  components: {
    "v-date-time-picker": DatetimePicker
  },
  data: () => ({
    valid: true,
    order: {
      due: "",
      level: "",
      type: "",
      pages: "",
      services: ""
    },
    types: [
      "Essay (any type)",
      "Admission Essay",
      "Annotated Bibliography",
      "Article Review",
      "Book / Movie Review",
      "Business Plan",
      "Case Study",
      "Coursework",
      "Creative Writing",
      "Critical Thinking / Review",
      "Literature Review",
      "Multiple choice questions",
      "Presentation or Speech",
      "Reflective Writing",
      "Report",
      "Research Paper",
      "Research Proposal",
      "Term Paper",
      "Thesis / Dissertation",
      "Other"
    ],
    services: ["Writing", "Rewriting", "Editing", "Proofreading"],
    level: ["High School", "College", "Bachelors", "Masters", "Doctorate"]
  }),
  computed: {
    pages: () => {
      let p = [];
      for (let index = 1; index < 200; index++) {
        p.push({ value: index, text: `${index} pages / ${index * 275} words` });
      }
      return p;
    }
  }
};
</script>

<style>
/* .v-date-time-input {
  padding: 18px 10px;
  font-size: 16px;
  border: solid 2px #727272;
  color: #ab8475;
  width: 100%;
  border-radius: 8px;
} */
</style>
