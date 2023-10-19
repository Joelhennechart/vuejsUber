<template>
  <div class="restaurant--row">
      <h2 class="title">
          Nos restaurants
          
      </h2>
      <div class="wrapper--card">
          <!--<Router-link class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" :to="{name:'Restaurant', params: {name:restaurant.name}}"> #}
              <RestaurantCard  :info_restaurant="restaurant"/>
          </Router-link> -->
          <Routerlink class="restaurant--wrapper" v-for="(restaurant, index) in three_restaurant" :key="index" 
            :to="{name: 'Restaurant', params: { name : restaurant.name }}">
              <RestaurantCard :info_restaurant="restaurant"/>
          </Routerlink>
      </div>
      
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';

export default {
  name: "RestaurantRow",
  components:{
      RestaurantCard
  },
  props:{
      three_restaurant: Array
  }
  
}
</script>

<style lang="scss">
  .restaurant--row{
      .restaurant--wrapper{
          width: 32%;
      }

      height: 300px;

      .title{
          font-size: 2rem;
      }

      .wrapper--card{
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
  }
  
</style>