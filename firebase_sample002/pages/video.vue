<template>
  <div>
    <h1>
      Video
    </h1>
    <div class="container">
      <div class="player-container">
        <vue-core-video-player src="https://storage.googleapis.com/myapp-5fb21.appspot.com/movies/%D0%92%D0%BF%D0%B5%D1%80%D1%91%D0%B4%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F!.mp4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 600px;
}
</style>
