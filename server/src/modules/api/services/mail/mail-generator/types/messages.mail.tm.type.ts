export type MessagesMailTm = {
  'hydra:member': [
    {
      '@id': string
      '@type': string
      '@context': string
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
      subject: string
      intro: string
      seen: true
      isDeleted: true
      hasAttachments: true
      size: number
      downloadUrl: string
      createdAt: Date
      updatedAt: Date
    },
  ]
  'hydra:totalItems': number
  'hydra:view': {
    '@id': string
    '@type': string
    'hydra:first': string
    'hydra:last': string
    'hydra:previous': string
    'hydra:next': string
  }
  'hydra:search': {
    '@type': string
    'hydra:template': string
    'hydra:variableRepresentation': string
    'hydra:mapping': [
      {
        '@type': string
        variable: string
        property: string
        required: boolean
      },
    ]
  }
}
