import { v4 as uuidv4 } from "uuid";
import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

@Entity("user")
class User {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    userName!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    @Column()
    driver_license!: string;

    @Column()
    isAdmin: boolean = false;

    @CreateDateColumn()
    created_at!: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };
