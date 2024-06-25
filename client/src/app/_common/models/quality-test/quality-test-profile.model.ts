import { ID } from '../../types/ID.type'
import { QualityTest } from './quality-test.model'

export interface QualityTestProfile {
  id: ID
  qualityTest: QualityTest
  qualityTestId: ID
  extracted: boolean
  username: string
  socialId: string
  name: string
  followers: number
  posts: number
  following: number
  stories: number
  biography: string
  isPrivate: boolean
  hasStories: boolean
  hasImage: boolean
  imageUrl: string
  image: string
  comment: string
  createdAt: Date
  updatedAt: Date
}
