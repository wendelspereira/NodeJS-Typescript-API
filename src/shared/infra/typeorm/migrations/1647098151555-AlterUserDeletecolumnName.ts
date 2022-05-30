import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeletecolumnName1647098151555
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "userName");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "user",
            new TableColumn({
                name: "userName",
                type: "varchar",
            })
        );
    }
}

