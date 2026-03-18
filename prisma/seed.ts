import {faker} from '@faker-js/faker';
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const asd =await prisma.$transaction(async (tx) => {
        const members = await tx.member.findMany();
        for(let i = 0; i <15; i++){
            await tx.payment.create({
                data: {
                    member_id : faker.helpers.arrayElement(members).id,
                    amount: faker.number.int(),
                    paid_at: faker.date.past(),
                },
            });
        }
    });

}
main()
  .then(async () => {
    await prisma.$disconnect();
    
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });