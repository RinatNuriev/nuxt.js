<script setup lang="ts">
import { cn } from '../../../lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="cn(
    'rounded-xl bg-card text-card-foreground animation border border-transparent transition-color hover:border-[#4826c4]',
    props.class,
  )
    ">
    <slot />
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: scale(0.5) translateY(-30px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.3s ease-in-out;
}
</style>
