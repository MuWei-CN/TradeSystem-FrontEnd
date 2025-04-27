<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

// 登录表单数据
const loginForm = reactive({
  username: '',
  password: ''
})

// 注册表单数据
const registerForm = reactive({
  username: '',
  password: '',
  phone: '',
  gender: '',
  realName: '',
  email: ''
})

// 控制显示登录还是注册表单
const showLogin = ref(true)

// 切换登录/注册表单
const toggleForm = () => {
  showLogin.value = !showLogin.value
}

// 注册处理
const handleRegister = async () => {
  const phoneRegex = /^1[3456789]\d{9}$/
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!registerForm.username || !registerForm.password || !registerForm.phone) {
    ElMessage.error('请填写所有必填字段')
    return
  }
  if (!phoneRegex.test(registerForm.phone)) {
    ElMessage.error('手机号格式不正确')
    return
  }
  if (registerForm.email && !emailRegex.test(registerForm.email)) {
    ElMessage.error('邮箱格式不正确')
    return
  }
  // TODO: 调用注册接口
}
</script>

<template>
  <div class="auth-container">
    <el-card>
      <div v-if="showLogin">
        <h2>登录</h2>
        <el-form :model="loginForm" label-width="80px" style="justify-items: center">
          <el-form-item label="用户名" style="width: 90%">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" style="width: 90%">
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form>
        <p class="switch-form">
          还没有账号？
          <el-link @click.prevent="toggleForm">立即注册</el-link>
        </p>
      </div>

      <div v-else>
        <h2>注册</h2>
        <el-form :model="registerForm" label-width="100px" style="justify-items: center">
          <el-form-item label="用户名" style="width: 90%" required>
            <el-input v-model="registerForm.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" style="width: 90%" required>
            <el-input v-model="registerForm.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-form-item label="手机号" style="width: 90%" required>
            <el-input v-model="registerForm.phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="性别" style="width: 90%">
            <el-select v-model="registerForm.gender" placeholder="请选择性别">
              <el-option label="男" value="male" />
              <el-option label="女" value="female" />
              <el-option label="其他" value="other" />
            </el-select>
          </el-form-item>
          <el-form-item label="真实姓名" style="width: 90%">
            <el-input v-model="registerForm.realName" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item label="邮箱" style="width: 90%">
            <el-input v-model="registerForm.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </el-form>
        <p class="switch-form">
          已有账号？
          <el-link @click.prevent="toggleForm">立即登录</el-link>
        </p>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.auth-container {
  width: 30%;
  height: 30%;
  margin: auto;
  margin-top: 150px;
  padding: 20px;
  background: linear-gradient(to bottom, #f0f9ff, #cbebff); /* Gradient background */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.auth-container::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  z-index: 1;
}

.auth-container::after {
  content: '';
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  z-index: 1;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  z-index: 2;
  position: relative;
}

.switch-form {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  z-index: 2;
  position: relative;
}
</style>