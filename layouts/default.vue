<template>
  <div class="main">
    <Header />
    <div class="container">
      <div class="page">
        <div class="page__wrapper">
          <Category class="page__cat" />
          <transition mode="out-in" leave-active-class="animate__animated animate__fadeOut" enter-active-class="animate__animated animate__fadeIn">
            <Nuxt />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" >
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap')
body
  margin: 0
  padding: 0
*
  font-family: 'PT Sans', sans-serif
.main
.container
  padding-top: 98px
  .page
    overflow: hidden
    display: flex
    justify-content: center
    &__wrapper
      display: flex
      @media (max-width: 1264px)
        flex-direction: column
      width: 1264px
      @media (max-width: 1264px)
        width: 960px
      @media (max-width: 960px)
        width: 720px
      @media (max-width: 720px)
        width: 540px
      @media (max-width: 540px)
        width: 90%
    &__cat
      width: 15%
      @media (max-width: 1264px)
        width: 100%
    &__prod
      width: 85%
      @media (max-width: 1264px)
        width: 100%
</style>
