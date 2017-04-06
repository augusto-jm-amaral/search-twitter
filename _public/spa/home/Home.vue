<template>
  <section class="home">
    <form v-on:submit.prevent="onSubmit">
      <label>Your name</label>
      <input v-model='name' type="text" name="name">
    </form>
  </section>
</template>
<script src="./Home.js"></script>
<style lang="sass" scoped src="./Home.scss"></style>