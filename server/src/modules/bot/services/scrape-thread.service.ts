import { Injectable } from '@nestjs/common'
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads'

@Injectable()
export class ScrapeThreadService {
  async process(order: any): Promise<void> {
    // Sua lógica para processar um pedido aqui
    console.log(`Processing order: ${order._id}`)

    // Simulação de uma tarefa assíncrona
    return new Promise(resolve => {
      setTimeout(async () => {
        console.log(`Processed order: ${order._id}`)

        // Adicione aqui a lógica para salvar itens relacionados ao pedido no MongoDB
        // Exemplo: await this.saveItems(order.items);

        resolve()
      }, 1000)
    })
  }

  async processInThreads(): Promise<void> {
    const orders = await this.getOrders()

    if (isMainThread) {
      // Código principal do aplicativo
      for (const order of orders) {
        const worker = new Worker(__filename, { workerData: { order } })

        worker.on('message', () => {
          console.log(`Order processed in thread: ${order._id}`)
        })
      }
    } else {
      // Código do worker
      const { order } = workerData

      await this.process(order)

      parentPort.postMessage({})
    }
  }

  private async getOrders(): Promise<any[]> {
    return []
  }
}
