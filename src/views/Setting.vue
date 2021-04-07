<template>
    <div class="page profile-box">
        <section class="section-name-picture">
            <div class="set-picture">
                <img class="selfie" src="../assets/selfie.png" alt="" title="selfie">
                <div class="change-picture">
                    <h1>{{accountName}}</h1>
                    <a class="change-picture" @click.prevent="openPicturePanel">變更大頭貼照</a>
                </div>
            </div>
        </section>
        <section>
            <form class="form-profile" action="">
                <div class="form-item">
                    <label for="user">姓名</label>
                    <section class="section-name">
                        <input :class="{notAllow:!isChangeUserName,allow:isChangeUserName}" type="text" name="user" v-model="userName" :disabled="!isChangeUserName">
                        <a class="change-username" @click.prevent="isChangeUserName = !isChangeUserName">
                            <span v-show="!isChangeUserName">變更姓名</span>
                            <span v-show="isChangeUserName">變更完成</span>
                        </a>
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
        <section class="picture-panel" v-if="isOpenPicturePanel">
            <form class="form-picture" action="">
                <img class="selfie" src="../assets/selfie.png" alt="" title="selfie">
                <button @click.prevent="uploadPicture">上傳照片</button>
                <input ref="uploadFile" class="upload-picture" type="file">
                <button @click.prevent="closePicturePanel">取消</button>
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
        let isOpenPicturePanel = ref(false);
        let isChangeUserName = ref(false);
        // load user account name from server or vuex.
        let accountName = ref("iou8611614");
        let webURL = ref("website URL");
        let profile = ref("");
        let userEmail = ref("");
        let phone = ref("");
        let gender = ref("");
        let uploadFile = ref(null);

        function changeUserName(){
            console.log("change user name");
        }
        function openPicturePanel(){
            isOpenPicturePanel.value = true;
            console.log("open picture panel", isOpenPicturePanel.value);
        }
        function closePicturePanel(){
            isOpenPicturePanel.value = false;
            console.log("close picture panel", isOpenPicturePanel.value);
        }
        function uploadPicture(){
            uploadFile.value.click();
            uploadFile.value.onchange = function(){
                // upload picture to server then rerender page
                console.log(uploadFile.value.files);
            }
        }
        function sendProfile(){
            console.log("send profile to server");
        }
        function deactivatedAccount(){
            console.log("account deactivated");
        }
        return{
            userName,
            isOpenPicturePanel,
            isChangeUserName,
            accountName,
            webURL,
            profile,
            userEmail,
            phone,
            gender,
            changeUserName,
            openPicturePanel,
            closePicturePanel,
            uploadFile,
            uploadPicture,
            sendProfile,
            deactivatedAccount,
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    // border: 1px solid #000;
}
.notAllow{
    cursor: not-allowed;
}
.allow{
    cursor: text;
}
a.change-picture{
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    color: #0095F6;
    font-weight: bold;
}
a.change-username{
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-size: 14px;
    color: #0095F6;
    font-weight: bold;
}
.profile-box{
    width: 696px;
    height: 846px;
    padding: 2rem 0;
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
    // align-items: center;
    margin: 2rem 0;
}
input[type="text"]{
    display: block;
    width: 355px;
    height: 32px;
}
textarea{
    max-width: 355px;
    min-width: 355px;
    height: auto;
    font-size: 18px;
}

.section-profile{
    display: flex;
}
.picture-panel{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(89, 89, 89, .65);
    top: 0;
    left: 0;
}
.form-picture{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#FFFFFF;
    overflow: hidden;
    width: 400px;
    height: auto;
    border-radius: 12px;
    & img{
        width: 56px;
        height: 56px;
        border-radius: 100%;
        margin: 1rem;
        border: solid 1px;
    }
    & button{
        width: 100%;
        padding: 1rem 0;
        cursor: pointer;
        border-color: lightgray;
        border-width: 1px 0px 0px 0px;
        background-color: #fff;
    }
}
.upload-picture{
    display: none;
}
</style>
