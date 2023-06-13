import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
 "user/login", async (credentials) => {
   const user = await authService.login(credentials);
   return user;
 }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    return await authService.profile();
   });
export const logoutThunk = createAsyncThunk(
"auth/logout", async () => {
return await authService.logout();
});
export const updateUserThunk = createAsyncThunk(
"user/updateUser", async (user) => {
    await authService.updateUser(user);
    return user;
});

export const register = createAsyncThunk( "user/register", async ({ username, password }) => { 
    await authService.register(username, password);
    return await authService.login(username, password);
});

   