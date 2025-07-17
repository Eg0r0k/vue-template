<template>
    <li class="flex flex-col justify-between gap-4 p-4 bg-muted/50 rounded-lg border border-dashed min-h-28">
        <div>
            <h3 class="font-semibold text-lg">{{ title }}</h3>
            <p class="text-sm text-muted-foreground mt-1">
                <slot />
            </p>
        </div>
    </li>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
