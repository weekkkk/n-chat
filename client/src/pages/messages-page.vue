<script lang="ts" setup></script>

<template>
  <ul class="messages f fd-col h-100">
    <div class="nc-message px-3 f jc-fe">
      <div class="f fd-col px-3 py-2 br-3 bg-brand">
        <p class="c-default">Lorem ipsum dolor sit amet</p>
        <p class="c-second-0 fs-caption ta-r">00:00</p>
      </div>
    </div>

    <div class="nc-message px-3 f jc-fs">
      <div class="f fd-col px-3 py-2 br-3 bg-second-0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          mollitia, tempore consectetur, quas delectus quibusdam enim rem
          accusantium perferendis ducimus atque facilis? Ea corporis velit ipsa
          enim, dolore suscipit iure?
        </p>
        <p class="c-second-100 fs-caption ta-r">00:00</p>
      </div>
    </div>

    <div class="nc-message px-3 f jc-fe">
      <div class="f fd-col px-3 py-2 br-3 bg-brand">
        <p class="c-default">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          mollitia, tempore consectetur, quas delectus quibusdam enim rem
          accusantium perferendis ducimus atque facilis? Ea corporis velit ipsa
          enim, dolore suscipit iure?
        </p>
        <p class="c-second-100 fs-caption ta-r">00:00</p>
      </div>
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.nc-message {
  width: 100%;
  margin-bottom: 16px;
  > div {
    max-width: 90%;
    width: fit-content;
  }
}
ul.messages {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
