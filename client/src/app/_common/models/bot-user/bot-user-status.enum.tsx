import { Tooltip } from 'primereact/tooltip'
import { BotUser } from './bot-user.model'

export enum BotUserStatus {
  PENDING = 0,
  CREATING_EMAIL = 1,
  REGISTERING = 2,
  LOGIN = 3,
  CONFIRMING_CODE = 4,
  GENERATING_TOKEN = 5,
  ACTIVATED = 6,
  DEACTIVATED = 7,
  ERROR = 8,
  CANCELED = 9,
  SUSPENDED = 10,
}

export const botUserStatusArray = [
  { key: BotUserStatus.PENDING, label: 'Pending' },
  { key: BotUserStatus.CREATING_EMAIL, label: 'Creating Email' },
  { key: BotUserStatus.REGISTERING, label: 'Registering' },
  { key: BotUserStatus.LOGIN, label: 'Login' },
  { key: BotUserStatus.CONFIRMING_CODE, label: 'Confirming Code' },
  { key: BotUserStatus.GENERATING_TOKEN, label: 'Generating Token' },
  { key: BotUserStatus.ACTIVATED, label: 'Activated' },
  { key: BotUserStatus.DEACTIVATED, label: 'Deactivated' },
  { key: BotUserStatus.ERROR, label: 'Error' },
  { key: BotUserStatus.CANCELED, label: 'Canceled' },
  { key: BotUserStatus.SUSPENDED, label: 'Suspended' },
]

export const botUserStatusTemplate = (status: BotUserStatus, botUser?: BotUser) => {
  const label = botUserStatusArray?.find(item => item.key == status)?.label
  const tooltip =
    botUser &&
    botUser?.noteError &&
    (status == BotUserStatus.ERROR ||
      status == BotUserStatus.DEACTIVATED ||
      status == BotUserStatus.CANCELED ||
      botUser.countErrors > 0)
      ? botUser.noteError
      : ''
  return (
    <>
      <span
        data-pr-tooltip={tooltip}
        data-pr-position="bottom"
        className={`status-badge-${botUser?.id} ${
          {
            [BotUserStatus.PENDING]: 'bg-opacity-10 bg-gray-700 text-gray-700',
            [BotUserStatus.CREATING_EMAIL]: 'bg-opacity-10 bg-gray-900 text-gray-900',
            [BotUserStatus.REGISTERING]: 'bg-opacity-10 bg-warning-200 text-warning-200',
            [BotUserStatus.LOGIN]: 'bg-opacity-10 bg-warning-300 text-warning-300',
            [BotUserStatus.CONFIRMING_CODE]: 'bg-opacity-10 bg-purple text-purple',
            [BotUserStatus.GENERATING_TOKEN]: 'bg-opacity-10 bg-bamber-500 text-bamber-500',
            [BotUserStatus.ACTIVATED]: 'bg-opacity-10 bg-success-400 text-success-400',
            [BotUserStatus.DEACTIVATED]: 'bg-opacity-10 bg-error-300 text-error-300',
            [BotUserStatus.ERROR]: 'bg-error-300 text-white',
            [BotUserStatus.CANCELED]: 'bg-opacity-10 bg-error-300 text-error-300 line-through',
            [BotUserStatus.SUSPENDED]: 'bg-opacity-30 bg-error-300 text-error-300',
          }[status]
        } dark:bg-darkblack-500 rounded text-sm font-medium text-am px-3 py-1`}
      >
        {label}
      </span>
      {tooltip && <Tooltip target={`.status-badge-${botUser?.id}`} />}
    </>
  )
}
