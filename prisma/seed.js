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

    await prisma.products.create({
      data: {
        title: 'コーヒーメーカー',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/19/800/800',
        price: 1900
      }
    })

    await prisma.products.create({
      data: {
        title: '冷蔵庫',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/18/800/800',
        price: 3000
      }
    })

    await prisma.products.create({
      data: {
        title: '掃除機',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/17/800/800',
        price: 4000
      }
    })

    await prisma.products.create({
      data: {
        title: '炊飯器',
        description: 'テキストテキストテキストテキストテキストテキストテキスト',
        url: 'https://picsum.photos/id/17/800/800',
        price: 1500
      }
    })

  } catch(error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

seedProducts()

// npx prisma generate
// npx prisma migrate dev --name init

// supabase側のport番号は6543だが、postgres dbに合わせて、5432に変更
// postgres://postgres.diyndubtrpbasvgvlpdj:[YOUR-PASSWORD]@aws-0-ap-northeast-1.pooler.supabase.com:6543/postgres

// npx prisma db seed
