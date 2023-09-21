const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seedProducts = async () => {
  try {
    await prisma.products.create({
      data: {
        title: '灰色のカバン',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/7/800/800',
        price: 2500
      }
    })

    await prisma.products.create({
      data: {
        title: '白いTシャツ',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/20/800/800',
        price: 1900
      }
    })

    await prisma.products.create({
      data: {
        title: '黒いTシャツ',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/20/800/800',
        price: 1900
      }
    })
  } catch(error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

seedProducts()