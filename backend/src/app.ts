// src/app.ts
import express from 'express';
import { Request, Response } from 'express';
import session from 'express-session';
import passport from './config/auth';

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET || 'change_this_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' },
}));

app.use(passport.initialize());
app.use(passport.session());

// OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req: Request, res: Response) => {
        // Successful authentication, redirect to home or another page
        res.redirect('/');
    });

export default app;
