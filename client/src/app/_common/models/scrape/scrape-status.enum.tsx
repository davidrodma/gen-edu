export enum ScrapeStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  ERROR = 3,
  CANCELED = 4,
  PARTIAL = 5,
}

export const scrapeStatusArray = [
  { key: ScrapeStatus.PENDING, label: 'Pending' },
  { key: ScrapeStatus.IN_PROGRESS, label: 'In Progress' },
  { key: ScrapeStatus.COMPLETED, label: 'Completed' },
  { key: ScrapeStatus.ERROR, label: 'Error' },
  { key: ScrapeStatus.CANCELED, label: 'Canceled' },
  { key: ScrapeStatus.PARTIAL, label: 'Partial' },
]

export const scrapeStatusTemplate = (status: ScrapeStatus) => {
  const label = scrapeStatusArray?.find(item => item.key == status)?.label
  return (
    <span
      className={`${
        {
          [ScrapeStatus.PENDING]: 'bg-opacity-10 bg-gray-700 text-gray-700',
          [ScrapeStatus.IN_PROGRESS]: 'bg-opacity-10 bg-warning-300 text-warning-300',
          [ScrapeStatus.COMPLETED]: 'bg-opacity-10 bg-success-400 text-success-400',
          [ScrapeStatus.ERROR]: 'bg-opacity-10 bg-error-300 text-error-300',
          [ScrapeStatus.CANCELED]: 'bg-opacity-10 bg-error-300 text-error-300 line-through',
          [ScrapeStatus.PARTIAL]: 'bg-opacity-10 bg-purple text-purple',
        }[status]
      } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
    >
      {label}
    </span>
  )
}
