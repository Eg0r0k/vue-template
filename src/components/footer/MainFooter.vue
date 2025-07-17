<template>
    <footer class="footer">
        <div class="footer__content">
            <span class="text-xs">© {{ getCurrentYear }} company/name</span>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { getCurrentYear } from '@/utils/dateUtils';

</script>

<style scoped>
@reference "@/assets/base.css";

.footer {
    @apply bg-background border-t border-dashed;
}

.footer__content {
    @apply container w-full mx-auto px-4 py-4 text-muted-foreground;
}
</style>