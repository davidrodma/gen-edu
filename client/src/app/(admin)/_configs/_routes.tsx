const root = "/panel"
export const _routes = {
  _root: root,
  signin: `/signin`,
  signup: `/signup`,
  signout: `/signout`,
  home: `${root}/dashboard`,
  dashboard: `${root}/dashboard`,
  users: `${root}/users`,
  botUsers: `${root}/bot-users`,
  configuration: `${root}/configuration`,
  proxies: `${root}/proxies`,
  domains: `${root}/domains`,
  smmServices: `${root}/smm-services/services`,
  topics: `${root}/generation/topics`,
  contexts: `${root}/generation/topics/contexts`,
  qualityTests: `${root}/quality-tests`,
} as const
