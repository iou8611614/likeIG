<template>
  <div class="accounts-box">
    <div class="page nav">
      <router-link
        v-for="nav in navList"
        :to="nav.router"
        :key="nav.navName"
        exact
      >
        {{ nav.navName }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const navList = reactive([
      {
        navName: "編輯個人設定",
        router: "/accounts/edit",
        isActive: false
      },
      {
        navName: "更改密碼",
        router: "/accounts/password/change",
        isActive: false
      }
    ]);

    return {
      navList
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: solid 1px;
  box-sizing: border-box;
}
.accounts-box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.nav {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 846px;
  border: solid 1px lightgray;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
  & a {
    border: none;
    text-decoration: none;
    width: 100%;
    padding: 1rem;
    text-align: left;
    border-left: solid 2px white;
    color: black;
    &.router-link-exact-active {
      background-color: white;
      border-left: solid 2px black;
      &:hover {
        background-color: white;
        border-left: solid 2px black;
      }
      &:active {
        color: gray;
        background-color: #fafafa;
        border-left: solid 2px rgb(147, 147, 147);
      }
    }
    &:hover {
      background-color: #fafafa;
      border-left: solid 2px lightgray;
    }
    &:active {
      color: gray;
      background-color: #fafafa;
      border-left: solid 2px rgb(235, 232, 232);
    }
  }
}
</style>
