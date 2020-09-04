<template>
  <div class="select">
    <div class="select__text">
      Сортировать по:
      <span class="select__selected" @click="show = !show">
        {{ selected.text }}
      </span>
    </div>
    <div v-if="show" class="select__options">
      <div v-for="o in option" :key="o.type" class="select__option" :class="{'select__option_active' : o.type === selected.type}" @click="select(o)">
        По {{ o.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      option: [
        {
          type: 'price',
          text: 'цене'
        },
        {
          type: 'rating',
          text: 'популярности'
        }
      ],
      selected: {
        type: 'price',
        text: 'цене'
      },
      show: false
    }
  },
  methods: {
    select (o) {
      this.selected = o
      this.show = false
      this.$emit('select', this.selected)
    }
  }
}
</script>

<style lang="sass" scoped>
.select
  position: relative
  &__text

  &__selected
    cursor: pointer
    color: #59606D
    text-transform: lowercase
    &:after
      content: url('/arrow.svg')
      position: relative
      top: -2px
  &__options
    padding-top: 8px
    width: 100%
    position: absolute
    z-index: 2000
    background: #FFFFFF
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px
  &__option
    cursor: pointer
    padding: 4px
    &:hover
      background: darken(#F8F8F8, 10%)
    &_active
      background: #F8F8F8

</style>
