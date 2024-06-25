export enum QualityTestCategory {
  FOLLOWERS = 1,
  LIKES = 2,
  COMMENTS = 3,
}
export const qualityTestCategoryArray = (
  Object.keys(QualityTestCategory).filter(key => isNaN(Number(key))) as (keyof typeof QualityTestCategory)[]
).map(key => {
  const enumKey = key as keyof typeof QualityTestCategory

  return {
    label: enumKey.charAt(0).toUpperCase() + enumKey.slice(1).toLocaleLowerCase(),
    key: QualityTestCategory[enumKey],
  }
})

export const qualityTestCategoryLabel = (category: QualityTestCategory) => {
  return qualityTestCategoryArray.findLast(item => item.key == category)?.label
}
