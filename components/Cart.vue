<template>
  <!-- eslint-disable -->
  <div class="cart">
    <div class="cart__icon">
      <transition enter-active-class="animate__animated animate__faster animate__rotateIn" leave-active-class="animate__animated animate__faster animate__rotateOut">
        <div class="cart__badge" v-if="count > 0">{{ count }}</div>
      </transition>
      <button class="cart__btn" @click="modal = !modal">
        <svg
          width="24"
          height="27"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.84 0.48C4.06663 0.177833 4.42229 0 4.8 0H19.2C19.5777 0 19.9334 0.177833 20.16 0.48L23.76 5.28C23.9158 5.48772 24 5.74036 24 6V22.8C24 23.7548 23.6207 24.6705 22.9456 25.3456C22.2705 26.0207 21.3548 26.4 20.4 26.4H3.6C2.64522 26.4 1.72955 26.0207 1.05442 25.3456C0.379285 24.6705 0 23.7548 0 22.8V6C0 5.74036 0.0842134 5.48772 0.24 5.28L3.84 0.48ZM5.4 2.4L2.4 6.4V22.8C2.4 23.1183 2.52643 23.4235 2.75147 23.6485C2.97652 23.8736 3.28174 24 3.6 24H20.4C20.7183 24 21.0235 23.8736 21.2485 23.6485C21.4736 23.4235 21.6 23.1183 21.6 22.8V6.4L18.6 2.4H5.4Z"
            fill="#1F1F1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6C0 5.33726 0.537258 4.8 1.2 4.8H22.8C23.4627 4.8 24 5.33726 24 6C24 6.66274 23.4627 7.2 22.8 7.2H1.2C0.537258 7.2 0 6.66274 0 6Z"
            fill="#1F1F1F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.2 9.6C7.86274 9.6 8.4 10.1373 8.4 10.8C8.4 11.7548 8.77928 12.6705 9.45442 13.3456C10.1295 14.0207 11.0452 14.4 12 14.4C12.9548 14.4 13.8705 14.0207 14.5456 13.3456C15.2207 12.6705 15.6 11.7548 15.6 10.8C15.6 10.1373 16.1373 9.6 16.8 9.6C17.4627 9.6 18 10.1373 18 10.8C18 12.3913 17.3679 13.9174 16.2426 15.0426C15.1174 16.1679 13.5913 16.8 12 16.8C10.4087 16.8 8.88258 16.1679 7.75736 15.0426C6.63214 13.9174 6 12.3913 6 10.8C6 10.1373 6.53726 9.6 7.2 9.6Z"
            fill="#1F1F1F"
          />
        </svg>
      </button>
    </div>
    <transition
      enter-active-class="animate__animated animate__faster  animate__slideInRight"
      leave-active-class="animate__animated animate__faster  animate__slideOutRight"
    >
      <div v-if="modal" class="cart__modal modal">
        <div class="modal__wrapper" :style="count > 3? 'overflow-y: auto' : ''">
          <div class="modal__header">
            <h1 class="modal__h">Корзина</h1>
            <button class="modal__close" @click="close">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                />
              </svg>
            </button>
          </div>
          <div class="modal__main">
            <template v-if="count > 0">
              <p class="modal__sub">Товары в корзине</p>
              <div class="modal__items">
                <div class="product" v-for="p in productsInCart" :key="p.id">
                  <img :src="`http://front-test.idalite.com${p.photo}`" :alt="p.name" class="product__img" />
                  <div class="product__desc">
                    <div class="product__info">
                      <div class="product__title">
                        {{ p.name }}
                      </div>
                      <div class="product__price">
                        {{ p.price | price }}
                      </div>
                    </div>
                    <div class="product__score">
                      {{ p.rating }}
                    </div>
                  </div>
                  <button class="product__delete" @click="remove(p.id)">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="#1F1F1F"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <form class="modal__form" @submit.prevent="send">
                <p class="modal__sub">Оформить заказ</p>
                <input class="modal__input" :class="{'modal__input_error' : $v.name.$error}" type="text" v-model.trim="$v.name.$model" placeholder="Ваше имя" />
                <IMaskComponent class="modal__input" :class="phone.length !== 10 ? 'modal__input_error' : ''" :mask="'+7 (000) 000-00-00'" v-model="$v.phone.$model" placeholder="Телефон"/>
                <input class="modal__input" :class="{'modal__input_error' : $v.adress.$error}" type="text" v-model.trim="$v.adress.$model" placeholder="Адрес" />
                <button class="modal__btn" type="submit">Отправить</button>
                <div class="modal__error" v-if="$v.$error">
                  <p v-if="!$v.name.required && $v.name.$dirty">Введите имя!</p>
                  <p v-if="!$v.name.minLength">Слишком короткое имя</p>
                  <p v-if="!$v.phone.required && $v.phone.$dirty">Введите номер!</p>
                  <p v-if="!$v.phone.minLength">Некорректный номер</p>
                  <p v-if="!$v.adress.required && $v.adress.$dirty">Введите адрес!</p>
                  <p v-if="!$v.adress.minLength">Слишком короткий адрес</p>
                </div>
              </form>
            </template>
            <template v-if="count === 0 && !checkout">
              <h2 class="modal__empty">
                Пока что вы ничего не добавили в корзину.
              </h2>
              <button class="modal__btn" @click="modal = !modal">Перейти к выбору</button>
            </template>
            <template v-if="checkout">
              <div class="modal__chekout">
                <img src="/check.png" alt="check">
                <h2>Заявка успешно отправлена</h2>
                <p>Вскоре наш менеджер свяжется с Вами</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
    <transition
      enter-active-class="animate__animated animate__faster  animate__fadeIn"
      leave-active-class="animate__animated animate__faster  animate__fadeOut"
    >
      <div v-if="modal" class="cart__popup" @click="modal = !modal" />
    </transition>
  </div>
</template>

<script>
import { IMaskComponent } from 'vue-imask'
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  components: {
    IMaskComponent
  },
  filters: {
    price (str) {
      return `${str} ₽`
    }
  },
  data () {
    return {
      modal: false,
      checkout: false,
      name: '',
      phone: '',
      adress: '',
      lenName: 2,
      lenAdress: 8
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    adress: {
      required,
      minLength: minLength(8)
    },
    phone: {
      required,
      minLength: minLength(18)
    }
  },
  computed: {
    cart () {
      return this.$store.getters['cart/products']
    },
    count () {
      return this.$store.getters['cart/count']
    },
    productsInCart () {
      return this.$store.getters['products/inCart'](this.cart)
    }
  },
  async mounted () {
    this.$store.dispatch('cart/read')
    if (this.$store.getters['products/get'].length === 0) {
      await this.$store.dispatch('products/read')
    }
  },
  methods: {
    openCart () {
      this.modal = true
    },
    remove (id) {
      this.$store.dispatch('cart/remove', id)
    },
    async send () {
      try {
        this.$v.$touch()
        if (!this.$v.$error) {
          await this.$store.dispatch('cart/clear')
          this.checkout = true
          this.name = ''
          this.phone = ''
          this.adress = ''
        }
      } catch (error) {
      }
    },
    close () {
      this.modal = false
      this.checkout = false
    }
  }
}
</script>

<style lang="sass" scoped>
$grey: #959DAD
button
  outline: none
  border: none
  background: none
  cursor: pointer
  svg
    &:hover
      fill: $grey
input
  outline: none
  border: none
  background: none
  &::placeholder
    color: $grey
.cart
  &__icon
    position: relative
  &__badge
    position: absolute
    right: 0
    width: 12px
    height: 12px
    font-style: normal
    font-weight: bold
    font-size: 8px
    line-height: 10px
    color: #FFFFFF
    border-radius: 50%
    display: flex
    justify-content: center
    align-items: center
    background: $grey
  &__modal
    position: fixed
    z-index: 3000
    background: #FFFFFF
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05)
    border-radius: 8px 0px 0px 8px
  &__popup
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    position: fixed
    z-index: 2000
    background: #FFFFFF
    opacity: 0.8
.modal
  top: 0
  right: 0
  height: 100%
  width: 33%
  display: flex
  justify-content: center
  &__chekout
    margin-top: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  &__wrapper
    margin-top: 25px
    width: 80%
    &::-webkit-scrollbar-button
      background-image: none
      background-repeat: no-repeat
      width: 4px
      height: 0px
    &::-webkit-scrollbar-track
      background-color: #F8F8F8
    &::-webkit-scrollbar-thumb
      -webkit-border-radius: 0px
      border-radius: 2px
      background-color: lighten(#959DAD, 20%)
    &::-webkit-scrollbar-thumb
      background-clip: padding-box
      &:hover
        background-color: #959DAD
    &::-webkit-resize
      background-image: none
      background-repeat: no-repeat
      width: 4px
      height: 0px
    &::-webkit-scrollbar
      width: 6px
  &__header
    display: flex
    justify-content: space-between
    align-items: center
  &__h
    font-style: normal
    font-weight: bold
    font-size: 32px
    line-height: 41px
  &__sub
    font-size: 18px
    line-height: 23px
    color: #59606D
    margin: 0
    padding: 0
  &__empty
    font-style: normal
    font-weight: normal
    font-size: 22px
    line-height: 28px
    color: #000000
  &__items
    display: flex
    flex-direction: column
    .product
      margin-bottom: 12px
      background: #FFFFFF
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05)
      border-radius: 8px
      width: 100%
      display: flex
      justify-content: space-between
      &__img
        height: 120px
        width: auto
      &__desc
        flex-grow: 2
        display: flex
        flex-direction: column
        justify-content: space-between
        padding: 12px
        font-size: 14px
        line-height: 18px
        font-style: normal
        font-weight: normal
      &__title
        text-transform: lowercase
        margin-bottom: 6px
        &:first-letter
          text-transform: uppercase
        color: #59606D
      &__price
        font-weight: bold
        color: #1F1F1F
      &__score
        font-weight: bold
        font-size: 10px
        line-height: 13px
        color: #F2C94C
        align-contetn: flex-end
  &__form
    margin-bottom: 60px
    width: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
  &__input
    margin-top: 16px
    font-size: 16px
    line-height: 21px
    padding: 14px
    background: #F8F8F8
    border-radius: 8px
  &__btn
    margin-top: 24px
    color: #fff
    font-size: 16px
    line-height: 21px
    padding: 14px
    background: #1F1F1F
    border-radius: 8px
    width: 100%
    &:active
      background: #59606D
  &__error
    margin: 0
    margin-top: 20px
    padding: 0
    p
      margin: 0
      &:before
        content: '!! '
        color: #EB5757
</style>
