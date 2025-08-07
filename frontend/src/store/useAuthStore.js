import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = "http://localhost:8000";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,
  onlineUsers: [],
  socket: null,

  // check auth
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("error in checkAuth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // Set online users
  setOnlineUsers: (users) => set({ onlineUsers: users }),

  // signup
  signup: async (data) => {
    try {
      set({ isSigningUp: true });

      const res = await axiosInstance.post("/auth/signup", data);
      toast.success("Account created successfully");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.log("error in signup", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  //login
  login: async (data) => {
    try {
      set({ isLoggingIn: true });
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
      get().connectSocket();
    } catch (error) {
      console.log("error in login", error);
      const message =
        error?.response?.data?.message || "Failed to login. Please try again.";
      toast.error(message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  //logOut
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disConnectSocket();
    } catch (error) {
      console.log("error in logout", error);
      toast.error("Failed to logout");
    }
  },

  //update Profile
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id
      }
    });

    socket.connect();
    set({ socket: socket });
    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },
  disConnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
