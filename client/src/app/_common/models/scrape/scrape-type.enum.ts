export enum ScrapeType {
  POST = 'post',
  PROFILE = 'profile',
}

export const scrapeTypeArray = Object.keys(ScrapeType).map(key => {
  const enumKey = key as keyof typeof ScrapeType
  return {
    label: ScrapeType[enumKey].charAt(0).toUpperCase() + ScrapeType[enumKey].slice(1),
    key: ScrapeType[enumKey],
  }
})
