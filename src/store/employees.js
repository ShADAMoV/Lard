// Utilities
import { defineStore } from 'pinia';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [{
      full_name: 'Шаднев Адам Соломонович',
      inn: '1234567890',
      type_contract: {
        id: 1,
        title: 'Самозанятый',
        slug: 'СМЗ',
      },
      address: 'г.Санкт-Петербург',
      date_birth: '11.07.2000',
      age: 22,
      gender: {
        id: 1,
        title: 'мужской',
        slug: 'муж.',
      },
      position: {
        id: 1,
        name: 'альпинист',
      },
      status: {
        tag_id: 1,
        tag: {
          id: 1,
          title: 'Проблемы',
          slug: 'пробл',
          color: 'critical',
        },
        description: 'БОЧЁК ПОТИК',
      },
      county: {
        id: 1,
        icon: '',
        title: 'Россия',
        slug: 'RU',
      },
    }],
  }),
});
