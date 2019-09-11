<template>
  <div class="login">
      <div class="login__content">
        <div class="plaroom-logo">pla<span>room</span></div>
        <el-form ref="form" :model="form" class="login__form" label-width="120px">
            <el-form-item label="Логин">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Пароль">
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">Войти</el-button>
            </el-form-item>
        </el-form>
      </div>
      <div class="version">
          <small>Plaroom v0.1.0. Разработано CN Products</small>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
      return {
          form: {
              name: '',
              password: ''
          }
      }
  }
}
</script>

<style lang="stylus" scoped>
.login
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    &__content
        display flex
        justify-content center
        align-items center
        flex-direction column
    .version
        position absolute
        bottom 25px
        right 25px
</style>