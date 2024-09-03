import { Router } from 'express'
import passport from 'passport'

const authRouter = Router()

authRouter.get('/auth/github-callback', passport.authenticate('github', { failureRedirect: '/' }))

authRouter.get('/auth/github', passport.authenticate('github', { scope: ['repo_public'] }), (req, res) => {
  res.redirect('https://discord.com/channels/1193362882302320751')
})

export default authRouter
