import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class ContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  message: string;
}
