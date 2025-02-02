import { Interaction } from '@serenity-js/core'
import { BrowseTheWeb } from '@serenity-js/web'

// eslint-disable-next-line unused-imports/no-unused-vars
function navigateTo(url: string) {
  return Interaction.where(`#actor navigates to ${url}`, async (actor) => {
    const page = await BrowseTheWeb.as(actor).currentPage()
    return page.navigateTo(url)
  })
}
