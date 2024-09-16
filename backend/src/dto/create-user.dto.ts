import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @ApiProperty({ example: 'sanzhar', description: 'The username of the user' })
  username: string | undefined;

  @ApiProperty({ example: 'sanzhar@example.com', description: 'The email of the user' })
  email: string | undefined;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  password: string | undefined;
}
