// Utilities
import { defineStore } from 'pinia';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [{
      full_name: 'Фамилиева Имя Отчествовна',
      inn: '0987654321',
      type_contract: {
        id: 0,
        title: 'Договор гражданско-правового характера',
        slug: 'ГПХ',
      },
      address: 'г.Москва',
      date_birth: '11.09.2002',
      age: 24,
      gender: {
        id: 0,
        title: 'женский',
        slug: 'жен.',
      },
      position: {
        id: 0,
        name: 'босс',
      },
      status: {
        tag_id: 0,
        tag: {
          id: 0,
          title: 'Ошибка',
          slug: 'ошиб.',
          color: 'red',
        },
        description: 'БОЧОК ПОТИК',
      },
      county: {
        id: 0,
        icon: '/images/russia.png',
        title: 'Россия',
        slug: 'RU',
      },
    },
    {
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
          title: 'Проблема',
          slug: 'пробл.',
          color: 'yellow',
        },
        description: 'БОЧОК СКОРО ПОТИКИТ',
      },
      county: {
        id: 1,
        icon: '/images/tajikistan.png',
        title: 'Таджикистан',
        slug: 'TJ',
      },
    }],
  }),
});
