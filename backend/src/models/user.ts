// backend/src/models/user.ts
import { UserSchema, UserType } from '@shared/types/schemas';

// Mock database for storing users
const users = new Map<string, UserType>();

// CRUD functions using UserType for type safety
export const addUser = (user: UserType) => users.set(user.id, user);
export const getUser = (id: string): UserType | undefined => users.get(id);
export const deleteUser = (id: string) => users.delete(id);
