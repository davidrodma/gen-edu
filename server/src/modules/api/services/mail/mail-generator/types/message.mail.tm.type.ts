export type MessageMailTm = {
  '@context': string
  '@id': string
  '@type': string
  id: string
  accountId: string
  msgid: string
  from: {
    name: string
    address: string
  }
  to: [
    {
      name: string
      address: string
    },
  ]
  cc: [string]
  bcc: [string]
  subject: string
  seen: boolean
  flagged: boolean
  isDeleted: boolean
  verifications: [string]
  retention: boolean
  retentionDate: Date
  text: string
  html: [string]
  hasAttachments: boolean
  attachments: [
    {
      id: string
      filename: string
      contentType: string
      disposition: string
      transferEncoding: string
      related: boolean
      size: number
      downloadUrl: string
    },
  ]
  size: number
  downloadUrl: string
  createdAt: Date
  updatedAt: Date
}
