import { StatusDefault } from '../../enums/status.default.enum'
import { ID } from '../../types/ID.type'
import { Domain } from '../domain/domain.model'

export interface SmmService {
  id?: ID
  domain?: Domain
  domainId: ID
  service: string
  name: string
  type: string
  rate: string
  rateUsd: string
  min: string
  max: string
  dripfeed: boolean
  refill: boolean
  cancel: boolean
  category: string
  createdAt: Date
  updatedAt: Date
  status: StatusDefault
}
