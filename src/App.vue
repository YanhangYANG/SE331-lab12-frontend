<script setup lang="ts" xmlns="">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore();
const { message } = storeToRefs(store);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useAuthStore} from "@/stores/auth";
import {useRoute} from "vue-router"
import router from "@/router";


const authStore = useAuthStore();
const route = useRoute();

function logout() {
  authStore.logout();
  router.push({name: 'login'});

}

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
if (token && user) {
  authStore.reload(token, JSON.parse(user))
}else{
  authStore.logout();
}


</script>

<template>
  <header class="max-h-screen leading-normal">
    <div id="flashMessage" v-if="message">
     <h4>{{ message }}</h4>
    </div>
    <nav>
      <nav class="flex">
        <ul v-if="!authStore.currentUserName" class="flex navbar-nav ml-auto">
          <li class="nav-item px-2">
            <router-link to="/register" class="nav-link">
              Sign Up
              <font-awesome-icon icon="fa-solid fa-user-plus" />
            </router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/login" class="nav-link">
              Login
              <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
            </router-link>
          </li>
        </ul>
        <ul v-if="authStore.currentUserName" class="flex navbar-nav ml-auto">
          <li class="nav-item px-2">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              current user:
              {{ authStore.currentUserName }}
            </router-link>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link  hover:cursor-pointer" @click="logout">
              <font-awesome-icon icon="sign-out-alt" /> LogOut
            </a >
          </li>
        </ul>
      </nav>
      <RouterLink :to="{ name: 'EventList' }">Home</RouterLink> |
      <RouterLink :to="{ name: 'about' }">Organizers</RouterLink> |
      <RouterLink :to="{ name: 'add-org' }">New Organizer</RouterLink> |
      <RouterLink :to="{ name: 'add-event' }">New Event</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.page-sizes {
  display: flex;
  gap: 10px;
}

.page-sizes a {
  margin: 0 10px;
}
@keyframes yellowfade {
  fron{
    background: yellow;
  }
  to{
    background: transparent
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}
</style>
