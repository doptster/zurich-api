import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { RelationalProductPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalProductPersistenceModule],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService, RelationalProductPersistenceModule],
})
export class ProductsModule {}
