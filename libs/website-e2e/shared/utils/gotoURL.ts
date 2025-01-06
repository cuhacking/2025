export async function gotoURL(url: string) {
  await this.page
    .goto(url)
}
