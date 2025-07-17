<template>
    <section
        class="flex-1 flex items-center justify-center px-4 h-full animate-fade-in transition-opacity duration-500">
        <div class="text-center max-w-md w-full">
            <h1 class="text-7xl font-extrabold text-primary mb-4">404</h1>
            <p class="text-xl text-muted-foreground mb-6">
                {{ $t('notFound.title') }}
            </p>
            <Button asChild class="gap-2 px-6 py-3 text-base">
                <router-link to="/">
                    <HomeIcon :size="16" />
                    {{ $t('notFound.button') }}
                </router-link>
            </Button>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue'
import { HomeIcon } from 'lucide-vue-next'


definePage({
    meta: {
        title: 'about.title',
    },
})

</script>
