import { create, type StoreApi, type UseBoundStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, type Location } from "#constants/index";

const DEFAULT_LOCATION = locations.work;

interface LocationStore {
  activeLocation: Location | null;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
}

const useLocationStore: UseBoundStore<StoreApi<LocationStore>> =
  create<LocationStore>()(
    immer((set) => ({
      activeLocation: DEFAULT_LOCATION,
      setActiveLocation: (location: Location) =>
        set((state: LocationStore) => {
          state.activeLocation = location;
        }),

      resetActiveLocation: () =>
        set((state: LocationStore) => {
          state.activeLocation = DEFAULT_LOCATION;
        }),
    })),
  );

export default useLocationStore;
