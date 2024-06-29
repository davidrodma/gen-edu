export enum ContextStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  ERROR = 3,
}

export const ContextStatusArray = [
  { key: ContextStatus.PENDING, label: "Pending" },
  { key: ContextStatus.IN_PROGRESS, label: "In Progress" },
  { key: ContextStatus.COMPLETED, label: "Completed" },
  { key: ContextStatus.ERROR, label: "Error" },
]

export const ContextStatusTemplate = (status: ContextStatus) => {
  const label = ContextStatusArray?.find((item) => item.key == status)?.label
  return (
    <span
      className={`${
        {
          [ContextStatus.PENDING]: "bg-opacity-10 bg-gray-700 text-gray-700",
          [ContextStatus.IN_PROGRESS]:
            "bg-opacity-10 bg-warning-300 text-warning-300",
          [ContextStatus.COMPLETED]:
            "bg-opacity-10 bg-success-400 text-success-400",
          [ContextStatus.ERROR]: "bg-opacity-10 bg-error-300 text-error-300",
        }[status]
      } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
    >
      {label}
    </span>
  )
}
