import { create } from "zustand";

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: string;
  };
  registered: {
    date: string;
    age: string;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

interface UserStore {
  isLoading: boolean;
  aboutUsers: User[];
  teamUsers: User[];
  fetchAboutUsers: () => Promise<void>;
  fetchTeamUsers: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  aboutUsers: [],
  teamUsers: [],
  isLoading: false,
  fetchAboutUsers: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("https://randomuser.me/api/?results=4&seed=jiwa");
      const data = await res.json();
      set({ aboutUsers: data.results });
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  fetchTeamUsers: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("https://randomuser.me/api/?results=6&seed=jiwa-pro");
      const data = await res.json();
      set({ teamUsers: data.results });
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
