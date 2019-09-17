<template>
  <v-app>
    <Header :menu="menu" />
    <Menu />
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Header,
    Menu
  },
  data () {
    return {
      menu: false,
    }
  },
};
</script>
