export enum ScrapeLinkStatus {
  NEW = 0,
  USED = 1,
}

export const scrapeLinkStatusArray = [
  { key: ScrapeLinkStatus.NEW, label: 'New' },
  { key: ScrapeLinkStatus.USED, label: 'Used' },
]

export const scrapeLinkStatusTemplate = (status: ScrapeLinkStatus) => {
  const label = scrapeLinkStatusArray?.find(item => item.key == status)?.label
  return (
    <span
      className={`${
        {
          [ScrapeLinkStatus.NEW]: 'bg-opacity-10 bg-success-400 text-success-400',
          [ScrapeLinkStatus.USED]: 'bg-opacity-10 bg-error-300 text-error-300',
        }[status]
      } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
    >
      {label}
    </span>
  )
}
