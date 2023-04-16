import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

//Desenha as propriedades que tem que ter do usuario
export interface User {
    nome: string;
    idade: number;
}

export interface UserSlice {
    user: User /* | null; */;
    addUser: (user: User) => void;
    removeUser: () => void;
}

export const useUserStore = create<UserSlice>(
    persist(
        (set) =>
        ({
            user: { nome: 'ian', idade: 30 },
            addUser: (user: User) => {
                set({ user })
            },
            removeUser: () => {
                /*  set({ user: null }) */
                set({ user: { nome: '', idade: 0 } });
            },
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)
