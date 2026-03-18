import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { members_gender } from "generated/prisma/client";


export class CreateMemeberDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsEnum(members_gender)
    gender: members_gender;
    @IsNotEmpty()
    @IsString()
    birth_date: string;
}


