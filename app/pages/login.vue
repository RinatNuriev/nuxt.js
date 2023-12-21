
<script lang="ts" setup>
import { v4 as uuid } from 'uuid';
import { account } from '../lib/appwrite'
import { ref } from "vue";
import { useAuthStore, useIsLoadingStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';

useSeoMeta({
    title: 'Login | CRM System'
});

const emailref = ref('');
const nameref = ref('');
const passwordref = ref('');

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
    isLoadingStore.set(true);
    await account.createEmailSession(emailref.value, passwordref.value);
    const response = await account.get();

    if (response) {
        authStore.set({
            email: response.email,
            name: response.name,
            status: response.status,
        })
    }

    emailref.value = '';
    passwordref.value = '';
    nameref.value = '';

    await router.push('/');
    isLoadingStore.set(false);
}

const register = async () => {
    await account.create(uuid(), emailref.value, passwordref.value, nameref.value)
    await login();
}

</script>

<template>
    <div class="flex items-center justify-center min-h-screen w-full">
        <div class="rounded bg-gray-700 w-1/4 p-5">
            <h1 class="text-2x1 font-bold text-center mb-5">Login</h1>
            <form>
                <UiInput placeholder="email" type="email" class="mb-3 rounded" v-model="emailref" />
                <UiInput placeholder="password" type="password" class="mb-3 rounded" v-model="passwordref" />
                <UiInput placeholder="name" type="name" class="mb-3 rounded" v-model="nameref" />
                <div class="flex items-center justify-center gap-5">
                    <UiButton type="button" class="rounded hover:bg-secondary" @click="login">Login</UiButton>
                    <UiButton type="button" class="rounded hover:bg-secondary" @click="register">Register</UiButton>
                </div>
            </form>
        </div>
    </div>
</template>

