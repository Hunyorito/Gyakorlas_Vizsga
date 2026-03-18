import { PartialType } from '@nestjs/mapped-types';
import { CreateMemeberDto } from './create-memeber.dto';

export class UpdateMemeberDto extends PartialType(CreateMemeberDto) {}
