<template>
  <div class="login-box">
      <section class="login-body">
          <section class="main-board left-board">
              <!-- 圖片 -->
              <img class="img-still" src="../assets/smartphone.png" alt="">
              <img class="img-carousel p1 now" src="../assets/smartphone.png" alt="">
              <img class="img-carousel p2" src="../assets/smartphone.png" alt="">
              <img class="img-carousel p3" src="../assets/smartphone.png" alt="">
              <img class="img-carousel p4" src="../assets/smartphone.png" alt="">
          </section>
          <section class="main-board right-board">
              <div class="login-block">
                <h1 class="logo">likeIG</h1>
                <!-- <span>Account: {{account}}</span><br>
                <span>Password: {{password}}</span> -->
                <form class="login-form">
                    <!-- 
                        regex means: 0~9(10位數電話號碼) or eamil格式
                        pattern="^([0-9]{10})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
                     -->
                    <input 
                        class="form-item account" 
                        type="text"  
                        v-model="account" 
                        placeholder="手機號碼、用戶名稱或電子郵件地址"
                        pattern="^([0-9]{10})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
                        title="請輸入正確的電話號碼或郵件"
                        required
                    >
                    <input 
                        class="form-item password" 
                        type="password"  
                        v-model="password"
                        placeholder="密碼"
                    >
                    <button :class="{loginBtn:true, enableBtn: !isDisabled}" @click="longinHandler" :disabled="isDisabled">登入</button>
                </form>
                <div class="hr-decoration">
                    <div class="hr-line"></div>
                    <div>OR</div>
                    <div class="hr-line"></div>
                </div>
                <div class="third-party-auth">
                    <button class="thirdpartyBtn" @click="thirdpartyAuth">
                        <!-- <span class="fb-logo">1</span> -->
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg>
                        <span>使用 Facebook 帳號登入</span>
                    </button>
                    <!-- <span>Google - login</span> -->
                    <p class="prompt-msg">很抱歉，你的密碼不正確，請再次檢查密碼。</p>
                    <a class="forget-link" href="/forget">忘記密碼?</a>
                </div>
              </div>
              <div class="small-block signup-block">
                  <span>沒有帳號嗎?</span>
                  <a href="/signup">註冊</a>
              </div>
          </section>
      </section>
      <section class="login-footer">
          COPYRIGHT
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

        function longinHandler(){
            console.log("Login Process...")
        }
        function thirdpartyAuth(){
            console.log("Third Party Login Procee...");
        }
        return {
            account,
            password,
            isDisabled,
            longinHandler,
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

.login-body{
    display: flex;
    justify-content: center;
    max-width: 935px;
    min-width: 935px;
    margin: 5rem auto 0 auto;
}
.login-footer{
    max-width: 935px;
    min-width: 935px;
    margin: 0 auto 5rem auto;
    padding: 5rem 0;
}
// section.main-board{
//     flex: 1;
// }
.left-board{
    flex: 2;
}
.right-board{
    flex: 1;
}

h1.logo{
    padding: 2rem 0;
}
.login-form{
    display: flex;
    flex-direction: column;
}
img{
    width: 80%;
    height: 80%;
    display: flex;
}
// .img-still{
//     background-color: pink;
// }
.img-carousel{
    // background-color: lightblue;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    // &.p1{
    //     background-color: pink;
    // }
    // &.p2{
    //     background-color: lightblue;
    // }
    // &.p3{
    //     background-color: lightgray;
    // }
    // &.p4{
    //     background-color: rgb(241, 241, 135);   
    // }
}
.now{
    z-index: 9999;
}
.form-item{
    width: 80%;
    margin: .5rem auto 0 auto;
    padding: .5rem;
    border-radius: 4px;
}
.loginBtn{
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
    justify-content: center;
    align-items: center;
    margin: .5rem 0;
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
    background-color: #fff;
    color: #385185;
    text-decoration: none;
    margin: 1rem 0;
    &:active{
        border: 0px;
    }
    & span.fb-logo{
        width: 20px;
        // background-color:red;
        background-image: url("../assets/facebook-app-logo.png");
    }
    & span{
        font-weight: bold;
    }
}

.login-block{
    border: 1px solid rgba(167, 170, 170, 0.5);
    margin: 0 0 0.5rem 0;
    border-radius: 1px;
}
.signup-block{
    margin: 0.5rem 0 0 0;
    padding: 1rem 0;
}
.prompt-msg{
    color: red;
    font-size: 14px;
}
.forget-link{
    margin: .5rem 0;
    text-decoration: none;
    color: #385185;
    font-size: 14px;
    &:active{
        color: #b7c6e4;
    }
}

@media only screen and (max-width: 875px) {
    .main-board{
        max-width: 350px;
        min-width: 350px;
    }
    .login-body{
        display: flex;
        justify-content: center;
        max-width: 350px;
        min-width: 350px;
        margin: 5rem auto 0 auto;
    }
    .login-footer{
        max-width: 350px;
        min-width: 350px;
        margin: 0 auto 5rem auto;
        padding: 5rem 0;
    }
    .left-board{
        display: none;
    }
}
</style>