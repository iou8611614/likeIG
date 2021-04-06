<template>
    <div class="profile-box">
        <section class="section-name-picture">
            <div class="set-picture">
                <img class="selfie" src="../assets/selfie.png" alt="" title="user-picture">
                <div class="change-picture">
                    <h1>{{accountName}}</h1>
                    <button @click.prevent="changePicture">變更大頭貼照</button>
                </div>
            </div>
        </section>
        <section>
            <form action="">
                <div class="form-item">
                    <label for="user">姓名</label>
                    <section class="section-name">
                        <input type="text" name="user" v-model="userName" :disabled="!changeConfirm">
                        <button @click.prevent="changeConfirm = !changeConfirm">
                            <span v-show="!changeConfirm">變更姓名</span>
                            <span v-show="changeConfirm">變更完成</span>
                        </button>
                    </section>
                </div>
                <div class="form-item">
                    <label for="account">用戶名稱</label>
                    <input type="text" name="account" v-model="accountName">
                </div>
                <div class="form-item">
                    <label for="">網站</label>
                    <input type="text" name="" v-model="webURL">
                </div>
                <div class="form-item">
                    <section class="section-profile">
                        <label for="userProfile">個人簡介</label>
                        <textarea name="userProfile" v-model="profile"></textarea>
                    </section>
                </div>
                <div class="form-item">
                    <label for="">電子郵件</label>
                    <input type="text" name="" v-model="userEmail">
                </div>
                <div class="form-item">
                    <label for="">電話號碼</label>
                    <input type="text" name="" v-model="phone">
                </div>
                <div class="form-item">
                    <label for="">性別</label>
                    <input type="text" name="" v-model="gender">
                </div>
                <div class="button-group">
                    <button @click.prevent="sendProfile">提交</button>
                    <button @click.prevent="deactivatedAccount">暫時停用我的帳號</button>
                </div>
            </form>
        </section>

    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    setup(){
        // load user account name from server or vuex.
        let userName = ref("Jason");
        let changeConfirm = ref(false);
        // load user account name from server or vuex.
        let accountName = ref("iou8611614");
        let webURL = ref("website URL");
        let profile = ref("");
        let userEmail = ref("");
        let phone = ref("");
        let gender = ref("");

        function changeUserName(){
            console.log("change user name");
        }
        function changePicture(){
            console.log("change picture");
        }
        function sendProfile(){
            console.log("send profile to server");
        }
        function deactivatedAccount(){
            console.log("account deactivated");
        }
        return{
            userName,
            changeConfirm,
            accountName,
            webURL,
            profile,
            userEmail,
            phone,
            gender,
            changeUserName,
            changePicture,
            sendProfile,
            deactivatedAccount
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    border: 1px solid #000;
}
.profile-box{
    width: 696px;
}
.set-picture{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & img.selfie{
      width: 38px;
      height: 38px;
      border-radius: 20px;
    }
}
.form-item{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}
input[type="text"]{
    width: 355px;
    height: 32px;
}
textarea{
    max-width: 355px;
    min-width: 355px;
    height: auto;
    font-size: 18px;
}
.section-name{
    display: flex;
    flex-direction: column;
}
.section-profile{
    display: flex;
}
</style>
