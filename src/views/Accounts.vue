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
    // border: solid 1px;
    box-sizing: border-box;
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
    justify-content: start;
    align-items: center;
    height: 846px;
    border: solid 1px lightgray;
    border-radius: 5px 0 0 5px;
    overflow: hidden;
    & a{
        border: none;
        text-decoration: none;
        width: 100%;
        padding: 1rem;
        text-align: left;
        border-left: solid 2px white;
        color: black;
        
        &:hover{
            background-color: #FAFAFA;
            border-left: solid 2px lightgray;
        }
        &:active{
            color: gray;
            background-color: #FAFAFA;
            border-left: solid 2px rgb(235, 232, 232);
        }
        // &:focus{
        //     color: black;
        //     background-color: white;
        //     border-left: solid 2px black;
        // }
    }
}
</style>