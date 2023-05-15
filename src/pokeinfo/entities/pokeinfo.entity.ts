import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ database: 'pokemon', name: 'poke_info' })
export class PokeInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique: true })
    name: string;

    @Column({ default: 0 })
    base_experience: number;

    @Column({ default: 0 })
    height: number;

    @Column({ type: 'json' })
    type: any;

    @Column({ type: 'json' })
    abilities: any;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
