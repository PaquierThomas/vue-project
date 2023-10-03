<script setup>
import { computed } from 'vue'

import ArrowLeft from '../icons/ArrowLeft.vue'
import ArrowRight from '../icons/ArrowRight.vue'
import ChevronLeft from '../icons/ChevronLeft.vue'
import ShoppingBag from '../icons/ShoppingBag.vue'
import Play from '../icons/Play.vue'
import IconTooling from '../icons/IconTooling.vue'
import Search from '../icons/Search.vue'
import MapPin from '../icons/MapPin.vue'
import Clock from '../icons/Clock.vue'
import Phone from '../icons/PhoneCall.vue'
import Star from '../icons/Star.vue'
import Ustensil from '../icons/Ustensil.vue'
import UstensilCrossed from '../icons/UstensilCrossed.vue'
import Facebook from '../icons/Facebook.vue'
import Instagram from '../icons/Instagram.vue'
import Linkedin from '../icons/Linkedin.vue'
import Twitter from '../icons/Twitter.vue'
import Truck from '../icons/Truck.vue'

const props = defineProps({
  background: String,
  name: String,
  size: String
})

const className = computed(() => ({
  ' -orange': props.background === 'orange',
  ' -tangerine': props.background === 'tangerine',
  ' -black': props.background === 'black',
  ' -no-bg': props.background === 'no-bg',
  ' -small': props.size === 'small',
  ' -medium': props.size === 'medium',
  ' -large': props.size === 'large'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'left-arrow':
      return ArrowLeft
    case 'right-arrow':
      return ArrowRight
    case 'chevron-left':
      return ChevronLeft
    case 'shopping-bag':
      return ShoppingBag
    case 'play':
      return Play
    case 'search':
      return Search
    case 'map-pin':
      return MapPin
    case 'clock':
      return Clock
    case 'phone':
      return Phone
    case 'star':
      return Star
    case 'fork-knife':
      return Ustensil
    case 'fork-knife-crossed':
      return UstensilCrossed
    case 'truck':
      return Truck
    case 'facebook':
      return Facebook
    case 'instagram':
      return Instagram
    case 'linkedin':
      return Linkedin
    case 'twitter':
      return Twitter

    default:
      return IconTooling
  }
})
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  border-radius: 100%;
  background: $white;
  color: $black;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  width: rem(50);
  align-items: center;
  justify-content: center;
  svg {
    width: 60%;
  }

  &.-orange {
    background: $primary-color;
    color: $white;
    svg {
      fill: $white;
    }
  }
  &.-tangerine {
    background: $secondary-color;
    color: $primary-color;
    box-shadow: none;
  }

  &.-black {
    background: $black;
    color: $white;
  }
  &.-no-bg {
    background: none;
    box-shadow: none;
  }
  &.-small {
    height: rem(50);
    width: rem(50);
  }
  &.-medium {
    height: rem(88);
    width: rem(88);
  }
  &.-large {
    height: rem(98);
    width: rem(98);
  }
}
</style>
