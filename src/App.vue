<template>
  <div id='app'>
    <router-view></router-view>
    <!-- <div>
      Liste des appartements:
      <CityContainer @counterClick="counterHandler" v-for="f in flats" :key="f.city" :flat="f" />
      <div>
        Total: {{totalCounter}}
      </div> -->

      <!-- <div class="country" v-for="flat in flats" :key="flat.city">
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
      </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
// import CityContainer from "@/CityContainer.vue";
//   export default {
//     data () {
//       return {
//         flats: [
//           {city: 'Paris 18', area: 50, rent: 500},
//           {city: 'Montrouge', area: 30, rent: 750},
//           {city: 'Boulogne', area: 25, rent: 300},
//           {city: 'Paris 17', area: 32, rent: 200},
//           {city: 'Lyon', area: 75, rent: 1000},
//           {city: 'Antony', area: 49, rent: 900},
//         ],
//         totalCounter: 0
//       }
//     },
//     methods: {
//       counterHandler() {
//         this.totalCounter++;
//       }
//     },
//     components: {
//       CityContainer
//     }
//   }
</script>
<style>
.country {
  padding: 5px;
  border: 1px black solid;
  width: 10%;
  margin-top: 5px;
}
</style>