import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1719148201452 implements MigrationInterface {
  name = 'CreateProductTable1719148201452';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "code" integer NOT NULL, "description" character varying, "location" character varying NOT NULL, "price" character varying NOT NULL, "currency" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_99c39b067cfa73c783f0fc49a6" ON "product" ("code") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3cbcabdb0a2b87ee77a3175483" ON "product" ("location") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_3cbcabdb0a2b87ee77a3175483"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_99c39b067cfa73c783f0fc49a6"`,
    );
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
