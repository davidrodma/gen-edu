import { Injectable } from '@nestjs/common'
import { ApiService } from '../../api.service'
import { Currencies } from './currency-info.type'

@Injectable()
export class AwesomeApi {
  private readonly baseURL = 'https://economia.awesomeapi.com.br/json/last'

  constructor(private readonly api: ApiService) {}

  async exchangeRate(from: string, to: string) {
    return this.exchangeRateMany([{ from, to }])
  }

  async exchangeRateMany(currencies: { from: string; to: string }[]) {
    const currenciesArr = currencies.map(currency => `${currency.from}-${currency.to}`)
    const currenciesStr = currenciesArr.join(',')
    return await this.api.request<Currencies>({ url: `${this.baseURL}/${currenciesStr}` })
  }

  async bidValue(from: string, to: string) {
    const rate = await this.exchangeRate(from, to)
    return parseFloat(rate[`${from}${to}`].bid)
  }

  async conversion({ from, to, value }: { from: string; to: string; value: number }): Promise<number> {
    from = from.toUpperCase()
    to = to.toUpperCase()
    if (from === to) {
      return value
    }
    const bid = await this.bidValue(from, to)
    return value * bid
  }
}
