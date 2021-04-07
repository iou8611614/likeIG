<template>
    <div class="accounts-box">
        <div class="page nav">
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
    width: 100%;
    height: 100%;
}
.nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 846px;
    & a{
        text-decoration: none;
        width: 100%;
        padding: 1rem;
        text-align: left;
    }
}
</style>