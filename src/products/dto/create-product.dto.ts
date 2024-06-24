import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 1000, type: Number })
  @IsNotEmpty()
  productCode: number;

  @ApiProperty({ example: 'West Malaysia', type: String })
  @IsNotEmpty()
  location: string;

  @ApiProperty({ example: '100', type: String })
  @IsNotEmpty()
  price: string;

  @ApiPropertyOptional({ example: 'Sedan', type: String })
  @IsOptional()
  description: string;

  @ApiPropertyOptional({ example: 'RM', type: String })
  @IsOptional()
  currency: string | 'RM';
}
