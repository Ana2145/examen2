<template>
  <div>
  <b-carousel
      id="carousel-1"
      fade
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="20%"
      style="text-shadow: 1px 1px 2px #ffffff;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>v
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=56"></b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>