<template>
  <section class="post-view">
    <div class="post-head">
      <Content slot-key="intro"/>
    </div>
    <Content />
    <reference></reference>
  </section>
</template>

<script>
import reference from './reference'
export default {
  components: {
      reference
  },
  
}
</script>