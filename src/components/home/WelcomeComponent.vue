<script setup lang="ts">
import { Button } from '@/components/ui/button';
import FeatureItem from '@/components/home/FeatureItem.vue';
import { useI18n } from 'vue-i18n';


const { tm } = useI18n();

</script>

<template>
    <section class="container mx-auto px-4 py-20 flex flex-col items-center text-center max-w-4xl">
        <h1
            class="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            {{ $t('home.landing.title') }}
        </h1>

        <p class="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl">
            {{ $t('home.landing.description') }}
        </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
            <RouterLink to="/about">
                <Button>{{ $t('home.landing.buttons.learnMore') }}</Button>
            </RouterLink>
            <Button as="a" href="https://github.com/Eg0r0k/vue-template" target="_blank" rel="noopener noreferrer"
                variant="outline">
                {{ $t('home.landing.buttons.viewGitHub') }}
            </Button>
        </div>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-left w-full">
            <FeatureItem v-for="feature in tm('home.landing.features')" :key="feature" :title="feature.title">
                {{ feature.description }}
            </FeatureItem>
        </ul>
    </section>
</template>
