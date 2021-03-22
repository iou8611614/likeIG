<template>
  <div class="reset-box">
      <section class="reset-body">
        <section class="reset-board">
            <div class="reset-block">
                <img src="" alt="無法登入圖片">
                <h1>無法登入?</h1>
                <p class="prompt-title">輸入你的電子郵件、電話號碼或用戶名稱，我們將傳送恢復帳號存取權的連結給你。</p>
                <form class="reset-form">
                    <input
                        class="form-item account"
                        v-model="account"
                        placeholder="電子郵件/電話/用戶名稱"
                        title="請輸入正確的電話號碼/郵件/用戶名稱"
                        required
                    >
                    <button :class="{resetBtn:true, enableBtn: !isDisabled}" @click="sendVerifyToMail" :disabled="isDisabled">傳送登入連結</button>
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
        let password = ref("");
        let isDisabled = computed(()=>{
            if(account.value.trim() && password.value.trim() && password.value.length>=6){
                return false;
            }else{
                return true;
            }
        })

        function sendVerifyToMail(){
            console.log("Login Process...")
        }
        return {
            account,
            password,
            isDisabled,
            sendVerifyToMail,
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
  margin: 5rem auto 0 auto;
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
.reset-form{
    display: flex;
    flex-direction: column;
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

.reset-block{
    border: 1px solid rgba(167, 170, 170, 0.5);
    margin: 0 0 0.5rem 0;
    border-radius: 1px;
    width: 388px;
    height: 504px;
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