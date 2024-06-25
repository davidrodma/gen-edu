import { QualityTestStatus } from './quality-test-status.enum'
import { QualityTestProfile } from './quality-test-profile.model'
import { ID } from '../../types/ID.type'
import { SocialNetwork } from '../../enums/social-network.enum'
import { QualityTestCategory } from './quality-test-category.enum'

export interface QualityTest {
  id: ID
  seq: string
  title: string
  socialNetwork: SocialNetwork
  category: QualityTestCategory
  quantity: number
  countSuccess: number
  countErrors: number
  socialId: string
  link: string
  followers: number
  likes: number
  comments: number
  posts: number
  percentImage: number
  percentPrivate: number
  percentName: number
  percentBio: number
  percentStories: number
  avgFollowers: number
  avgPosts: number
  avgFollowing: number
  avgCharBio: number
  noteError: number
  createdAt: Date
  updatedAt: Date
  status: QualityTestStatus
  profiles: QualityTestProfile[]
}
