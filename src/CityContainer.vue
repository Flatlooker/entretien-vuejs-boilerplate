<template>
   <div>
      
      <div class="country" @click="counterInc()">
        <div>
          City: {{flat.city}}
        </div>
      <div>
        Area: {{flat.area}} 
      </div>
      <div>
        Rent: {{flat.rent}} 
      </div>
      <div>
        Views: {{counter}}
      </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    flat: {
      default: () => null
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    counterInc() {
      this.counter++;
    }
  },
  watch: {
    counter: {
      handler: function() {
        this.$emit('counterClick');
      }
    }
  }
}
</script>

<style>

</style>