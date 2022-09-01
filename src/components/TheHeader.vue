<template>
  <nav
    class="navbar navbar-expand-sm fixed-top navbar-dark bg-dark"
    aria-label="Offcanvas navbar large"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <div class="d-flex align-items-center">
          <img :src="logo" class="logo" />
          <span class="navbar-title">NxCrud</span>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label"
      >
        <div class="offcanvas-header">
          <img :src="logo" class="logo" />
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <HeaderItem :options="headerOptions" />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import HeaderItem from "./HeaderItem.vue";
import LogoSvg from "./icons/nexum-white-icon.png";

export default {
  name: "TheHeader",
  components: {
    HeaderItem,
  },
  data: () => {
    return {
      headerOptions: ["Users", "Register"],
      logo: LogoSvg,
    };
  },
};
</script>

<style scoped>
* {
  color: hsla(160, 100%, 37%, 1) !important;
}
.navbar-title {
  font-size: 28px;
  font-weight: 600;
  margin-left: 1rem;
}
.logo {
  width: 30px;
  height: 40px;
}
</style>
