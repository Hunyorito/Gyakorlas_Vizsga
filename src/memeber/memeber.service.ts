import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemeberDto } from './dto/create-memeber.dto';
import { UpdateMemeberDto } from './dto/update-memeber.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MemeberService {
  constructor (private readonly db: PrismaService) {}

  create(createMemberDto: CreateMemeberDto) {
    return this.db.members.create({
      data: {...createMemberDto, birth_date: new Date(createMemberDto.birth_date)}
    });
  }

  findAll() {
    return this.db.members.findMany()
  }

  async pay(id: number) {

    const currentDate = new Date()
    const memberPayments = await this.db.payments.findMany({
      where:{
        member_id : id
      }
    })
    if(memberPayments.length == 0){throw new NotFoundException}
    
    memberPayments.forEach(mem =>{
      const date = new Date(mem.paid_at)
      if(currentDate.getFullYear() == date.getFullYear() && currentDate.getMonth() == date.getMonth()){
        throw new ConflictException
      }
    })

    const payment = await this.db.payments.create({
      data:{
        amount: 5000,
        member_id: id,
        paid_at: currentDate
      }
    })


    return payment;
  }

  
}