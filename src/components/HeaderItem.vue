<template>
  <a
    href="#"
    class="nav-item nav-link"
    v-for="(item, index) in options"
    v-bind:key="index"
  >
    {{ item }}
  </a>
</template>

<script>
export default {
  name: "HeaderItem",
  props: {
    options: Array,
  },
};
</script>

<style scoped>
a {
  /* padding: 5px 1.5rem; */
  color: hsla(160, 100%, 37%, 1) !important;
}

a:hover {
  color: hsla(160, 100%, 37%, 0.6) !important;
}

/* a:first-child {
  border-right: 1px solid white;
}
a:last-child {
  border-left: 1px solid white;
} */
</style>
