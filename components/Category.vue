<template>
  <!-- eslint-disable -->
  <div class="main">
    <h1 class="header">
      Каталог
      <button @click="menu = !menu" class="btn">
        <span class="btn__line"></span>
        <span class="btn__line"></span>
        <span class="btn__line"></span>
      </button>
    </h1>
    <ul class="categories" :style="menu ? 'display: block' : ''">
      <nuxt-link class="categories__item" tag="li" v-for="c in categories" :key="c.id" :to="`/category/${c.id}`" >
        {{ c.name }}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: false
    }
  },
  computed: {
    categories () {
      return this.$store.getters['category/get']
    }
  },
  async mounted () {
    if (this.categories.length === 0) {
      await this.$store.dispatch('category/read')
    }
    if (typeof (this.$route.params.id) === 'undefined') {
      this.$router.push(`/category/${this.categories[0].id}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.main
  display: flex
  flex-direction: column
  align-items: flex-start
.header
  font-weight: bold
  font-size: 32px
  line-height: 41px
  color: #1F1F1F
  margin: 0
  padding: 0
  margin-bottom: 24px
  display: flex
  align-items: center
  .btn
    background: none
    outline: none
    border: none
    display: none
    cursor: pointer
    @media (max-width: 1264px)
      margin-top: 4px
      width: 40px
      height: 20px
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
    &__line
      width: 100%
      height: 2px
      background: black
.categories
  margin: 0
  padding: 0
  @media (max-width: 1264px)
    display: none
  &__item
    margin-bottom: 16px
    list-style: none
    cursor: pointer
    text-decoration: none
    color: #959DAD
    &:hover
      color: #59606D
  .nuxt-link-active
    color: #1F1F1F
    text-decoration-line: underline
</style>
