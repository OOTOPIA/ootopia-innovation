import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
  } from 'typeorm';
  
  enum PostType {
    Image = "image",
    Video = "video"
  }

  @Entity()
  export class Posts extends BaseEntity {
  
    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column({ nullable: true, type: 'varchar' })
    description : string;

    /*@Column({ nullable: false, type: 'numeric', name : 'likes_count', default: () => 0 })
    likesCount : number;*/

    @Column({nullable: false, type: 'varchar'})
    type: PostType

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

  }