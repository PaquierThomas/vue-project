<script setup>
import MyButton from '../elements/MyButton.vue'
import MyIconFood from '../elements/MyIconFood.vue'

const props = defineProps({
  imageAlt: String,
  imageSrc: String,
  title: String,
  description: String,
  buttonLabel: String
})
</script>
<template>
  <div class="card">
    <div class="card__image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>

    <div class="card__content">
      <MyIconFood name="fork-knife" size="large" background="tangerine" />
      <h2 size="small">{{ title }} {{ title }}</h2>
      <p>{{ description }}</p>
      <!-- <div class="card__button">
        <MyButton variant="rounded" size="small">{{ buttonLabel }}</MyButton>
      </div> -->
    </div>
  </div>
</template>
<style lang="scss">
.card {
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
