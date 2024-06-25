import { ApiService } from '../../api.service'
import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'
import { AccountsMailTm } from './types/accounts.mail.tm.type'
import { ErrorMailTm } from './types/error.mail.tm.type'
import { DomainsMailTm } from './types/domains.mail.tm.type'
import { MessagesMailTm } from './types/messages.mail.tm.type'
import { MessageMailTm } from './types/message.mail.tm.type'
import { TokenMailTm } from './types/token.mail.tm.type'
import { faker } from '@faker-js/faker'

// const sleep = require('./sleep')

@Injectable()
export default class MailTm {
  private readonly baseURL = 'https://api.mail.tm'
  private TOKEN = ''
  private ACCOUNT_ID = ''
  constructor(private readonly api: ApiService) {
    // this.api.setConfig{this.baseURL:}
    this.api.setConfig({ baseURL: this.baseURL, useProxy: false })
  }

  async createAccount(address: string, password: string) {
    try {
      const response = await this.api.request<AccountsMailTm & ErrorMailTm>({
        url: 'https://api.mail.tm/accounts',
        method: 'post',
        params: {
          address,
          password,
        },
      })
      await this.checkError(response)
      return response
    } catch (e) {
      throw 'Erro ao criar conta de email ->' + e
    }
  }

  async confirmLink(link) {
    const confirmResult = await fetch(link, {
      method: 'get',
    })
    return confirmResult
  }
  async getDomains() {
    try {
      const domains = await this.api.request<DomainsMailTm & ErrorMailTm>({
        url: 'https://api.mail.tm/domains',
        searchParams: {
          page: 1,
        },
      })

      await this.checkError(domains)

      let domain = domains['hydra:member'][0].domain
      return domain
    } catch (err: Error | any) {
      return { error: `Erro ao recuperar domínio ${err.message || err}` }
    }
  }

  async deleteAccount(accountId, token) {
    try {
      const response = await this.api.request<AccountsMailTm & ErrorMailTm>({
        url: 'https://api.mail.tm/accounts/' + accountId,
        method: 'delete',
        returnType: 'response',
        config: {
          headers: { Authorization: 'Bearer ' + token },
        },
      })

      await this.checkError(response)

      return { msg: 'Account deleted' }
    } catch (e) {
      return { msg: 'Erro ao deletar conta ->', e }
    }
  }
  async getMsgBody(token) {
    const response = await this.api.request<MessagesMailTm & ErrorMailTm>({
      url: 'https://api.mail.tm/messages',
      method: 'get',
      config: {
        headers: { Authorization: 'Bearer ' + token },
      },
    })

    await this.checkError(response)

    const messageId = response['hydra:member'][0].id
    const body = await this.getMessageById(messageId, token)

    return body
  }

  async getMessageById(id, token) {
    const response = await this.api.request<MessageMailTm & ErrorMailTm>({
      url: 'https://api.mail.tm/messages/' + id,
      method: 'get',
      config: {
        headers: { Authorization: 'Bearer ' + token },
      },
    })
    await this.checkError(response)

    return response
  }

  async createToken(address: string, password: string) {
    console.log(`createToken params ${address} ${password}`)
    const body = await this.api.request<TokenMailTm & ErrorMailTm>({
      url: 'https://api.mail.tm/token',
      method: 'post',
      params: {
        address,
        password,
      },
    })
    await this.checkError(body)
    return body
  }

  async checkError(response) {
    if ((response?.code >= 400 && response?.message) || response?.detail) {
      throw `MailTm.checkError ${response?.message || response?.detail}`
    }
  }

  async emailGenerator(username, password) {
    try {
      const domain = await this.getDomains()
      let account: AccountsMailTm = undefined
      let token = ''

      let address = `${username}@${domain}`
      if (address.length > 35) {
        const numChar = 34 - `@${domain}`.length
        address = `${faker.string.alpha(numChar)}@${domain}`
      }
      let message_error = ''
      try {
        account = await this.createAccount(address, password)
      } catch (error: Error | any) {
        throw `Erro MailTm.emailGenerator.createAccount Email ${address}: ${error.message || error}`
      }
      if (!account?.address) {
        throw `Conta ${address} não criada ${message_error} ${account}!!!`
      }
      const createdToken = await this.createToken(account.address, password).catch(error => {
        throw `Erro [${message_error}] MailTm.emailGenerator.createToken Email ${address}: ${error.message || error}`
      })
      if (!createdToken?.token) {
        throw `MailTm.emailGenerator Token Email não recebido ${message_error}!`
      }
      this.ACCOUNT_ID = account.id

      this.TOKEN = createdToken.token
      token = createdToken.token

      return { account, token, orderEmail: { account, token } }
    } catch (err: Error | any) {
      throw `MailTm.emailGenerator: ${err.message || err}`
    }
  }

  async getCode(account, token) {
    let {
      checkMessage = {} as any,
      emailReceived = {} as any,
      verificationLink = '',
      timeout = 45,
      sleepSeconds = 2,
    } = {}
    try {
      // const config = await ConfigController.getConfigValue(`timeout-sms`)
      timeout = 10000
      let { loop = true, i = 0 } = {}
      let getMsgBody = {}
      do {
        try {
          getMsgBody = await this.getMsgBody(token)
        } catch (err: Error | any) {
          throw `Error MailTm.getCode.getMsgBody: ${err.message || err}`
        }
        let msgStr = getMsgBody['text']
        let msgArray = msgStr.split('\n')
        verificationLink = msgArray[msgArray.findIndex(element => element.includes('/confirm/'))]
        verificationLink = verificationLink.match(/\bhttps?:\/\/\S+/gi).toString()

        try {
          let resp = await this.confirmLink(verificationLink)
          const html = await resp.text()
        } catch (err: Error | any) {
          throw `Error MailTm.getCode.confirmLink: ${err.message || err}`
        }

        if (verificationLink && verificationLink.length > 0) {
          console.log(`Código ${verificationLink} recebido com sucesso!`)
          loop = false
          this.deleteAccount(account, token)
        } else {
          if (checkMessage.error) {
            console.log(checkMessage.error)
          }
          i++
          if (i < timeout / sleepSeconds) {
            console.log(`Código ainda não recebido ${i * sleepSeconds}/${timeout}`)
            // await sleep(sleepSeconds)
          } else {
            console.log(`Código não recebido ${i * sleepSeconds}/${timeout}, TIMEOUT`)
            loop = false
            this.deleteAccount(account, token)
          }
        }
      } while (loop)
      if (!verificationLink) {
        throw `Link não recebido`
      }
      checkMessage = { ...checkMessage, verificationLink, emailReceived }
      return checkMessage
    } catch (err: Error | any) {
      throw `Error MailTm.getCode: ${err.message || err}`
    }
  }
}
