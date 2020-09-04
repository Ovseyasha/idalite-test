<template>
  <!-- eslint-disable -->
  <div class="main">
    <h1 class="header">Каталог</h1>
    <ul class="categories">
      <nuxt-link class="categories__item" tag="li" v-for="c in categories" :key="c.id" :to="`/category/${c.id}`" >
        {{ c.name }}
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
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
.categories
  margin: 0
  padding: 0
  @media (max-width: 1264px)
    width: 100%
    display: flex
    justify-content: space-between
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
