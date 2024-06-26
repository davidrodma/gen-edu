export type StoryInstagramResponse = {
  pk: string
  id: string
  code: string
  taken_at: Date
  media_type: number
  product_type: string
  thumbnail_url: string
  user: {
    pk: string
    username: string
    full_name: string
    profile_pic_url: string
    profile_pic_url_hd: string
    is_private: true
    is_verified: true
    stories: [string]
  }
  video_url: string
  video_duration: number
  sponsor_tags: []
  mentions: [
    {
      user: {
        pk: string
        username: string
        full_name: string
        profile_pic_url: string
        profile_pic_url_hd: string
        is_private: true
        is_verified: true
        stories: [string]
      }
      x: number
      y: number
      width: number
      height: number
    },
  ]
  links: [
    {
      webUri: string
      x: number
      y: number
      z: number
      width: number
      height: number
      rotation: number
    },
  ]
  hashtags: [
    {
      hashtag: {
        id: string
        name: string
        media_count: number
        allow_following: true
        profile_pic_url: string
      }
      x: number
      y: number
      width: number
      height: number
    },
  ]
  locations: [
    {
      location: {
        pk: number
        name: string
        phone: string
        website: string
        category: string
        hours: {}
        address: string
        city: string
        zip: string
        lng: number
        lat: number
        external_id: string
        external_id_source: string
      }
      x: number
      y: number
      width: number
      height: number
    },
  ]
  stickers: [
    {
      id: string
      type: string
      x: number
      y: number
      z: number
      width: number
      height: number
      rotation: number
      story_link: {
        url: string
        link_title: string
        link_type: string
        display_url: string
      }
      extra: {}
    },
  ]
  medias: []
}
