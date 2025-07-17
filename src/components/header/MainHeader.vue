<template>
    <header class="header">
        <div class="header__content">
            <MobileMenuHeader />
            <div class="header__left">
                <RouterLink class="header__logo" to="/">
                    <img draggable="false" src="@/assets/logo.svg" alt="Logo" class="header__logo-img" />
                    <span class="header__logo-text">template/vue</span>
                </RouterLink>
                <nav class="header__nav">
                    <RouterLink v-for="link in MENU_LINKS" :key="link.label" class="header__link" :to="link.path">
                        {{ $t(link.label) }}
                    </RouterLink>

                </nav>
            </div>

            <div class="header__right">

                <Button as="a" class="header__button" variant="ghost" href="https://github.com/Eg0r0k/vue-template"
                    target="_blank" rel="noopener noreferrer">
                    <Github :size="16" />
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="ghost" size="icon" class="header__button">
                            <Languages :size="16" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem v-for="lang in supportedLocale" :key="lang" @click="currentLocale = lang"
                            class="gap-2">
                            <span>{{ $t(`locales.${lang}`) }}</span>
                            <Check v-show="currentLocale === lang" class="ml-auto size-4" />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button @click="toggleColorMode" variant="ghost" size="icon" class="header__button">
                    <SunIcon v-if="mode === 'light'" :size="16" />
                    <MoonIcon v-else :size="16" />
                </Button>

            </div>
        </div>
    </header>
</template>


<script setup lang="ts">
import { Check, Github, Languages, MoonIcon, SunIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import MobileMenuHeader from './MobileMenuHeader.vue';
import { useColorMode } from '@vueuse/core';
import { useLanguage } from '@/composables/useLanguage';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MENU_LINKS } from '@/constants/menuLinks';
const mode = useColorMode()

const toggleColorMode = () => {
    mode.value = mode.value === 'light' ? 'dark' : 'light';
};
const { currentLocale, supportedLocale } = useLanguage()


</script>


<style scoped>
@reference "@/assets/base.css";

.header {
    @apply border-b border-dashed z-50 w-full sticky top-0 bg-background;
}

.header__content {
    @apply flex items-center justify-between container w-full mx-auto px-4 h-14;
}

.header__left {
    @apply mr-4 md:mr-1 hidden md:flex;
}

.header__right {
    @apply flex items-center gap-1;
}


.header__logo {
    @apply mr-4 md:mr-2 lg:mr-6 flex items-center space-x-2;
}

.header__logo-img {
    @apply size-6;
}

.header__logo-text {
    @apply font-semibold;
}

.header__nav {
    @apply flex items-center gap-4 text-sm xl:gap-6;
}

.header__link {
    @apply text-muted-foreground hover:text-foreground transition-colors duration-150;
}

.header__link.router-link-active {
    @apply text-foreground;
}

.header__button {
    @apply size-8;
}
</style>