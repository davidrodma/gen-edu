export type CommentInstagramResponse = {
  pk: string
  text: string
  user: {
    pk: string
    username: string
    full_name: string
    profile_pic_url: string
    profile_pic_url_hd: string
    is_private: boolean
    is_verified: boolean
    stories: []
  }
  created_at_utc: Date
  content_type: string
  status: string
  has_liked: boolean
  like_count: number
}
