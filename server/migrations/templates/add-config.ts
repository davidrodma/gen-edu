import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { PrismaClient } from '@prisma/client'

export class add_config1700270348917 implements MigrationInterface {
  constructor(private prisma: PrismaClient) {}

  private titleGroup = 'Limits'
  private nameConfig = 'limit-proxy-few-minutes'

  public async up(db: Db): Promise<any> {
    let group = await this.prisma.configGroup.findUnique({
      where: {
        title: this.titleGroup,
      },
    })
    if (!group) {
      group = await this.prisma.configGroup.create({
        data: {
          title: this.titleGroup,
        },
      })
    }

    await this.prisma.config.create({
      data: {
        configGroupId: group.id,
        name: this.nameConfig,
        title: 'Nº Limite de Few Minutes no Proxy',
        description:
          "Quantidade limite de few minutes sequencial no login separados por vírgula ',' para o extrator e trabalhador/turbo respectivamente  (exemplo: 1,1), que um proxy pode ter até ser desativado ao atingir a quantidade.",
        type: 'text',
        jsonOptions: undefined,
        value: '1',
        classAdd: '',
      },
    })
  }

  public async down(db: Db): Promise<any> {
    await this.prisma.config.delete({ where: { name: this.nameConfig } })
    await this.prisma.configGroup.delete({ where: { title: this.titleGroup } })
  }
}
