import { create } from 'zustand';

type CounterStore = {
  country: string;
  user: {
    name: string;
    age: number;
  };
  updateCountry: (country: string) => void;
  updatedName: (name: string) => void;
};

export const useCounterStore = create<CounterStore>(set => ({
  country: 'USA',
  updateCountry: country => set({ country: country }),
  user: {
    name: 'John',
    age: 30,
  },
  updatedName: name =>
    set(state => ({
      user: {
        ...state.user,
        name: name,
      },
    })),
  
  // updatedName: name => set(() => ({
  //   user: {
  //     name,
  //   }
  // })) НЕЛЬЗЯ ТАК ДЕЛАТЬ, ПОТОМУ ЧТО ТАК МЫ ПЕРЕЗАПИСЫВАЕМ ВЕСЬ ОБЪЕКТ user И У НАС ПРОПАДАЕТ age
}));
