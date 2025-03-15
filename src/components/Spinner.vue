<template>
    <div class="spinnerComponent" role="status"></div>
</template>

<style scoped>

.spinnerComponent {
  display: inline-block;
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  vertical-align: text-bottom;
  border: 10px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}

@-webkit-keyframes spinner-border {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner-border {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>

<script setup>

</script>