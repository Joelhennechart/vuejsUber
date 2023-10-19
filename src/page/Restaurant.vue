<template>
  <RouterLink to="/">
    <div id="return">Retour a la home</div>
  </RouterLink>

  <div>
    <img :src="restaurant.image" alt="">
  </div>
  <p>{{ restaurant.name }}</p>
  <p> Note du restaurant {{ restaurant.note }}</p>
  <p> Temps de livraison {{ restaurant.note }}</p>
</template>

<script>
import { onMounted } from 'vue';
import BDD from '../Bdd';
import { useRoute } from 'vue-router';
export default {
    name:'Restaurant',
    setup () {
      const route = useRoute()
      const restaurant = BDD.find((restaurant) => restaurant.name === route.params.name)
      
      return {
        restaurant
      }
    }
}
</script>

<style lang="scss" scoped>
  #return{
    margin: 25px 45px;
    font-weight: 400;
    cursor: pointer;
      pointer-events: none;
      text-decoration: none;
      color: black;

    &:hover {
      font-weight: 900;
    }
  }

</style>