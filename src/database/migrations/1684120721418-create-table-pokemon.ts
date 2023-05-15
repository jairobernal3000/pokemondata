import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTablePokemon1684120721418 implements MigrationInterface {
    name = 'CreateTablePokemon1684120721418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`poke_info\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`base_experience\` int NOT NULL DEFAULT '0', \`height\` int NOT NULL DEFAULT '0', \`type\` json NOT NULL, \`abilities\` json NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_4c84cdec7bb86fb2bb5027bce0\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_4c84cdec7bb86fb2bb5027bce0\` ON \`poke_info\``);
        await queryRunner.query(`DROP TABLE \`poke_info\``);
    }

}
