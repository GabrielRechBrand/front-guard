<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        © {{year}} made by
        <a href="https://github.com/GabrielRechBrand" target="_blank" rel="noopener">Gabriel Rech Brand</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
