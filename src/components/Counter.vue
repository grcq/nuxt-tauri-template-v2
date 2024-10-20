<script setup lang="ts">
const count = ref(0);
</script>

<template>
    <div class="counter">
        <div class="rounded-lg bg-zinc-800 p-4 border-zinc-600 border shadow-black shadow-md">
            <div class="mb-4 text-center">
                <h1 class="text-2xl font-bold">Counter</h1>
            </div>

            <p>{{ count }}</p>
            <div class="actions">
                <UButton color="primary" @click="count++"><Icon name="mdi:plus" /> Increment</UButton>
                <UButton color="red" @click="count--"><Icon name="mdi:minus" /> Decrement</UButton>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.counter {
    margin-top: 10%;
    align-self: center;

    p {
        font-size: 2em;
        text-align: center;
    }

    .actions {
        display: flex;
        gap: 2em;
        margin-top: 1em; 
        justify-content: center;
    }
}
</style>