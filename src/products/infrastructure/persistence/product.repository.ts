import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Product } from '../../domain/product';

export abstract class ProductRepository {
  abstract create(
    data: Omit<
      Product,
      | 'id'
      | 'createdAt'
      | 'updatedAt'
      | 'productCode'
      | 'description'
      | 'location'
      | 'price'
      | 'currency'
    >,
  ): Promise<Product>;

  abstract findAllWithPagination({
    paginationOptions,
    productCode,
    location,
  }: {
    paginationOptions: IPaginationOptions;
    productCode: Product['productCode'];
    location: Product['location'];
  }): Promise<Product[]>;

  abstract findById(id: Product['id']): Promise<NullableType<Product>>;

  abstract update(
    id: Product['id'],
    payload: DeepPartial<Product>,
  ): Promise<Product | null>;

  abstract remove(id: Product['id']): Promise<void>;
}
