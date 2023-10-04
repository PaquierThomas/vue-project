<script setup>
import MyButton from '../elements/MyButton.vue'
import MyIconFood from '../elements/MyIconFood.vue'

const props = defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  rating: String,
  price: String,
  buttonLabel: String
})
</script>
<template>
  <div class="card">
    <div class="card__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>

    <div class="card__content">
      <div class="card__firstline">
        <h2 size="small">{{ title }}</h2>
        <div class="card__rating">
          <MyIconFood name="StarFilled" size="small" background="no-bg" />
          <h3>{{ rating }}</h3>
        </div>
      </div>
      <div class="card__secondline">
        <MyButton class="card__button" variant="rounded" size="small">{{ buttonLabel }}</MyButton>
        <h3>${{ price }}</h3>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  // 35px pour la bordure
  // 70% pour l'image
  // max-width: 500px;
  // min-width: 450px;
  // aspect-ratio: 1/1;

  padding: rem(50) rem(10);
  max-width: rem(350);
  border-radius: rem(20);
  border: rem(1) solid $gray;
  overflow: hidden;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: $primary-font-family;
    padding: 0 rem(50);
    text-align: center;
    gap: rem(20);
    > * + * {
      margin-top: rem(10);
    }
    h2 {
      font-size: rem(30);
      font-weight: 600;
    }
  }
  &__button {
    text-align: center;
  }
}
</style>
