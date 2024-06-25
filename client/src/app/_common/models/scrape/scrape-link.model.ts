import { SocialNetwork } from '../../enums/social-network.enum'
import { ID } from '../../types/ID.type'
import { ScrapeLinkStatus } from './scrape-link-status.enum'
import { ScrapeType } from './scrape-type.enum'
import { Scrape } from './scrape.model'

export interface ScrapeLink {
  id: ID
  code: string
  scrape: Scrape
  scrapeId: ID
  tag?: string
  link: string
  username?: string
  socialIdOwner?: string
  socialId?: string
  type: ScrapeType
  socialNetwork: SocialNetwork
  mediaType: number
  followers: number
  likes: number
  comments: number
  createdAt: Date
  updatedAt?: Date
  status: ScrapeLinkStatus
}
