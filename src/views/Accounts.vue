<template>
    <div class="accounts-box">
        <div class="nav">
            <router-link to="/accounts/edit">編輯個人設定</router-link>
            <router-link to="/accounts/password/change">更改密碼</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
    border: solid 1px;
}
.accounts-box{
    display: flex;
    justify-content: center;
}
.nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & a{
        text-decoration: none;
    }
}
</style>