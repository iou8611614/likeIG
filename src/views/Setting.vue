<template>
    <div class="page profile-box">
        <section class="section-name-picture">
            <div class="set-picture">
                <img class="selfie" src="../assets/selfie.png" alt="" title="selfie">
                <div class="change-picture">
                    <h1>{{profile.accountName}}</h1>
                    <a class="change-picture" @click.prevent="openPicturePanel">變更大頭貼照</a>
                </div>
            </div>
        </section>
        <section>
            <form class="form-profile" action="">
                <div class="form-item">
                    <label for="user">姓名</label>
                    <section class="section-name">
                        <input :class="{notAllow:!isChangeUserName,allow:isChangeUserName}" type="text" name="user" v-model="profile.userName" :disabled="!isChangeUserName">
                        <a class="change-username" @click.prevent="isChangeUserName = !isChangeUserName">
                            <span v-show="!isChangeUserName">變更姓名</span>
                            <span v-show="isChangeUserName">變更完成</span>
                        </a>
                    </section>
                </div>
                <div class="form-item">
                    <label for="account">用戶名稱</label>
                    <div class="account-field">
                        <input type="text" name="account" v-model="profile.accountName">
                        <p class="account-prompt">在大多數情況下，你可以在 14 天後將用戶名稱改回 {{profile.accountName}} 。</p>
                    </div>
                </div>
                <div class="form-item">
                    <label for="">網站</label>
                    <input type="text" name="" v-model="profile.webURL">
                </div>
                <div class="form-item">
                    <label for="userProfile">個人簡介</label>
                    <section class="section-profile">
                        <!-- <label for="userProfile">個人簡介</label> -->
                        <textarea name="userProfile" v-model="profile.userProfile"></textarea>
                    </section>
                </div>
                <div class="form-item">
                    <label for="">電子郵件</label>
                    <input type="text" name="" v-model="profile.email">
                </div>
                <div class="form-item">
                    <label for="">電話號碼</label>
                    <input type="text" name="" v-model="profile.phone">
                </div>
                <div class="form-item">
                    <label for="">性別</label>
                    <!-- <input type="text" name="" v-model="profile.gender"> -->
                    <button class="genderField" @click.prevent="isOpenGenderPanel = true">
                        <input type="text" name="" v-model="profile.gender" readonly>
                    </button>
                </div>
                <div class="btn-group">
                    <button class="submit-btn" @click.prevent="sendProfile">提交</button>
                    <button class="deactive-btn" @click.prevent="deactivatedAccount">暫時停用我的帳號</button>
                </div>
            </form>
        </section>
        <section class="confirm-panel" v-if="isOpenPicturePanel">
            <form class="form-picture" action="">
                <img class="selfie" src="../assets/selfie.png" alt="" title="selfie">
                <button @click.prevent="uploadPicture">上傳照片</button>
                <input ref="uploadFile" class="upload-picture" type="file">
                <button @click.prevent="closePicturePanel">取消</button>
            </form>
        </section>
        <section class="confirm-panel" v-if="isOpenGenderPanel">
            <div class="gender-box">
                <div class="gender-title-block">
                    <button @click.prevent="closeGenderPanel" class="closeGenderIconBtn">
                        <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fill-rule="evenodd"></path></svg>
                    </button>
                    <div class="gender-title">性別</div>
                </div>
                <hr>
                <label for="gender">
                    <input type="radio" name="gender" value="男性" v-model="profile.gender"> 男性
                </label>
                <label for="gender">
                    <input type="radio" name="gender" value="女性" v-model="profile.gender"> 女性
                </label>
                <label for="gender">
                    <input type="radio" name="gender" value="自訂" v-model="profile.gender"> 自訂
                </label>
                <label for="gender">
                    <input type="radio" name="gender" value="不方便回答" v-model="profile.gender"> 不方便回答
                </label>
                <button class="closeGenderBtn" @click.prevent="pickGenderDone">完成</button>
            </div>
        </section>
        <section class="confirm-panel" v-if="isGenderChange">
            <div class="gender-no-save-confirm">
                <div class="no-save-prompt">
                    <span class="prompt-title">尚未儲存變更</span>
                    <p class="prompt-message">你有尚未儲存的變更。確定要取消?</p>
                </div>
                <div class="check-btn">
                    <button class="yes-btn" @click.prevent="close_gender_and_confirm_Panel">是</button>
                    <button class="no-btn" @click.prevent="isGenderChange = false">否</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {ref, reactive, watch} from 'vue';
export default {
    setup(){
        // load user account name from server or vuex.
        let tempGender = "";
        let temp = false;
        let isGenderChange = ref(false);
        let isOpenPicturePanel = ref(false);
        let isChangeUserName = ref(false);
        let isOpenGenderPanel = ref(false);
        let uploadFile = ref(null);

        let profile = reactive({
            userName: "Jason",
            accountName: "iou8611614",
            webURL: "website URL",
            userProfile: "",
            email:"",
            phone:"",
            gender:"",
        })
        watch(()=> profile.gender,(newV)=>{
            temp = newV==""?false:newV!==tempGender?true:false;
        })
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
        function pickGenderDone(){
            tempGender = profile.gender;
            console.log("Temp Gender: ",tempGender);
            isOpenGenderPanel.value = false;
            console.log("Gender Panel: ",isOpenGenderPanel.value);
        }
        function closeGenderPanel(){
            isGenderChange.value = temp;
            console.log("judege gender change, change? ",isGenderChange.value);
        }
        function close_gender_and_confirm_Panel(){
            isGenderChange.value = false;
            isOpenGenderPanel.value = false;
        }
        function uploadPicture(){
            uploadFile.value.click();
            uploadFile.value.onchange = function(event){
                if(event.target.files[0]){
                    // upload picture to server then rerender page
                    console.log("upload picture")
                    console.log(uploadFile.value.files);
                }else{
                    return;
                }
            }
        }
        function sendProfile(){
            console.log("send profile to server");
        }
        function deactivatedAccount(){
            console.log("account deactivated");
        }
        return{
            profile,
            closeGenderPanel,
            isOpenPicturePanel,
            isOpenGenderPanel,
            isChangeUserName,
            isGenderChange,
            changeUserName,
            openPicturePanel,
            closePicturePanel,
            close_gender_and_confirm_Panel,
            pickGenderDone,
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
button{
    cursor: pointer;
}
label{
    width: 20%;
    padding-right: 2rem;
    text-align: right;
}
input{
    padding: 0 0 0 .5rem;
}
input[type="text"]{
    display: block;
    width: 355px;
    height: 32px;
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
    border: solid 1px lightgray;
    border-radius: 0 5px 5px 0;
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
// .form-profile{
//     display: flex;
//     flex-direction: column;
// }
.form-item{
    display: flex;
    justify-content: center;
    // align-items: center;
    margin: 2rem 0;
}
.account-prompt{
    margin: .5rem 0 0 0;
    font-size: 12px;
    color: gray;
    font-weight: 400;
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
.confirm-panel{
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
.gender-confirm-panel{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(89, 89, 89, .65);
    top: 0;
    left: 0;
    // z-index: 9999;
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
.gender-box{
    display: flex;
    flex-direction: column;
    border: solid 1px gray;
    background-color: white;
    border-radius: 20px;
    width: 548px;
    height: 280px;
    overflow: hidden;
    label[for="gender"]{
        width: 100%;
        text-align: left;
        padding: .5rem 2rem;
        cursor: pointer;
    }
    .gender-title{
        padding: 1rem 0;
        font-size: 16px;
        font-weight: bold;
    }
    .closeGenderBtn{
        border: none;
        background-color: #0095F6;
        bottom: 0;
        width: 90%;
        height: 100;
        padding: .5rem 0;
        margin: 1rem auto;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
}
.gender-title-block{
    position: relative;
    & .closeGenderIconBtn{
        border: none;
        outline: none;
        background-color: inherit;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        z-index: 1;
    }
}
.gender-no-save-confirm{
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 400px;
    height: 201px;
    border-radius: 20px;
    overflow: hidden;

    & .no-save-prompt{
        margin: 2rem 0 1rem 0;
        flex: 1;
    }
    & .prompt-title{
        font-weight: normal;
        font-size: 20px;
    }
    & .prompt-message{
        font-size: 14px;
        color: gray;
        margin: .5rem 0;
    }
    & .check-btn{
        flex: 1;
    }
    & button{
        width: 100%;
        height: 50%;
        outline: none;
        font-weight: 700;
        border-top: 1px solid  lightgray;
        border-right:  none;
        border-bottom: none;
        border-left:   none;
        background-color: inherit;
        font-size: 14px;
        cursor: pointer;
        &.yes-btn{
            color: #8495F6;
        }
        &.no-btn{
            font-weight: normal;
        }
        &:active{
            background-color: lightgray;
        }
    }
}
.genderField{
    border: none;
}
.btn-group{
    display: flex;
    justify-content: center;
    & .submit-btn{
        border: inherit;
        background-color: #0095F6;
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 700;
        color: white;
        font-size: 14px;
        margin: 0 3rem;
    }
    & .deactive-btn{
        color: #0095F6;
        font-weight: 700;
        border: none;
        background-color: inherit;
        font-size: 14px;
        margin: 0 3rem;
    }
}
</style>
