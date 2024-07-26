import { create } from "zustand";

export type ProfileRoutes = "about-me" | "about-work" | "my-values" | "causes";

type ProfileCardStore = {
  menu: ProfileRoutes;
  navigate: (_: ProfileRoutes) => void;
};

export const useProfileStore = create<ProfileCardStore>((set) => ({
  menu: "about-me",
  navigate: (to: ProfileRoutes) => set(() => ({ menu: to })),
}));
