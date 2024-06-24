import {
  CreateDateColumn,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

@Entity({
  name: 'product',
})
export class ProductEntity extends EntityRelationalHelper {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @Index()
  @ApiResponseProperty({
    type: Number,
    example: 'productCode',
  })
  @Column()
  code: number;

  @Column({ type: String, nullable: true })
  @ApiResponseProperty()
  description: string;

  @Index()
  @Column({ type: String, nullable: false })
  @ApiResponseProperty({
    type: String,
    example: 'location',
  })
  location: string;

  @Column({ type: String, nullable: false })
  @ApiResponseProperty()
  price: string;

  @Column({ type: String, nullable: false })
  @ApiResponseProperty()
  currency: string;
}
