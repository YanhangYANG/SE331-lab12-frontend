<!-- EventDetailView.vue -->
<script setup lang="ts">
import { useMessageStore } from "@/stores/message";
import type { PropType } from "vue";
import { type OrgItem } from '@/type';
import { ref, watchEffect } from 'vue';

const props = defineProps({
  org: {
    type: Object as unknown as PropType<OrgItem>,
    required: true,
  }
});

const store = useMessageStore();
const message = ref(store.message);

watchEffect(() => {
  message.value = store.message;
  if(message.value) {
    setTimeout(() => {
      store.resetMessage();
    }, 3000);
  }
});

</script>

<template>
  <div>
    <h4>Org Detail View</h4>

  </div>
  <div v-if="org">
    <p>Organizer Id:{{ org.id }}</p>
    <p>Organizer name: {{ org.name }}</p>
    <p>Address:{{ org.address }}</p>
    <p v-if="message">{{ message }}</p>
    <img v-for="image in org.image" :key="image" :src="image" alt="events image"
         class="border-solid border-gray-200 border-2 rounded p-1 m-1 w-24 hover:shadow-lg"/>
  </div>

</template>