import * as bcrypt from "bcryptjs";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity({ name: "users", synchronize: true })
export class Users {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar", length: 256, nullable: false })
  @IsNotEmpty()
  username: string;

  @Column({ type: "varchar", length: "MAX", nullable: false })
  @IsNotEmpty()
  password: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
