import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './infrastructure/persistence/product.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Product } from './domain/product';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  create(createProductDto: CreateProductDto) {
    return this.productRepository.create(createProductDto);
  }

  findAllWithPagination({
    paginationOptions,
    productCode,
    location,
  }: {
    paginationOptions: IPaginationOptions;
    productCode: Product['productCode'];
    location: Product['location'];
  }) {
    return this.productRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
      productCode,
      location,
    });
  }

  findOne(id: Product['id']) {
    return this.productRepository.findById(id);
  }

  update(id: Product['id'], updateProductDto: UpdateProductDto) {
    return this.productRepository.update(id, updateProductDto);
  }

  remove(id: Product['id']) {
    return this.productRepository.remove(id);
  }
}
