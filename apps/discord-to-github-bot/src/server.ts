import process from 'node:process'
import express from 'express'
import passport from 'passport'
import session from 'express-session'
import { Strategy as GitHubStrategy } from 'passport-github2'
import dotenv from 'dotenv'
import authRouter from './routes/auth-routes'
import issueRouter from './routes/issue-routes'

const app = express()

// Determine the environment
const environment = process.env.NODE_ENV || 'development'

// Load the appropriate .env file based on the environment
dotenv.config({
  path: environment === 'production' ? '.env.prod' : '.env.development',
})

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET ?? '',
  }),
)
// Initialize Passport and restore session
app.use(passport.initialize())
app.use(passport.session())

// GitHub Strategy Setup
passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID ?? '',
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
  callbackURL: process.env.GITHUB_REDIRECT_URI ?? '',
}, (accessToken: string, _refreshToken: string, _profile: any, done: (err: any, user?: any) => void) => {
  process.nextTick(() => {
    return done(null, { accessToken })
  })
}))

passport.serializeUser((user: any, done) => {
  done(null, user)
})

passport.deserializeUser((user: any, done) => {
  done(null, user)
})

app.use('/api', authRouter)
app.use('/api', issueRouter)

export default app
