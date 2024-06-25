import { Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts'
import { PrismaClient } from '@prisma/client'

const titleGroup = 'Limits'
const nameConfig = 'limit-proxy-few-minutes'
const prisma = new PrismaClient()

export class test_prisma1700270348917 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    const group = await prisma.configGroup.create({
      data: {
        title: titleGroup,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    await prisma.config.create({
      data: {
        configGroupId: group.id,
        value: '1',
        classAdd: '',
        status: 1,
        name: nameConfig,
        title: 'Nº Limite de Few Minutes no Proxy',
        description:
          "Quantidade limite de few minutes sequencial no login separados por vírgula ',' para o extrator e trabalhador/turbo respectivamente  (exemplo: 1,1), que um proxy pode ter até ser desativado ao atingir a quantidade.",
        type: 'text',
        createdAt: new Date('2021-04-27T14:39:47.686Z'),
        updatedAt: new Date('2021-04-27T14:39:47.686Z'),
      },
    })
  }

  public async down(db: Db): Promise<any> {
    await prisma.config.delete({ where: { name: nameConfig } })
    await prisma.configGroup.delete({ where: { title: titleGroup } })
  }
}

