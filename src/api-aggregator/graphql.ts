import { GraphQLResolveInfo } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  user: ResolverTypeWrapper<User>;
  user_aggregate: ResolverTypeWrapper<User_Aggregate>;
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  user_avg_fields: ResolverTypeWrapper<User_Avg_Fields>;
  user_bool_exp: User_Bool_Exp;
  user_constraint: User_Constraint;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_select_column: User_Select_Column;
  user_set_input: User_Set_Input;
  user_stddev_fields: ResolverTypeWrapper<User_Stddev_Fields>;
  user_stddev_pop_fields: ResolverTypeWrapper<User_Stddev_Pop_Fields>;
  user_stddev_samp_fields: ResolverTypeWrapper<User_Stddev_Samp_Fields>;
  user_sum_fields: ResolverTypeWrapper<User_Sum_Fields>;
  user_update_column: User_Update_Column;
  user_var_pop_fields: ResolverTypeWrapper<User_Var_Pop_Fields>;
  user_var_samp_fields: ResolverTypeWrapper<User_Var_Samp_Fields>;
  user_variance_fields: ResolverTypeWrapper<User_Variance_Fields>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  user: User;
  user_aggregate: User_Aggregate;
  user_aggregate_fields: User_Aggregate_Fields;
  user_avg_fields: User_Avg_Fields;
  user_bool_exp: User_Bool_Exp;
  user_inc_input: User_Inc_Input;
  user_insert_input: User_Insert_Input;
  user_max_fields: User_Max_Fields;
  user_min_fields: User_Min_Fields;
  user_mutation_response: User_Mutation_Response;
  user_on_conflict: User_On_Conflict;
  user_order_by: User_Order_By;
  user_pk_columns_input: User_Pk_Columns_Input;
  user_set_input: User_Set_Input;
  user_stddev_fields: User_Stddev_Fields;
  user_stddev_pop_fields: User_Stddev_Pop_Fields;
  user_stddev_samp_fields: User_Stddev_Samp_Fields;
  user_sum_fields: User_Sum_Fields;
  user_var_pop_fields: User_Var_Pop_Fields;
  user_var_samp_fields: User_Var_Samp_Fields;
  user_variance_fields: User_Variance_Fields;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UserArgs, 'where'>>;
  delete_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_By_PkArgs, 'id'>>;
  insert_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UserArgs, 'objects'>>;
  insert_user_one?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_OneArgs, 'object'>>;
  update_user?: Resolver<Maybe<ResolversTypes['user_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UserArgs, 'where'>>;
  update_user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  user?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType, Partial<Query_RootUserArgs>>;
  user_aggregate?: Resolver<ResolversTypes['user_aggregate'], ParentType, ContextType, Partial<Query_RootUser_AggregateArgs>>;
  user_by_pk?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<Query_RootUser_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  user?: SubscriptionResolver<Array<ResolversTypes['user']>, "user", ParentType, ContextType, Partial<Subscription_RootUserArgs>>;
  user_aggregate?: SubscriptionResolver<ResolversTypes['user_aggregate'], "user_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_AggregateArgs>>;
  user_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user']>, "user_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_By_PkArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate'] = ResolversParentTypes['user_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_aggregate_fields'] = ResolversParentTypes['user_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['user_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['user_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['user_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['user_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['user_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['user_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['user_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['user_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_avg_fields'] = ResolversParentTypes['user_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_max_fields'] = ResolversParentTypes['user_max_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_min_fields'] = ResolversParentTypes['user_min_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_mutation_response'] = ResolversParentTypes['user_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_fields'] = ResolversParentTypes['user_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_pop_fields'] = ResolversParentTypes['user_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_stddev_samp_fields'] = ResolversParentTypes['user_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_sum_fields'] = ResolversParentTypes['user_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_pop_fields'] = ResolversParentTypes['user_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_var_samp_fields'] = ResolversParentTypes['user_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_variance_fields'] = ResolversParentTypes['user_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
  user_aggregate?: User_AggregateResolvers<ContextType>;
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  user_avg_fields?: User_Avg_FieldsResolvers<ContextType>;
  user_max_fields?: User_Max_FieldsResolvers<ContextType>;
  user_min_fields?: User_Min_FieldsResolvers<ContextType>;
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  user_stddev_fields?: User_Stddev_FieldsResolvers<ContextType>;
  user_stddev_pop_fields?: User_Stddev_Pop_FieldsResolvers<ContextType>;
  user_stddev_samp_fields?: User_Stddev_Samp_FieldsResolvers<ContextType>;
  user_sum_fields?: User_Sum_FieldsResolvers<ContextType>;
  user_var_pop_fields?: User_Var_Pop_FieldsResolvers<ContextType>;
  user_var_samp_fields?: User_Var_Samp_FieldsResolvers<ContextType>;
  user_variance_fields?: User_Variance_FieldsResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: number, name: string }> };

export type UserQueryVariables = Exact<{
  where: User_Bool_Exp;
}>;


export type UserQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: number, name: string }> };

export type Insert_UserMutationVariables = Exact<{
  objects: Array<User_Insert_Input> | User_Insert_Input;
}>;


export type Insert_UserMutation = { __typename?: 'mutation_root', insert_user?: { __typename?: 'user_mutation_response', returning: Array<{ __typename?: 'user', id: number, name: string }> } | null };

export type Update_User_By_PkMutationVariables = Exact<{
  pk_columns: User_Pk_Columns_Input;
  set?: InputMaybe<User_Set_Input>;
}>;


export type Update_User_By_PkMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', id: number, name: string } | null };

export type Delete_User_By_PkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type Delete_User_By_PkMutation = { __typename?: 'mutation_root', delete_user_by_pk?: { __typename?: 'user', id: number, name: string } | null };


export const UsersDocument = gql`
    query users {
  user {
    id
    name
  }
}
    `;
export const UserDocument = gql`
    query user($where: user_bool_exp!) {
  user(where: $where) {
    id
    name
  }
}
    `;
export const Insert_UserDocument = gql`
    mutation insert_user($objects: [user_insert_input!]!) {
  insert_user(objects: $objects) {
    returning {
      id
      name
    }
  }
}
    `;
export const Update_User_By_PkDocument = gql`
    mutation update_user_by_pk($pk_columns: user_pk_columns_input!, $set: user_set_input) {
  update_user_by_pk(pk_columns: $pk_columns, _set: $set) {
    id
    name
  }
}
    `;
export const Delete_User_By_PkDocument = gql`
    mutation delete_user_by_pk($id: Int!) {
  delete_user_by_pk(id: $id) {
    id
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    insert_user(variables: Insert_UserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Insert_UserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Insert_UserMutation>(Insert_UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insert_user', 'mutation');
    },
    update_user_by_pk(variables: Update_User_By_PkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Update_User_By_PkMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Update_User_By_PkMutation>(Update_User_By_PkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'update_user_by_pk', 'mutation');
    },
    delete_user_by_pk(variables: Delete_User_By_PkMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<Delete_User_By_PkMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Delete_User_By_PkMutation>(Delete_User_By_PkDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'delete_user_by_pk', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;