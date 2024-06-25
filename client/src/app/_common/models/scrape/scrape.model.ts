import { SocialNetwork } from '../../enums/social-network.enum'
import { ID } from '../../types/ID.type'
import { ScrapeLink } from './scrape-link.model'
import { ScrapeStatus } from './scrape-status.enum'
import { ScrapeType } from './scrape-type.enum'

export interface Scrape {
  id?: ID
  seq: string
  tag?: string
  nextMaxId?: string
  socialNetwork: SocialNetwork
  type: ScrapeType
  quantity: number
  countSuccess: number
  countErrors: number
  countReaded: number
  noteError?: string
  createdAt: Date
  updatedAt: Date
  status: ScrapeStatus
  links?: ScrapeLink[]
}
