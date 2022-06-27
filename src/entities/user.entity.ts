import { Entity, Column, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid"


@Entity()
export class User {
    
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string

    @Column({unique:true})
    email: string

    
    @Column({select: false})
    password: string

    @Column()
    age: number

    @Column()
    created_at: String

    @Column()
    updated_at: String
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
   
}