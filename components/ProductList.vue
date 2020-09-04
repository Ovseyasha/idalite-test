<template>
  <div class="products">
    <ProductFilter class="products__filter" />
    <transition-group class="products__items" enter-active-class="animate__animated  animate__fadeIn" leave-active-class="animate__animated  animate__fadeOut">
      <Product v-for="p in products" :key="p.id" class="products__item" :product="p" />
    </transition-group>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      return this.$store.getters['products/getByCategory'](this.$route.params.id)
    }
  },
  async mounted () {
    if (this.$store.getters['products/get'].length === 0) {
      await this.$store.dispatch('products/read')
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
</style>
