<template>
    <Drawer>
        <DrawerTrigger asChild>
            <Button class="menu-button" variant="ghost" size="icon">
                <Menu :size="20" />
            </Button>
        </DrawerTrigger>
        <DrawerContent class=" h-[85dvh] md:max-h-[500px]">
            <DrawerHeader>
                <div class="flex flex-col mt-2 gap-2">
                    <Button size="sm" class="justify-start " variant="ghost" v-for="link in MENU_LINKS" :key="link.path"
                        asChild>
                        <RouterLink :to="link.path"
                            class="flex items-center justify-center text-muted-foreground/60 hover:text-foreground transition-colors">

                            {{ $t(link.label) }}
                        </RouterLink>
                    </Button>
                </div>
            </DrawerHeader>
        </DrawerContent>
    </Drawer>
</template>
<script setup lang="ts">
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-vue-next';
import { MENU_LINKS } from '@/constants/menuLinks';


</script>

<style scoped>
@reference "@/assets/base.css";

.menu-button {
    @apply md:hidden size-8;
}

.router-link-exact-active {
    color: var(--foreground) !important;
    background-color: var(--muted) !important;
}
</style>