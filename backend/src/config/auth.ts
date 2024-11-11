// src/config/auth.ts


import passport from 'passport';
/*
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Request, Response, NextFunction } from 'express';
import { UserSchema, UserType } from '@shared/types/schemas';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: process.env.GOOGLE_CALLBACK_URL!,
},
(accessToken, refreshToken, profile, done) => {
    // Here, you could save user data to your database
    // For now, we'll just return the profile and token details
    return done(null, { profile, accessToken, refreshToken });
}));

// Serialize and deserialize user for session support
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj: unknown, done) => {
    try {
        const user = obj ? UserSchema.parse(obj) : null; // Validate with Zod
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});
*/

export default passport;
