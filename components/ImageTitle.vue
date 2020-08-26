<template>
  <v-card-title class="title-name pa-1">
    <slot></slot>
  </v-card-title>
</template>

<style lang="scss" scoped>
.title-name {
  font-weight: bold;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}
</style>
