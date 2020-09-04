<template>
  <div class="products">
    <ProductFilter class="products__filter" @select="filterUpd" />
    <transition-group class="products__items" enter-active-class="animate__animated  animate__fadeIn" leave-active-class="animate__animated  animate__fadeOut">
      <Product v-for="p in products" :key="p.id" class="products__item" :product="p" />
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: 'price'
    }
  },
  computed: {
    products () {
      return this.$store.getters['products/getByCategoryFilter']({ id: this.$route.params.id, filter: this.filter })
    }
  },
  async mounted () {
    if (this.$store.getters['products/get'].length === 0) {
      await this.$store.dispatch('products/read')
    }
  },
  methods: {
    filterUpd (v) {
      this.filter = v.type
    }
  }
}
</script>

<style lang="sass" scoped>
$m: 16px
.products
  display: flex
  flex-direction: column
  &__filter
    align-self: flex-end
  &__items
    width: 100%
    display: flex
    flex-wrap: wrap
  &__item
    margin: 16px
    flex-basis: calc(25% - #{ $m * 2 })
    @media (max-width: 1264px)
      flex-basis: calc(33% - #{ $m * 2 })
    @media (max-width: 960px)
      flex-basis: calc(50% - #{ $m * 2 })
</style>
