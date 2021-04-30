<template>
    <div class="page PWD-change-box">
        <div class="error-prompt" v-show="!isPwdCorrect">
            <p class="error-msg">你的舊密碼輸入錯誤，請再次輸入。</p>
        </div>
        <div class="error-prompt" v-show="!isSamePwd">
            <p class="error-msg">請確定兩組密碼是一致的。</p>
        </div>
        <div class="error-prompt" v-show="!isMeetPwdRule">
            <p class="error-msg">密碼需大於6個字元</p>
        </div>
        <section class="section-reset-PWD">
            <div class="reset-PWD">
                <img class="selfie" src="../assets/selfie.png" alt="selfie" title="selfie">
                <h1 class="account-name" :title="accountNameFromVuex">{{accountNameFromVuex}}</h1>
            </div>
        </section>
        <section>
            <form class="form-reset-PWD" action="">
                <div class="form-item">
                    <label for="oldPWD">舊密碼</label>
                    <input class="" type="password" name="oldPWD" v-model="oldPWD" required>
                </div>
                <div class="form-item">
                    <label for="newPWD">新密碼</label>
                    <input
                        type="password"
                        name="newPWD"
                        pattern=".{6,}"
                        title="不可少於6個字元"
                        v-model="newPWD"
                        required
                    >
                </div>
                <div class="form-item">
                    <label for="confirmPWD">確認新密碼</label>
                    <input type="password" name="confirmPWD" v-model="confirmPWD" required>
                </div>
                <button :class="{disableBtn:isDisabled, enableBtn: !isDisabled}" @click="changePWD" :disabled="isDisabled">更改密碼</button>
            </form>
        </section>
    </div>
</template>

<script>
import {computed, ref} from 'vue';
export default {
    setup(){
        // accountNameFromVuex get user name from vuex.
        let accountNameFromVuex = ref("iou8611614");
        let oldPWD = ref("");
        let newPWD = ref("");
        let confirmPWD = ref("");
        let isPwdCorrect = ref(true);
        let isSamePwd = ref(true);
        let isMeetPwdRule = ref(true);
  
        let isDisabled = computed(()=>{
            if(oldPWD.value && newPWD.value && confirmPWD.value){
                return false;
            }else{
                return true;
            }
        })
        function initForm(){
            oldPWD.value = "";
            newPWD.value = "";
            confirmPWD.value = "";
            isPwdCorrect.value = true;
            isSamePwd.value = true;
            isMeetPwdRule.value = true;
        }
        function changePWD(event){
            event.preventDefault();
            /*
                1. load pwd from DB then compare user enter old pwd is match?
                    1.1 Math ==> compare new pwd and confirm pwd is match?
                        1.1.1 Match ==> new pwd pass to DB then end the process.
                        1.1.2 Not Match ==> prompt user new pwd and confirm pwd not match.
                    
                    1.2 Not Match ==> prompt user old pwd not match.
            */

            // simulate load pwd from DB is match user enter old pwd.
            if(oldPWD.value){
                isPwdCorrect.value = true;
                if(newPWD.value.length >= 6){
                    console.log(newPWD.value.length);
                    isMeetPwdRule.value = true;
                    if(newPWD.value === confirmPWD.value){
                        isSamePwd.value = true;
                        initForm();
                        console.log("send new password to DB");
                    }else{
                        isSamePwd.value = false;
                        console.log("New password not match Confirm password!!!");
                    }
                }else{
                    isMeetPwdRule.value = false;
                    console.log("Not Match Rule...");
                }
                
            }else{
                isPwdCorrect.value = false;
                console.log("Old password not correct!!!");
            }
        }
        return{
            accountNameFromVuex,
            oldPWD,
            newPWD,
            confirmPWD,
            isPwdCorrect,
            isSamePwd,
            isMeetPwdRule,
            isDisabled,
            changePWD
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
    font-weight: 600;
}
input{
    padding: 0 0 0 .5rem;
}
input[type="password"]{
    display: block;
    width: 355px;
    height: 32px;
}

h1.account-name{
    font-size: 24px;
    color: #262634;
    font-weight: 400;
    padding: 0 1rem;
}

.PWD-change-box{
    border: solid 1px lightgray;
    border-radius: 0 5px 5px 0;
    width: 696px;
    height: 846px;
    padding: 2rem 0;
}
.reset-PWD{
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

.disableBtn{
    border: inherit;
    background-color: #B2DFFC;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: 700;
    color: white;
    font-size: 14px;
    margin: 0 3rem;
    cursor: initial;
}

.enableBtn{
    border: inherit;
    background-color: #0095F6;
    padding: 5px 10px;
    border-radius: 4px;
    font-weight: 700;
    color: white;
    font-size: 14px;
    margin: 0 3rem;
    cursor: pointer;
}

.error-prompt{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #262626;
    max-height: 72px;
    & .error-msg{
        color: white;
        font-size: 14px;
        padding: 12px 0;
        overflow: hidden;
    }
}

</style>
