<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { account } from '../lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';

const isLoadingStore = useIsLoadingStore();
const store = useAuthStore();
const router = useRouter();

onMounted(async () => {
    try {
        const user = await account.get();
        if (user) store.set(user);
    } catch (error) {
        router.push('/login')
    } finally {
        isLoadingStore.set(false);
    }
})

watch(store, async () => {
    console.log('store: ', store.isAuth);

})
</script>

<template>
    <LayoutsLoader v-if="isLoadingStore.isLoading"></LayoutsLoader>
    <section v-else :class="{ grid: store.isAuth }" style="min-height: 100vh;">
        <LayoutsSideBar v-if="store.isAuth" />
        <div>
            <slot />
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
}
</style>
