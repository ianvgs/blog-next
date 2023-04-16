import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CategoryLink {
    id: number;
    nome: string;
    endereco: string;
}
export interface CategoryLinksSlice {
    links: CategoryLink[];
    addLinks: (links: CategoryLink[]) => void;
}
export const useLinkStore = create<CategoryLinksSlice>(
    persist(
        (set) =>
        ({
            links: [],
            addLinks: (apiLInks: CategoryLink[]) => set({ links: apiLInks }),
        }),
        {
            name: 'itens-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
)








