export enum QualityTestStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  ERROR = 3,
  CANCELED = 4,
  PARTIAL = 5,
}

export const qualityTestStatusArray = [
  { key: QualityTestStatus.PENDING, label: 'Pending' },
  { key: QualityTestStatus.IN_PROGRESS, label: 'In Progress' },
  { key: QualityTestStatus.COMPLETED, label: 'Completed' },
  { key: QualityTestStatus.ERROR, label: 'Error' },
  { key: QualityTestStatus.CANCELED, label: 'Canceled' },
  { key: QualityTestStatus.PARTIAL, label: 'Partial' },
]

export const qualityTestStatusTemplate = (status: QualityTestStatus) => {
  const label = qualityTestStatusArray?.find(item => item.key == status)?.label
  return (
    <span
      className={`${
        {
          [QualityTestStatus.PENDING]: 'bg-opacity-10 bg-gray-700 text-gray-700',
          [QualityTestStatus.IN_PROGRESS]: 'bg-opacity-10 bg-warning-300 text-warning-300',
          [QualityTestStatus.COMPLETED]: 'bg-opacity-10 bg-success-400 text-success-400',
          [QualityTestStatus.ERROR]: 'bg-opacity-10 bg-error-300 text-error-300',
          [QualityTestStatus.CANCELED]: 'bg-opacity-10 bg-error-300 text-error-300 line-through',
          [QualityTestStatus.PARTIAL]: 'bg-opacity-10 bg-purple text-purple',
        }[status]
      } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
    >
      {label}
    </span>
  )
}
