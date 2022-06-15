import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddSpecificarionToCars1655306841787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'cars', new TableColumn({
                name: "specification",
                type: ""
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
