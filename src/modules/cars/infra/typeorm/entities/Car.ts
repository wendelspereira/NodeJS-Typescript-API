import { v4 as uuidv4 } from "uuid";
import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
} from "typeorm";
import { PrimaryColumn } from "typeorm";
import { Column } from "typeorm";
import { Category } from "./category";
import { Specification } from "./Specification";

@Entity("cars")
class Car {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    daily_rate!: number;

    @Column()
    available!: boolean;

    @Column()
    license_plate!: string;

    @Column()
    fine_amount!: number;

    @Column()
    brand!: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category!: Category;

    @Column()
    category_id?: string;

    @ManyToMany(() => Specification)
    @JoinTable({
        name: "specifications_cars",
        joinColumns: [{ name: "car_id" }],
        inverseJoinColumns: [{ name: "specification_id" }],
    })
    specifications?: Specification[];

    @CreateDateColumn()
    created_at!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
            this.available = true;
        }
    }
}

export { Car };
