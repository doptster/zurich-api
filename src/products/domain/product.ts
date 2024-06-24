import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiResponseProperty({
    type: Number,
    example: 1000,
  })
  productCode: number;

  @ApiResponseProperty({
    type: String,
    example: 'Sedan',
  })
  description: string;

  @ApiResponseProperty({
    type: String,
    example: 'West Malaysia',
  })
  location: string;

  @ApiResponseProperty({
    type: String,
    example: '100',
  })
  price: string;

  @ApiResponseProperty({
    type: String,
    example: 'RM',
  })
  currency: string;
}
