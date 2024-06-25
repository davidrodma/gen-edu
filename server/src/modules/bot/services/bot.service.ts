import { Injectable, OnModuleInit } from "@nestjs/common"
//import { ModuleRef } from '@nestjs/core'
import { delay } from "src/common/utilities/helpers.utility"

@Injectable()
export class BotService implements OnModuleInit {
  private isBotModule: boolean = false

  constructor() {} // private readonly moduleRef: ModuleRef,

  static forRoot(): BotService {
    const botService = new BotService()
    botService.isBotModule = true
    return botService
  }

  onModuleInit() {
    if (this.isBotModule) {
      this.startBot()
    }
  }

  async startBot() {
    while (true) {
      try {
        console.log("startBot")
        await delay(1)
      } catch (error) {
        console.error("Error in startBot:", error)
      }
    }
  }
}
