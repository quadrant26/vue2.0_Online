<template>
  <div>
      <div class="login-form">
          <div class="g-form">
              <div class="g-form-line">
                  <span class="g-form-label">用户名：</span>
                  <div class="g-form-input">
                      <input v-model="usernameModel" type="text" placeholder="请输入用户名">
                  </div>
              </div>
              <div class="g-form-line">
                  <span class="g-form-label">密码：</span>
                  <div class="g-form-input">
                      <input v-model="passwordModel" type="password" placeholder="请输入密码">
                  </div>
              </div>
              <div class="g-form-line">
                    <div class="g-form-btn">
                    <a class="button" @click="onLogin">登录</a>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'LoginForm',
    data (){
        return {
            usernameModel: '',
            passwordModel: ''
        }
    },
    methods: {
        onLogin (){
            console.log( this.usernameModel, this.passwordModel);
        }
    }
}
</script>

<style>

</style>

