import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Sdk } from '../api-aggregator/graphql';
import { Inject } from '@nestjs/common';
import { UserModel } from './user.model';

@Resolver()
export class UserResolver {
  constructor(@Inject('Sdk') private readonly sdk: Sdk) {}

  @Query(() => [UserModel])
  async users(): Promise<Array<UserModel>> {
    const userRes = await this.sdk.users();
    return userRes.user;
  }

  @Query(() => [UserModel])
  async user(@Args('name') name: string): Promise<Array<UserModel>> {
    const userRes = await this.sdk.user({ where: { name: { _eq: name } } });
    return userRes.user;
  }

  @Mutation(() => [UserModel])
  async createUser(@Args('name') name: string): Promise<Array<UserModel>> {
    const userRes = await this.sdk.insert_user({ objects: { name } });
    return userRes.insert_user.returning;
  }

  @Mutation(() => UserModel)
  async updateUser(
    @Args('id', { nullable: true }) id?: number,
    @Args('name', { defaultValue: '' }) name?: string,
  ): Promise<any> {
    const userRes = await this.sdk.update_user_by_pk({
      pk_columns: { id },
      set: { name: name },
    });
    console.log('userRes', userRes);
    return userRes.update_user_by_pk;
  }

  @Mutation(() => UserModel)
  async deleteUser(@Args('id') id: number): Promise<any> {
    const userRes = await this.sdk.delete_user_by_pk({ id });
    return userRes.delete_user_by_pk;
  }
}
