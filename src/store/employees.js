// Utilities
import { defineStore } from 'pinia';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: [
      {
        full_name: 'Фамилиева Имя Отчествовна',
        inn: '0987654321',
        address: 'г.Москва',
        date_birth: '11.09.2002',
        age: 24,
        type_contract: {
          id: 1,
          title: 'Договор гражданско-правового характера',
          slug: 'ГПХ',
        },
        type_contact_id: 1,
        gender: {
          id: 1,
          title: 'Женский',
          slug: 'жен.',
        },
        gender_id: 1,
        country: {
          id: 0,
          icon: '/images/russia.png',
          title: 'Россия',
          slug: 'RU',
        },
        country_id: 0,
        position: {
          id: 1,
          name: 'Токарь',
        },
        position_id: 1,
        status: {
          tag_id: 1,
          tag: {
            id: 1,
            title: 'Ошибка',
            slug: 'ошиб.',
            color: 'red',
          },
          description: 'БОЧОК ПОТИК',
        },
      },
      {
        full_name: 'Шаднев Адам Соломонович',
        inn: '1234567890',
        address: 'г.Санкт-Петербург',
        date_birth: '11.07.2000',
        age: 22,
        type_contract: {
          id: 2,
          title: 'Самозанятый',
          slug: 'СМЗ',
        },
        type_contact_id: 2,
        gender: {
          id: 0,
          title: 'Мужской',
          slug: 'муж.',
        },
        gender_id: 0,
        country: {
          id: 2,
          icon: '/images/tajikistan.png',
          title: 'Таджикистан',
          slug: 'TJ',
        },
        country_id: 2,
        position: {
          id: 0,
          name: 'Промышленный альпинист',
        },
        position_id: 0,
        status: {
          tag_id: 0,
          tag: {
            id: 0,
            title: 'Проблема',
            slug: 'ошиб.',
            color: 'yellow',
          },
          description: 'БОЧОК СКОРО ПОТИКЕТ',
        },
      },
    ],
    tags: [],
    searchEmployees: '',
    filters: {
      country: null,
      gender: null,
      position: null,
      contractType: [],
    },
  }),
  getters: {
    filteredEmployees: (state) => state.employees.filter(employee =>
      employee.full_name.toLowerCase().includes(state.searchEmployees.toLowerCase())
      && (state.tags.includes(employee.status.tag_id) || state.tags.length === 0)
      && (state.filters.country === employee.country_id || state.filters.country === null)
      && (state.filters.gender === employee.gender_id || state.filters.gender === null)
      && (state.filters.position === employee.position_id || state.filters.position === null)
      && (state.filters.contractType.includes(employee.type_contract.id) || state.filters.contractType.length === 0)),
  },
  actions: {
    resetTags() {
      this.tags = [];
    },
  },
});
