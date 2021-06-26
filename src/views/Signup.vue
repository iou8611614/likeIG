<template>
  <div class="signup-box">
    <section class="signup-body">
      <section class="signup-board">
        <div class="signup-block">
          <h1 class="logo">likeIG</h1>
          <h2 class="for-user-info">註冊即可查看朋友的相片和影片。</h2>
          <div class="third-party-auth">
            <button
              class="thirdpartyBtn"
              @click="thirdpartyAuth"
              :disabled="isDisabled"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="24px"
                height="24px"
              >
                <path
                  fill="#3F51B5"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                />
              </svg>
              <span>使用 Facebook 帳號登入</span>
            </button>
          </div>
          <div class="hr-decoration">
            <div class="hr-line"></div>
            <div>OR</div>
            <div class="hr-line"></div>
          </div>
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
              type="email"
              pattern="^([0-9]{10})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$"
              v-model="account"
              placeholder="手機號碼或電子郵件"
              title="請輸入正確的電話號碼或郵件"
              required
            />
            <input
              class="form-item account"
              type="text"
              v-model="fullName"
              placeholder="全名"
              required
            />
            <input
              class="form-item account"
              type="text"
              v-model="userName"
              placeholder="用戶名稱"
              required
            />
            <input
              class="form-item password"
              type="password"
              v-model="password"
              placeholder="密碼"
              required
            />
            <button
              :class="{ disableBtn: isDisabled, enableBtn: !isDisabled }"
              @click="signupHandler"
              :disabled="isDisabled"
            >
              註冊
            </button>
          </form>
        </div>
      </section>
    </section>
    <section class="signup-footer">
      <p>已經有帳號嗎? <a href="/accounts/login/auth-switcher">登入</a></p>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let account = ref("");
    let fullName = ref("");
    let userName = ref("");
    let password = ref("");
    let isDisabled = computed(() => {
      if (
        account.value.trim() &&
        password.value.trim() &&
        password.value.length >= 6
      ) {
        return false;
      } else {
        return true;
      }
    });

    function signupHandler() {
      // initial(empty) all input data
      console.log("Login Process...");
    }
    function thirdpartyAuth() {
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
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  // border: 1px solid #000;
  position: relative;
}

.signup-body {
  display: flex;
  justify-content: center;
  max-width: 350px;
  min-width: 350px;
  margin: 5rem auto 0 auto;
}
.signup-footer {
  border: 1px solid rgba(167, 170, 170, 0.5);
  max-width: 350px;
  min-width: 350px;
  margin: 0 auto;
  padding: 2rem 0;
  font-size: 14px;
}

.signup-board {
  max-width: 350px;
  min-width: 350px;
}

h1.logo {
  padding: 2rem 0;
}
.signup-form {
  display: flex;
  flex-direction: column;
}
.for-user-info {
  width: 80%;
  font-size: 18px;
  margin: 0 auto 0.5rem auto;
  color: #8e8e8e;
}
.form-item {
  width: 80%;
  margin: 0.5rem auto 0 auto;
  padding: 0.5rem;
  border-radius: 4px;
}
.disableBtn {
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #b2dffc;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: initial;
}
.enableBtn {
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: #0095f6;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
.hr-decoration {
  display: flex;
  // justify-items: center;
  align-items: center;
  margin: 0.5rem auto;
  width: 80%;
}
.hr-line {
  border: solid 0.1px lightgray;
  width: 160px;
  height: 1px;
  margin: 0 1rem;
}
.third-party-auth {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.thirdpartyBtn {
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #0095f6;
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  width: 80%;
  padding: 5px 10px;
  justify-content: center;
  border-radius: 4px;
  &:active {
    border: 0px;
  }
  & span.fb-logo {
    width: 20px;
    background-image: url("../assets/facebook-app-logo.png");
  }
  & span {
    font-weight: bold;
  }
}
.signup-block {
  border: 1px solid rgba(167, 170, 170, 0.5);
  margin: 0 0 0.5rem 0;
  border-radius: 1px;
}

.prompt-msg {
  color: red;
  font-size: 14px;
}
.forgot-link {
  margin: 0.5rem 0;
  text-decoration: none;
  color: #385185;
  font-size: 14px;
  &:active {
    color: #b7c6e4;
  }
}
</style>
