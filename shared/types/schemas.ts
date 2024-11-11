// shared/types/schemas.ts
import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string(),
    displayName: z.string(),
    email: z.string().email(),
    accessToken: z.string(),
    refreshToken: z.string().optional(),
});

// Infer the UserType TypeScript type from the Zod schema
export type UserType = z.infer<typeof UserSchema>;
