<template>
  <div>
      <input type="text" v-model="inputData"/>
      <div>
          <div v-for="(songs, index) in result"
          :key="index">
            <p>{{songs}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputData: "",
            result: this.$store.state.search.melon.data || []
        }
    },
    watch: {
        inputData: function(val) {
            const this_out = this;
            console.log(val);
            this.$store.dispatch("search", val)
            .then((result) => {
                this_out.result = result.melon.data;
                console.log(this_out.result);
            })
        }
    }
}
</script>

<style>

</style>