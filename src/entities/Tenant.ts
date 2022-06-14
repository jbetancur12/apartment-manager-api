import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Tenant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  doc: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  phone: string

  @Column()
  address: string

  @Column()
  email: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
