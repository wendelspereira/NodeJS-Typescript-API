import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddSpecificarionToCars1655306841787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'cars', new TableColumn({
                name: "specifications",
                type: "varchar",
                isNullable: true,
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn(
            'cars', 'specifications'
        )
    }
}
