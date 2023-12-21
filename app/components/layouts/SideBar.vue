<template>
    <aside class="px-5 py-8 bg-gray-700 h-full relative w-full">
        <nuxt-link to="/" class="mb-10 block">
            <NuxtImg class="mx-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""
                width="100px" />
        </nuxt-link>

        <button class="absolute top-2 right-3 transition-colors hover:text-secondary" @click="logout">
            <Icon name="line-md:logout" size="17px" />
        </button>
        <LayoutsMenu />
    </aside>
</template>

<script lang="ts" setup>
import { account } from '../../lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '../../stores/auth.store';
import { useRouter } from 'vue-router';

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();
const logout = async () => {
    isLoadingStore.set(true);
    await account.deleteSession('current');
    store.clear();
    await router.push('/login');
    isLoadingStore.set(false);
}
</script>

<style></style>