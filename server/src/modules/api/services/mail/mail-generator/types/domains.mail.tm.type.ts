export type DomainsMailTm = {
  'hydra:member': [
    {
      '@id': string
      '@type': string
      '@context': string
      id: string
      domain: string
      isActive: boolean
      isPrivate: boolean
      createdAt: Date
      updatedAt: Date
    },
  ]
  'hydra:totalItems': 0
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
