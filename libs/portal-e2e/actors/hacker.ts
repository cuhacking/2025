import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'
import { chromium } from 'playwright'
import { ActorBase } from './actor'

const hackerObj = new ActorBase('Hacker')

export async function createHacker() {
  const hacker = hackerObj.getActor()
  const browser = await chromium.launch({ headless: true })
  hacker.whoCan(BrowseTheWebWithPlaywright.using(browser))
  return hacker
}
