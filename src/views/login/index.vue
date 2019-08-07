<template>
  <div class="login">
    <div class="login-box">
      <div class="avator-box">
        <img src="../../assets/logo.png" />
      </div>
      <el-form :model="loginForm" :rules="loginFormRules" label-width="0px" class="login-form" ref="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input show-password v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="danger" @click="resetform">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在5到16个字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在6到8个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  created () {},
  methods: {
    login () {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        console.log(res)
        if (res.meta.status !== 200) {
          return this.$message.error(res.meta.msg)
        }
        this.$message.success(res.meta.msg)
        sessionStorage.setItem('token', res.data.token)
        this.$router.push('./home')
      })
    },
    resetform () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  background-color: #2b4b6b;
  height: 100%;
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    .avator-box {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0 0 10px #ddd;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        background-color: #eee;
        border-radius: 50%;
      }
    }
    .login-form{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      position: absolute;
      bottom: 0;
    }
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
