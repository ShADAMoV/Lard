<script setup>
import LEmployees from '@/components/Widgets/LEmployees.vue';
import LSidebar from '@/components/Widgets/LSidebar.vue';
</script>

<template>
    <v-main class="l-employees-page">
        <v-container>
            <v-row>
                <v-col cols="8">
                    <LEmployees></LEmployees>
                </v-col>
                <v-col cols="4">
                    <LSidebar></LSidebar>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style lang="scss">
// TODO: Вынести этот цвет в переменную
.l-employees-page {
    background-color: #F7F8F9;
}
</style>