import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ example: 'West Malaysia', type: String })
  @IsOptional()
  location: string;

  @ApiPropertyOptional({ example: '100', type: String })
  @IsOptional()
  price: string;
}
