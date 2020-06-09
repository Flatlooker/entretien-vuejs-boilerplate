<template>
  <div id='app'>
    <div>
      Liste des appartements
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        flats: [
          {city: 'Paris 18', area: 50, rent: 500},
          {city: 'Montrouge', area: 30, rent: 750},
          {city: 'Boulogne', area: 25, rent: 300},
          {city: 'Paris 17', area: 32, rent: 200},
          {city: 'Lyon', area: 75, rent: 1000},
          {city: 'Antony', area: 49, rent: 900},
        ],
      }
    }
  }
</script>