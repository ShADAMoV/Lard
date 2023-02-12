// Utilities
import { defineStore } from 'pinia';

export const useFiltersStore = defineStore('filters', {
    state: () => ({
        filters: [{
            id: 0,
            title: 'Весь список',
            slug: 'Весь список',
        },
        {
            id: 1,
            title: 'Проблемные',
            slug: 'Пробл.',
            color: 'Желтый',
        },
        {
            id: 2,
            title: 'Критические',
            slug: 'Крит.',
            color: 'Красный',
        },
        {
            id: 3,
            title: 'Есть замечания',
            slug: 'Замеч',
            color: 'Голубой',
        },
        {
            id: 4,
            title: 'Выполнено',
            slug: 'Выполн',
            color: 'Зеленый',
        },
        ],
    }),
});
