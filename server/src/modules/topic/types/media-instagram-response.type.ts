export type MediaInstagramResponse = {
  pk: string
  id: string
  code: string
  taken_at: Date
  taken_at_ts: number
  media_type: number
  product_type: ''
  thumbnail_url: string
  location: {
    pk: number
    name: string
    phone: ''
    website: ''
    category: ''
    hours: {}
    address: ''
    city: ''
    zip: ''
    lng: number
    lat: number
    external_id: string
    external_id_source: string
  }
  user: {
    pk: string
    username: string
    full_name: ''
    profile_pic_url: string
    profile_pic_url_hd: string
    is_private: boolean
    is_verified: boolean
    stories: [string]
  }
  comment_count: number
  comments_disabled: false
  like_count: number
  play_count: number
  has_liked: boolean
  caption_text: string
  accessibility_caption: string
  usertags: [
    {
      user: {
        pk: string
        username: string
        full_name: ''
        profile_pic_url: string
        profile_pic_url_hd: string
        is_private: boolean
        is_verified: boolean
        stories: [string]
      }
      x: number
      y: number
    },
  ]
  sponsor_tags: []
  video_url: string
  view_count: number
  video_duration: number
  title: ''
  resources: []
  image_versions: []
  video_versions: []
  clips_metadata: {}
  video_dash_manifest: ''
  like_and_view_counts_disabled: boolean
  coauthor_producers: []
  is_paid_partnership: boolean
  image_base64?: string
}
