import { Injectable } from '@nestjs/common'
import { AwesomeApi } from './awesomeapi/awesomeapi.api'

@Injectable()
export class CurrencyConversionService {
  constructor(private readonly currencyApi: AwesomeApi) {}

  async exchangeRate(from: string, to: string) {
    return await this.currencyApi.exchangeRate(from, to)
  }

  async conversion({ from, to, value }: { from: string; to: string; value: number }) {
    return await this.currencyApi.conversion({ from, to, value })
  }
}
