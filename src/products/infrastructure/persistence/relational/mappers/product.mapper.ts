import { Product } from '../../../../domain/product';
import { ProductEntity } from '../entities/product.entity';

export class ProductMapper {
  static toDomain(raw: ProductEntity): Product {
    const domainEntity = new Product();
    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;
    domainEntity.productCode = raw.code;
    domainEntity.description = raw.description;
    domainEntity.location = raw.location;
    domainEntity.price = raw.price;
    domainEntity.currency = raw.currency;

    return domainEntity;
  }

  static toPersistence(domainEntity: Product): ProductEntity {
    const persistenceEntity = new ProductEntity();
    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;
    persistenceEntity.code = Number(domainEntity.productCode);
    persistenceEntity.location = String(domainEntity.location);
    persistenceEntity.price = String(domainEntity.price);
    persistenceEntity.description = String(domainEntity.description);
    persistenceEntity.currency = String(domainEntity.currency);

    return persistenceEntity;
  }
}
