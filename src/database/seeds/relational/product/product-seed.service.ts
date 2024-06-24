import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from '../../../../products/infrastructure/persistence/relational/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductSeedService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async run() {
    const count = await this.repository.count();

    if (count === 0) {
      await this.repository.save([
        this.repository.create({
          code: 1000,
          description: 'Sedan',
          location: 'West Malaysia',
          price: '300',
          currency: 'RM',
        }),
        this.repository.create({
          code: 1000,
          description: 'Sedan',
          location: 'East Malaysia',
          price: '450',
          currency: 'RM',
        }),
        this.repository.create({
          code: 2000,
          description: 'SUV',
          location: 'West Malaysia',
          price: '500',
          currency: 'RM',
        }),
        this.repository.create({
          code: 2000,
          description: 'SUV',
          location: 'East Malaysia',
          price: '450',
          currency: 'RM',
        }),
      ]);
    }
  }
}
