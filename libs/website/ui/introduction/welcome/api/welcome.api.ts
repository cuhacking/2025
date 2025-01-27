import { fetchCMSData } from '@cuhacking/shared/helpers/fetch-cms-data'

export async function fetchWelcomeData(): Promise<WelcomeData | null> {
  const query = `
    query {
      Welcomes {
        docs {
          title
          organization
          date
          callToAction
        }
      }
    }
  `
  const res = await fetchCMSData(query)

  return {
    title: res.title,
    organization: res.organization,
    date: res.date,
    callToAction: res.callToAction,
  }
}
