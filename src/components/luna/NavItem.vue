<template>
  <router-link :class="{
    '__luna-header-nav-item': true,
    '__luna-header-nav-item-image': type==='image',
    '__luna-header-nav-item-active': isActive
    }"
    :to="link">
    <slot/>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LUNA_NavItem extends Vue {
  @Prop({ default: '' }) public link!: string;
  @Prop({ default: '' }) public type!: string;
  get isActive(): boolean {
    return this.$route.path === this.link;
  }
}
</script>

<style lang="scss">
.__luna-header-nav-item {
  box-sizing: border-box;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  margin: 0 10px;
  display: inline-block;
  font-weight: normal;
  padding-bottom: 5px;
  @media (min-width: $screen-tablet) {
    margin: 0 11px;
    font-size: 19px;
  }
  @media (min-width: $screen-desktop) {
    margin: 0 20px;
    padding-bottom: 10px;
    font-size: 21px;
  }
  @media (min-width: $screen-lg-desktop) {
    margin: 0 27px;
    font-size: 23px;
  }
  &-active {
    color: #fff;
    font-weight: bold;
    border-bottom: 1px solid #fff;
    @media (min-width: $screen-desktop) {
      border-bottom: 2px solid #fff;
    }
  }
  &-image {
    padding: 0;
    img {
      height: 30px;
      vertical-align: middle;
      @media (min-width: $screen-tablet) {
        height: 35px;
      }
      @media (min-width: $screen-desktop) {
        height: 40px;
      }
      @media (min-width: $screen-lg-desktop) {
        height: 55px;
      }
    }
  }
  &-active.__luna-header-nav-item-image {
    border-bottom: none;
  }
}
</style>
