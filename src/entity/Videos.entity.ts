import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category.entity";

@Entity("videos")
export class Videos {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  duration: number;

  @Column()
  rate: number;

  @Column()
  year: number;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
