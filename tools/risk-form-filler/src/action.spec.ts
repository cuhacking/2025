import { test as base } from '@playwright/test'
import { Config } from './data/config.data'
import { Form } from './object-models/pages/pom'

const test = base.extend<{ form: Form }>({
  form: async ({ page }, use) => {
    const form = new Form(page)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(form)
  },
})

test('Fill out In-Person Form', async ({ form }) => {
  const url = `${Config.LINK.BASE}/${Config.LINK.IN_PERSON}`
  await form.goto(url)
  await form.fill(Config)
})

test('Fill out Hybrid Form', async ({ form }) => {
  const url = `${Config.LINK.BASE}/${Config.LINK.HYBRID}`
  await form.goto(url)
  await form.fill(Config)
})

test('Fill out Online Form', async ({ form }) => {
  const url = `${Config.LINK.BASE}/${Config.LINK.ONLINE}`
  await form.goto(url)
  await form.fill(Config)
})
