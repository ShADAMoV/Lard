// Utilities
import { defineStore } from 'pinia';
import { watch } from 'vue';

export const useEmployeesStore = defineStore('employees', {
  state: () => ({
    employees: JSON.parse(localStorage.getItem('employees')) ?? [],
    tags: [],
    searchEmployees: '',
    filters: {
      country: null,
      gender: null,
      position: null,
      contractType: [],
    },
    visibleItems: 4,
  }),
  getters: {
    filteredEmployees: (state) => state.employees.filter(employee =>
      employee.full_name.toLowerCase().includes(state.searchEmployees.toLowerCase())
      && (state.tags.includes(employee.status.tag_id) || state.tags.length === 0)
      && (state.filters.country === employee.country_id || state.filters.country === null)
      && (state.filters.gender === employee.gender_id || state.filters.gender === null)
      && (state.filters.position === employee.position_id || state.filters.position === null)
      && (state.filters.contractType.includes(employee.type_contract.id) || state.filters.contractType.length === 0)),
    slicedEmployees() {
      return this.filteredEmployees.slice(0, this.visibleItems);
    },
  },
  actions: {
    resetTags() {
      this.tags = [];
    },
  },
});

watch(() => useEmployeesStore().employees, (employees) => {
  localStorage.setItem('employees', JSON.stringify(employees));
},{
    deep: true,
});
