import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Users ' })
export class User {
  @Field((type) => ID)
  id: number;

  // @Field({ nullable: false })
  email: string;

  // @Field({ nullable: false })
  password: string;
}
