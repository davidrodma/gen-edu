export enum SocialNetwork {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
}

export const SocialNetworkArray = Object.keys(SocialNetwork).map(key => {
  const enumKey = key as keyof typeof SocialNetwork
  return {
    label: SocialNetwork[enumKey].charAt(0).toUpperCase() + SocialNetwork[enumKey].slice(1).replace('tok', 'Tok'),
    key: SocialNetwork[enumKey],
  }
})
