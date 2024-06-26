export type UserInstagramResponse = {
  pk: string
  username: string
  full_name: string
  is_private: boolean
  profile_pic_url: string
  profile_pic_url_hd: string
  is_verified: true
  media_count: number
  follower_count: number
  following_count: number
  biography: ''
  external_url: string
  account_type: number
  is_business: boolean
  public_email: string
  contact_phone_number: string
  public_phone_country_code: string
  public_phone_number: string
  business_contact_method: string
  business_category_name: string
  category_name: string
  category: string
  address_street: string
  city_id: string
  city_name: string
  latitude: number
  longitude: number
  zip: string
  instagram_location_id: string
  interop_messaging_user_fbid: string
  image_base64?: string
}
