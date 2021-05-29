<template>
  <vue-word-cloud
    style="height: 480px; width: 640px"
    :words=words
    :color="
      ([, weight]) =>
        weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'
    "
    font-family="Roboto"
  />
</template>

<script>
import VueWordCloud from "vuewordcloud";
import { get_word_cloud } from "./api";

export default {
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  data() {
    return {
        words: [
        ]
    };
  },
  mounted(){
      this.fetch_data()
  },
  methods: {
      fetch_data(){
        let $this = this;
        get_word_cloud().then(function(res){
            $this.words = res.data
        })
      }
  }
};
</script>