<template>
  <div class="header">
    <div class="header__wrapper">
      <!-- <nuxt-link to="/"> -->
      <!-- eslint-disable-next-line -->
      <h1 class="header__item header__item_logo">TestList</h1>
      <!-- </nuxt-link> -->
      <Cart class="header__item header__item_cart" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.header
  z-index: 2
  height: 66px
  display: flex
  justify-content: center
  margin: 0
  top: 0
  left: 0
  width: 100%
  position: fixed
  background: #FFFFFF
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
  border-radius: 0px 0px 8px 8px
  &__wrapper
    display: flex
    justify-content: space-between
    align-items: center
    width: 1264px
    a
      text-decoration: none
  &__item
    &_logo
      font-style: normal
      font-weight: bold
      font-size: 22px
      line-height: 28px
      color: #59606D
</style>
