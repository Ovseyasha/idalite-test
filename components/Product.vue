<template>
  <div class="product">
    <div class="product__wrapper">
      <div class="product__score">
        {{ product.rating }}
      </div>
      <CartBtn :id="product.id" />
      <img :src="`http://front-test.idalite.com${product.photo}`" :alt="product.name" class="product__img">
      <div class="product__desc">
        <h3 class="product__name">
          {{ product.name }}
        </h3>
        <h4 class="product__price">
          {{ product.price | price }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    price (str) {
      return `${str} ₽`
    }
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
.product
  background: #FFFFFF
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 8px
  display: flex
  flex-direction: column
  position: relative
  &__wrapper
    padding: 16px
  &__score
    font-weight: bold
    font-size: 10px
    line-height: 13px
    color: #F2C94C
    position: absolute
    left: 16px
  &__add
    border: none
    background: none
    cursor: pointer
    outline: none
    position: absolute
    right: 16px
    :hover
        fill: black
  &__img
    max-width: 100%
  &__desc
    display: flex
    justify-content: flex-start
    flex-direction: column
  &__name
    text-transform: lowercase
    font-size: 14px
    line-height: 18px
    font-weight: normal
    color: #59606D
    margin: 0
    &:first-letter
      text-transform: uppercase
  &__price
    margin: 0
    color: #1F1F1F
    font-style: normal
    font-weight: bold
    font-size: 14px
    line-height: 18px
</style>
