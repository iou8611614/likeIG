<template>
  <div class="reset-box">
      <section class="reset-body">
        <section class="reset-board">
            <div class="reset-block">
                <img src="" alt="無法登入圖片">
                <h1>無法登入?</h1>
                <p class="prompt-title">輸入你的電子郵件、電話號碼或用戶名稱，我們將傳送恢復帳號存取權的連結給你。</p>
            <!-- <div class="third-party-auth">
                <button class="thirdpartyBtn" @click="thirdpartyAuth" :disabled="isDisabled">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                <span>使用 Facebook 帳號登入</span>
                </button>
            </div> -->
            <!-- <div class="hr-decoration">
                <div class="hr-line"></div>
                <div>OR</div>
                <div class="hr-line"></div>
            </div> -->
            <!-- <span>Account: {{account}}</span><br>
            <span>Account: {{fullName}}</span><br>
            <span>Account: {{userName}}</span><br>
            <span>Password: {{password}}</span> -->
                <form class="signup-form">
                    <!-- 
                        regex means: 0~9(10位數電話號碼) or eamil格式
                        pattern="^([0-9]{10})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
                    -->
                    <input
                        class="form-item account"
                        v-model="account"
                        placeholder="電子郵件/電話/用戶名稱"
                        title="請輸入正確的電話號碼/郵件/用戶名稱"
                        required
                    >
                    <button :class="{resetBtn:true, enableBtn: !isDisabled}" @click="signupHandler" :disabled="isDisabled">傳送登入連結</button>
                </form>
                <div class="hr-decoration">
                    <div class="hr-line"></div>
                    <div>或</div>
                    <div class="hr-line"></div>
                </div>
                <div class="create-new-account-block">
                    <a class="create-new-account" href="/accounts/signup">建立新帳號</a>
                </div>
                <div class="backToLogin-block">
                    <a class="back-to-login" href="/login">返回登入</a>
                </div>
            </div>
        </section>
      </section>
  </div>
</template>

<script>
import {ref, computed} from "vue";
export default {
    setup(){
        let account = ref("");
        let fullName = ref("");
        let userName = ref("");
        let password = ref("");
        let isDisabled = computed(()=>{
            if(account.value.trim() && password.value.trim() && password.value.length>=6){
                return false;
            }else{
                return true;
            }
        })

        function signupHandler(){
            console.log("Login Process...")
        }
        function thirdpartyAuth(){
            console.log("Third Party Login Procee...");
        }
        return {
            account,
            fullName,
            userName,
            password,
            isDisabled,
            signupHandler,
            thirdpartyAuth
        }
    },
}
</script>

<style lang="scss" scoped>
*{
    // border: 1px solid #000;
    position: relative;
}

.reset-body{
  display: flex;
  justify-content: center;
//   max-width: 388px;
//   min-width: 388px;
//   max-height: 504px;
//   min-height: 504px;
  margin: 5rem auto 0 auto;
}
.signup-footer{
  border: 1px solid rgba(167, 170, 170, 0.5);
  max-width: 388px;
  min-width: 388px;
  margin: 0 auto;
  padding: 2rem 0;
  font-size: 14px;
}

.reset-board{
//   max-width: 388px;
//   min-width: 388px;
//   max-height: 504px;
//   min-height: 504px;
}

h1.logo{
    padding: 2rem 0;
}
.prompt-title{
    font-size: 14px;
    padding: 0 1rem;
    margin: 1rem;
    color: #8E8E8E;
}
.signup-form{
    display: flex;
    flex-direction: column;
}
.for-user-info{
  width: 80%;
  font-size: 18px;
  margin: 0 auto .5rem auto;
  color: #8E8E8E;
}
.form-item{
    width: 80%;
    height: 40px;
    margin: .5rem auto 0 auto;
    padding: .5rem;
    border-radius: 4px;
}
.resetBtn{
    width: 80%;
    margin: 1rem auto;
    padding: .5rem;
    border-radius: 4px;
    background-color: #B2DFFC;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border: none;
}
.enableBtn{
    width: 80%;
    margin: 1rem auto;
    padding: .5rem;
    border-radius: 4px;
    background-color: #0095F6;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border: none;
}
.hr-decoration{
    display: flex;
    // justify-items: center;
    align-items: center;
    margin: 1rem auto;
    width: 80%;
}
.hr-line{
    border: solid .1px lightgray;
    width: 160px;
    height: 1px;
    margin: 0 1rem;
}
.third-party-auth{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.thirdpartyBtn{
    display: flex;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #0095F6;
    color: white;
    text-decoration: none;
    margin: 1rem 0;
    width: 80%;
    padding: 5px 10px;
    justify-content: center;
    border-radius: 4px;
    &:active{
        border: 0px;
    }
    & span.fb-logo{
        width: 20px;
        background-image: url("../assets/facebook-app-logo.png");
    }
    & span{
        font-weight: bold;
    }
}
.reset-block{
    border: 1px solid rgba(167, 170, 170, 0.5);
    margin: 0 0 0.5rem 0;
    border-radius: 1px;
    width: 388px;
    height: 504px;
}

.prompt-msg{
    color: red;
    font-size: 14px;
}
a:visited{
    text-decoration: none;
}
.create-new-account-block{
    margin: 0 auto;
    width: 388px;
    & .create-new-account{
        font-size: 14px;
        color: #262626;
        text-decoration: none;
        font-weight: 600;
    }
}
.backToLogin-block{
    position: absolute;
    width: 388px;
    height: 44px;
    bottom: 0;
    & .back-to-login{
        border: solid 1px #DBDBDB;
        display: flex;
        font-size: 14px;
        color: #262626;
        background-color: #FAFAFA;
        text-decoration: none;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
}

</style>