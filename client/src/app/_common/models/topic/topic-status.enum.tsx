export enum TopicStatus {
  PENDING = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  ERROR = 3,
  CANCELED = 4,
  PARTIAL = 5,
}

export const topicStatusArray = [
  { key: TopicStatus.PENDING, label: "Pending" },
  { key: TopicStatus.IN_PROGRESS, label: "In Progress" },
  { key: TopicStatus.COMPLETED, label: "Completed" },
  { key: TopicStatus.ERROR, label: "Error" },
  { key: TopicStatus.CANCELED, label: "Canceled" },
  { key: TopicStatus.PARTIAL, label: "Partial" },
]

export const topicStatusTemplate = (status: TopicStatus) => {
  const label = topicStatusArray?.find((item) => item.key == status)?.label
  return (
    <span
      className={`${
        {
          [TopicStatus.PENDING]: "bg-opacity-10 bg-gray-700 text-gray-700",
          [TopicStatus.IN_PROGRESS]:
            "bg-opacity-10 bg-warning-300 text-warning-300",
          [TopicStatus.COMPLETED]:
            "bg-opacity-10 bg-success-400 text-success-400",
          [TopicStatus.ERROR]: "bg-opacity-10 bg-error-300 text-error-300",
          [TopicStatus.CANCELED]:
            "bg-opacity-10 bg-error-300 text-error-300 line-through",
          [TopicStatus.PARTIAL]: "bg-opacity-10 bg-purple text-purple",
        }[status]
      } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
    >
      {label}
    </span>
  )
}
