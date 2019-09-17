<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="setMenu()"></v-app-bar-nav-icon>
    <v-toolbar-title class="headline text-uppercase">
        <span>pla</span>
        <span class="font-weight-light">room</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
        text
        target="_blank"
        >
        <span class="mr-2">v0.1.0</span>
    </v-btn>
</v-app-bar>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Header',
  methods: {
        ...mapActions({
            setMenu: 'menu/setMenu'
        })
    },
};
</script>
