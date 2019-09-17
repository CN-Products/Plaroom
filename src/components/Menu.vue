<template>
    <v-navigation-drawer
      v-model="getMenu.active"
      absolute
      temporary
    >
      <v-list-item class="v-list-item--custom">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Isafgor</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Menu',
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      }
    },
    computed: {
        ...mapGetters({
            getMenu: 'menu/getMenu'
        })
    },
    methods: {
        ...mapActions({
            setMenu: 'menu/setMenu'
        })
    },
    mounted () {
        this.setMenu()
    }
  }
</script>

<style lang="sass">
    .v-list-item
        &--custom
            height: 64px
</style>