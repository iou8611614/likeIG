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
              <h1 class="logo">likeIG</h1>
              <form class="login-form">
                  <input class="user account" type="text" placeholder="帳號">
                  <input class="user password" type="text" placeholder="密碼">
                  <button class="login-btn" @click.prevent="longinHandler">登入</button>
              </form>
              <div class="hr-decoration">
                  <div class="hr-line"></div>
                  <div>OR</div>
                  <div class="hr-line"></div>
              </div>
              <div class="third-party-auth">
                  <span>facebook - login</span>
                  <span>Google - login</span>
                  <p class="prompt-msg">sorry , password not correct!</p>
                  <a href="/forgetpage">forget password?</a>
              </div>
          </section>
      </section>
      <section class="login-footer">
          COPYRIGHT
      </section>
  </div>
</template>

<script>
export default {
    setup(){
        function longinHandler(){
            console.log("Login Process...")
        }
        return {
            longinHandler,
        }
    }
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
    width: 50%;
    margin: 10rem auto 0 auto;
}
.login-footer{
    width: 50%;
    margin: 0 auto 5rem auto;
    padding: 5rem 0;
}
section.main-board{
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
.user{
    width: 80%;
    margin: .5rem auto 0 auto;
    padding: 1rem;
    border-radius: 5px;
}
.login-btn{
    width: 80%;
    margin: 1rem auto;
    padding: .5rem;
    border-radius: 5px;
    background-color: lightblue;
    color: white;
    font-weight: bold;
    font-size: 14px;
    border: none;
}
.hr-decoration{
    display: flex;
    justify-content: center;
    align-items: center;
}
.hr-line{
    border: solid .1px lightgray;
    width: 160px;
    height: 1px;
    margin: 0 1rem;
}
.prompt-msg{
    color: red;
}
</style>