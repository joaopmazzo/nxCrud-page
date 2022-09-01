<template>
  <header>
    <TheHeader />
  </header>
  <main>
    <UsersTable />
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UsersTable from "./components/UsersTable.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    UsersTable,
  },
};
</script>

<style scoped>
@import "./assets/base.css";

header {
  background-color: #222222;
  border-bottom: 1px solid gray;
  border-radius: 0 0 8px 8px;
}
</style>
