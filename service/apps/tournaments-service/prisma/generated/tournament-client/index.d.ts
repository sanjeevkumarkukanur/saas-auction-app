
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model TournamentConfig
 * 
 */
export type TournamentConfig = $Result.DefaultSelection<Prisma.$TournamentConfigPayload>
/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupTeam
 * 
 */
export type GroupTeam = $Result.DefaultSelection<Prisma.$GroupTeamPayload>
/**
 * Model GroupStats
 * 
 */
export type GroupStats = $Result.DefaultSelection<Prisma.$GroupStatsPayload>
/**
 * Model Fixture
 * 
 */
export type Fixture = $Result.DefaultSelection<Prisma.$FixturePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TournamentStatus: {
  UPCOMING: 'UPCOMING',
  LIVE: 'LIVE',
  COMPLETED: 'COMPLETED'
};

export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus]

}

export type TournamentStatus = $Enums.TournamentStatus

export const TournamentStatus: typeof $Enums.TournamentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tournaments
 * const tournaments = await prisma.tournament.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tournaments
   * const tournaments = await prisma.tournament.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournamentConfig`: Exposes CRUD operations for the **TournamentConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TournamentConfigs
    * const tournamentConfigs = await prisma.tournamentConfig.findMany()
    * ```
    */
  get tournamentConfig(): Prisma.TournamentConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupTeam`: Exposes CRUD operations for the **GroupTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupTeams
    * const groupTeams = await prisma.groupTeam.findMany()
    * ```
    */
  get groupTeam(): Prisma.GroupTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupStats`: Exposes CRUD operations for the **GroupStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupStats
    * const groupStats = await prisma.groupStats.findMany()
    * ```
    */
  get groupStats(): Prisma.GroupStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fixture`: Exposes CRUD operations for the **Fixture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fixtures
    * const fixtures = await prisma.fixture.findMany()
    * ```
    */
  get fixture(): Prisma.FixtureDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Tournament: 'Tournament',
    TournamentConfig: 'TournamentConfig',
    Stage: 'Stage',
    Group: 'Group',
    GroupTeam: 'GroupTeam',
    GroupStats: 'GroupStats',
    Fixture: 'Fixture'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tournament" | "tournamentConfig" | "stage" | "group" | "groupTeam" | "groupStats" | "fixture"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      TournamentConfig: {
        payload: Prisma.$TournamentConfigPayload<ExtArgs>
        fields: Prisma.TournamentConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          findFirst: {
            args: Prisma.TournamentConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          findMany: {
            args: Prisma.TournamentConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>[]
          }
          create: {
            args: Prisma.TournamentConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          createMany: {
            args: Prisma.TournamentConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>[]
          }
          delete: {
            args: Prisma.TournamentConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          update: {
            args: Prisma.TournamentConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          deleteMany: {
            args: Prisma.TournamentConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>[]
          }
          upsert: {
            args: Prisma.TournamentConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentConfigPayload>
          }
          aggregate: {
            args: Prisma.TournamentConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournamentConfig>
          }
          groupBy: {
            args: Prisma.TournamentConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentConfigCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentConfigCountAggregateOutputType> | number
          }
        }
      }
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          createMany: {
            args: Prisma.StageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupTeam: {
        payload: Prisma.$GroupTeamPayload<ExtArgs>
        fields: Prisma.GroupTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          findFirst: {
            args: Prisma.GroupTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          findMany: {
            args: Prisma.GroupTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>[]
          }
          create: {
            args: Prisma.GroupTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          createMany: {
            args: Prisma.GroupTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>[]
          }
          delete: {
            args: Prisma.GroupTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          update: {
            args: Prisma.GroupTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          deleteMany: {
            args: Prisma.GroupTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>[]
          }
          upsert: {
            args: Prisma.GroupTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupTeamPayload>
          }
          aggregate: {
            args: Prisma.GroupTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupTeam>
          }
          groupBy: {
            args: Prisma.GroupTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupTeamCountArgs<ExtArgs>
            result: $Utils.Optional<GroupTeamCountAggregateOutputType> | number
          }
        }
      }
      GroupStats: {
        payload: Prisma.$GroupStatsPayload<ExtArgs>
        fields: Prisma.GroupStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          findFirst: {
            args: Prisma.GroupStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          findMany: {
            args: Prisma.GroupStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>[]
          }
          create: {
            args: Prisma.GroupStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          createMany: {
            args: Prisma.GroupStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>[]
          }
          delete: {
            args: Prisma.GroupStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          update: {
            args: Prisma.GroupStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          deleteMany: {
            args: Prisma.GroupStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>[]
          }
          upsert: {
            args: Prisma.GroupStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupStatsPayload>
          }
          aggregate: {
            args: Prisma.GroupStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupStats>
          }
          groupBy: {
            args: Prisma.GroupStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupStatsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupStatsCountAggregateOutputType> | number
          }
        }
      }
      Fixture: {
        payload: Prisma.$FixturePayload<ExtArgs>
        fields: Prisma.FixtureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixtureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixtureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findFirst: {
            args: Prisma.FixtureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixtureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findMany: {
            args: Prisma.FixtureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          create: {
            args: Prisma.FixtureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          createMany: {
            args: Prisma.FixtureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FixtureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          delete: {
            args: Prisma.FixtureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          update: {
            args: Prisma.FixtureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          deleteMany: {
            args: Prisma.FixtureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FixtureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FixtureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          upsert: {
            args: Prisma.FixtureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          aggregate: {
            args: Prisma.FixtureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFixture>
          }
          groupBy: {
            args: Prisma.FixtureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FixtureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixtureCountArgs<ExtArgs>
            result: $Utils.Optional<FixtureCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tournament?: TournamentOmit
    tournamentConfig?: TournamentConfigOmit
    stage?: StageOmit
    group?: GroupOmit
    groupTeam?: GroupTeamOmit
    groupStats?: GroupStatsOmit
    fixture?: FixtureOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    stages: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | TournamentCountOutputTypeCountStagesArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }


  /**
   * Count Type StageCountOutputType
   */

  export type StageCountOutputType = {
    groups: number
    fixtures: number
  }

  export type StageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | StageCountOutputTypeCountGroupsArgs
    fixtures?: boolean | StageCountOutputTypeCountFixturesArgs
  }

  // Custom InputTypes
  /**
   * StageCountOutputType without action
   */
  export type StageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageCountOutputType
     */
    select?: StageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StageCountOutputType without action
   */
  export type StageCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * StageCountOutputType without action
   */
  export type StageCountOutputTypeCountFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    teams: number
    fixtures: number
    stats: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | GroupCountOutputTypeCountTeamsArgs
    fixtures?: boolean | GroupCountOutputTypeCountFixturesArgs
    stats?: boolean | GroupCountOutputTypeCountStatsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTeamWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountFixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupStatsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    seasonId: string | null
    status: $Enums.TournamentStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    seasonId: string | null
    status: $Enums.TournamentStatus | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    seasonId: number
    status: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    seasonId?: true
    status?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    seasonId: string
    status: $Enums.TournamentStatus
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TournamentCountAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    config?: boolean | Tournament$configArgs<ExtArgs>
    stages?: boolean | Tournament$stagesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    seasonId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    seasonId?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "seasonId" | "status" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    config?: boolean | Tournament$configArgs<ExtArgs>
    stages?: boolean | Tournament$stagesArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      config: Prisma.$TournamentConfigPayload<ExtArgs> | null
      stages: Prisma.$StagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      seasonId: string
      status: $Enums.TournamentStatus
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    config<T extends Tournament$configArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$configArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stages<T extends Tournament$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly seasonId: FieldRef<"Tournament", 'String'>
    readonly status: FieldRef<"Tournament", 'TournamentStatus'>
    readonly startDate: FieldRef<"Tournament", 'DateTime'>
    readonly endDate: FieldRef<"Tournament", 'DateTime'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
    readonly updatedAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.config
   */
  export type Tournament$configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    where?: TournamentConfigWhereInput
  }

  /**
   * Tournament.stages
   */
  export type Tournament$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model TournamentConfig
   */

  export type AggregateTournamentConfig = {
    _count: TournamentConfigCountAggregateOutputType | null
    _avg: TournamentConfigAvgAggregateOutputType | null
    _sum: TournamentConfigSumAggregateOutputType | null
    _min: TournamentConfigMinAggregateOutputType | null
    _max: TournamentConfigMaxAggregateOutputType | null
  }

  export type TournamentConfigAvgAggregateOutputType = {
    totalTeams: number | null
  }

  export type TournamentConfigSumAggregateOutputType = {
    totalTeams: number | null
  }

  export type TournamentConfigMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    format: string | null
    totalTeams: number | null
  }

  export type TournamentConfigMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    format: string | null
    totalTeams: number | null
  }

  export type TournamentConfigCountAggregateOutputType = {
    id: number
    tournamentId: number
    format: number
    totalTeams: number
    _all: number
  }


  export type TournamentConfigAvgAggregateInputType = {
    totalTeams?: true
  }

  export type TournamentConfigSumAggregateInputType = {
    totalTeams?: true
  }

  export type TournamentConfigMinAggregateInputType = {
    id?: true
    tournamentId?: true
    format?: true
    totalTeams?: true
  }

  export type TournamentConfigMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    format?: true
    totalTeams?: true
  }

  export type TournamentConfigCountAggregateInputType = {
    id?: true
    tournamentId?: true
    format?: true
    totalTeams?: true
    _all?: true
  }

  export type TournamentConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentConfig to aggregate.
     */
    where?: TournamentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentConfigs to fetch.
     */
    orderBy?: TournamentConfigOrderByWithRelationInput | TournamentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TournamentConfigs
    **/
    _count?: true | TournamentConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentConfigMaxAggregateInputType
  }

  export type GetTournamentConfigAggregateType<T extends TournamentConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateTournamentConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournamentConfig[P]>
      : GetScalarType<T[P], AggregateTournamentConfig[P]>
  }




  export type TournamentConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentConfigWhereInput
    orderBy?: TournamentConfigOrderByWithAggregationInput | TournamentConfigOrderByWithAggregationInput[]
    by: TournamentConfigScalarFieldEnum[] | TournamentConfigScalarFieldEnum
    having?: TournamentConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentConfigCountAggregateInputType | true
    _avg?: TournamentConfigAvgAggregateInputType
    _sum?: TournamentConfigSumAggregateInputType
    _min?: TournamentConfigMinAggregateInputType
    _max?: TournamentConfigMaxAggregateInputType
  }

  export type TournamentConfigGroupByOutputType = {
    id: string
    tournamentId: string
    format: string
    totalTeams: number
    _count: TournamentConfigCountAggregateOutputType | null
    _avg: TournamentConfigAvgAggregateOutputType | null
    _sum: TournamentConfigSumAggregateOutputType | null
    _min: TournamentConfigMinAggregateOutputType | null
    _max: TournamentConfigMaxAggregateOutputType | null
  }

  type GetTournamentConfigGroupByPayload<T extends TournamentConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentConfigGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentConfigGroupByOutputType[P]>
        }
      >
    >


  export type TournamentConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    format?: boolean
    totalTeams?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentConfig"]>

  export type TournamentConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    format?: boolean
    totalTeams?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentConfig"]>

  export type TournamentConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    format?: boolean
    totalTeams?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournamentConfig"]>

  export type TournamentConfigSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    format?: boolean
    totalTeams?: boolean
  }

  export type TournamentConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "format" | "totalTeams", ExtArgs["result"]["tournamentConfig"]>
  export type TournamentConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type TournamentConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type TournamentConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $TournamentConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TournamentConfig"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      format: string
      totalTeams: number
    }, ExtArgs["result"]["tournamentConfig"]>
    composites: {}
  }

  type TournamentConfigGetPayload<S extends boolean | null | undefined | TournamentConfigDefaultArgs> = $Result.GetResult<Prisma.$TournamentConfigPayload, S>

  type TournamentConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentConfigCountAggregateInputType | true
    }

  export interface TournamentConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TournamentConfig'], meta: { name: 'TournamentConfig' } }
    /**
     * Find zero or one TournamentConfig that matches the filter.
     * @param {TournamentConfigFindUniqueArgs} args - Arguments to find a TournamentConfig
     * @example
     * // Get one TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentConfigFindUniqueArgs>(args: SelectSubset<T, TournamentConfigFindUniqueArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TournamentConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentConfigFindUniqueOrThrowArgs} args - Arguments to find a TournamentConfig
     * @example
     * // Get one TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigFindFirstArgs} args - Arguments to find a TournamentConfig
     * @example
     * // Get one TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentConfigFindFirstArgs>(args?: SelectSubset<T, TournamentConfigFindFirstArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TournamentConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigFindFirstOrThrowArgs} args - Arguments to find a TournamentConfig
     * @example
     * // Get one TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TournamentConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TournamentConfigs
     * const tournamentConfigs = await prisma.tournamentConfig.findMany()
     * 
     * // Get first 10 TournamentConfigs
     * const tournamentConfigs = await prisma.tournamentConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentConfigWithIdOnly = await prisma.tournamentConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentConfigFindManyArgs>(args?: SelectSubset<T, TournamentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TournamentConfig.
     * @param {TournamentConfigCreateArgs} args - Arguments to create a TournamentConfig.
     * @example
     * // Create one TournamentConfig
     * const TournamentConfig = await prisma.tournamentConfig.create({
     *   data: {
     *     // ... data to create a TournamentConfig
     *   }
     * })
     * 
     */
    create<T extends TournamentConfigCreateArgs>(args: SelectSubset<T, TournamentConfigCreateArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TournamentConfigs.
     * @param {TournamentConfigCreateManyArgs} args - Arguments to create many TournamentConfigs.
     * @example
     * // Create many TournamentConfigs
     * const tournamentConfig = await prisma.tournamentConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentConfigCreateManyArgs>(args?: SelectSubset<T, TournamentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TournamentConfigs and returns the data saved in the database.
     * @param {TournamentConfigCreateManyAndReturnArgs} args - Arguments to create many TournamentConfigs.
     * @example
     * // Create many TournamentConfigs
     * const tournamentConfig = await prisma.tournamentConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TournamentConfigs and only return the `id`
     * const tournamentConfigWithIdOnly = await prisma.tournamentConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TournamentConfig.
     * @param {TournamentConfigDeleteArgs} args - Arguments to delete one TournamentConfig.
     * @example
     * // Delete one TournamentConfig
     * const TournamentConfig = await prisma.tournamentConfig.delete({
     *   where: {
     *     // ... filter to delete one TournamentConfig
     *   }
     * })
     * 
     */
    delete<T extends TournamentConfigDeleteArgs>(args: SelectSubset<T, TournamentConfigDeleteArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TournamentConfig.
     * @param {TournamentConfigUpdateArgs} args - Arguments to update one TournamentConfig.
     * @example
     * // Update one TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentConfigUpdateArgs>(args: SelectSubset<T, TournamentConfigUpdateArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TournamentConfigs.
     * @param {TournamentConfigDeleteManyArgs} args - Arguments to filter TournamentConfigs to delete.
     * @example
     * // Delete a few TournamentConfigs
     * const { count } = await prisma.tournamentConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentConfigDeleteManyArgs>(args?: SelectSubset<T, TournamentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TournamentConfigs
     * const tournamentConfig = await prisma.tournamentConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentConfigUpdateManyArgs>(args: SelectSubset<T, TournamentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TournamentConfigs and returns the data updated in the database.
     * @param {TournamentConfigUpdateManyAndReturnArgs} args - Arguments to update many TournamentConfigs.
     * @example
     * // Update many TournamentConfigs
     * const tournamentConfig = await prisma.tournamentConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TournamentConfigs and only return the `id`
     * const tournamentConfigWithIdOnly = await prisma.tournamentConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TournamentConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TournamentConfig.
     * @param {TournamentConfigUpsertArgs} args - Arguments to update or create a TournamentConfig.
     * @example
     * // Update or create a TournamentConfig
     * const tournamentConfig = await prisma.tournamentConfig.upsert({
     *   create: {
     *     // ... data to create a TournamentConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TournamentConfig we want to update
     *   }
     * })
     */
    upsert<T extends TournamentConfigUpsertArgs>(args: SelectSubset<T, TournamentConfigUpsertArgs<ExtArgs>>): Prisma__TournamentConfigClient<$Result.GetResult<Prisma.$TournamentConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TournamentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigCountArgs} args - Arguments to filter TournamentConfigs to count.
     * @example
     * // Count the number of TournamentConfigs
     * const count = await prisma.tournamentConfig.count({
     *   where: {
     *     // ... the filter for the TournamentConfigs we want to count
     *   }
     * })
    **/
    count<T extends TournamentConfigCountArgs>(
      args?: Subset<T, TournamentConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TournamentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TournamentConfigAggregateArgs>(args: Subset<T, TournamentConfigAggregateArgs>): Prisma.PrismaPromise<GetTournamentConfigAggregateType<T>>

    /**
     * Group by TournamentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TournamentConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentConfigGroupByArgs['orderBy'] }
        : { orderBy?: TournamentConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TournamentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TournamentConfig model
   */
  readonly fields: TournamentConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TournamentConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TournamentConfig model
   */
  interface TournamentConfigFieldRefs {
    readonly id: FieldRef<"TournamentConfig", 'String'>
    readonly tournamentId: FieldRef<"TournamentConfig", 'String'>
    readonly format: FieldRef<"TournamentConfig", 'String'>
    readonly totalTeams: FieldRef<"TournamentConfig", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TournamentConfig findUnique
   */
  export type TournamentConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter, which TournamentConfig to fetch.
     */
    where: TournamentConfigWhereUniqueInput
  }

  /**
   * TournamentConfig findUniqueOrThrow
   */
  export type TournamentConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter, which TournamentConfig to fetch.
     */
    where: TournamentConfigWhereUniqueInput
  }

  /**
   * TournamentConfig findFirst
   */
  export type TournamentConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter, which TournamentConfig to fetch.
     */
    where?: TournamentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentConfigs to fetch.
     */
    orderBy?: TournamentConfigOrderByWithRelationInput | TournamentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentConfigs.
     */
    cursor?: TournamentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentConfigs.
     */
    distinct?: TournamentConfigScalarFieldEnum | TournamentConfigScalarFieldEnum[]
  }

  /**
   * TournamentConfig findFirstOrThrow
   */
  export type TournamentConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter, which TournamentConfig to fetch.
     */
    where?: TournamentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentConfigs to fetch.
     */
    orderBy?: TournamentConfigOrderByWithRelationInput | TournamentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TournamentConfigs.
     */
    cursor?: TournamentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TournamentConfigs.
     */
    distinct?: TournamentConfigScalarFieldEnum | TournamentConfigScalarFieldEnum[]
  }

  /**
   * TournamentConfig findMany
   */
  export type TournamentConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter, which TournamentConfigs to fetch.
     */
    where?: TournamentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TournamentConfigs to fetch.
     */
    orderBy?: TournamentConfigOrderByWithRelationInput | TournamentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TournamentConfigs.
     */
    cursor?: TournamentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TournamentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TournamentConfigs.
     */
    skip?: number
    distinct?: TournamentConfigScalarFieldEnum | TournamentConfigScalarFieldEnum[]
  }

  /**
   * TournamentConfig create
   */
  export type TournamentConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a TournamentConfig.
     */
    data: XOR<TournamentConfigCreateInput, TournamentConfigUncheckedCreateInput>
  }

  /**
   * TournamentConfig createMany
   */
  export type TournamentConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TournamentConfigs.
     */
    data: TournamentConfigCreateManyInput | TournamentConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TournamentConfig createManyAndReturn
   */
  export type TournamentConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * The data used to create many TournamentConfigs.
     */
    data: TournamentConfigCreateManyInput | TournamentConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentConfig update
   */
  export type TournamentConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a TournamentConfig.
     */
    data: XOR<TournamentConfigUpdateInput, TournamentConfigUncheckedUpdateInput>
    /**
     * Choose, which TournamentConfig to update.
     */
    where: TournamentConfigWhereUniqueInput
  }

  /**
   * TournamentConfig updateMany
   */
  export type TournamentConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TournamentConfigs.
     */
    data: XOR<TournamentConfigUpdateManyMutationInput, TournamentConfigUncheckedUpdateManyInput>
    /**
     * Filter which TournamentConfigs to update
     */
    where?: TournamentConfigWhereInput
    /**
     * Limit how many TournamentConfigs to update.
     */
    limit?: number
  }

  /**
   * TournamentConfig updateManyAndReturn
   */
  export type TournamentConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * The data used to update TournamentConfigs.
     */
    data: XOR<TournamentConfigUpdateManyMutationInput, TournamentConfigUncheckedUpdateManyInput>
    /**
     * Filter which TournamentConfigs to update
     */
    where?: TournamentConfigWhereInput
    /**
     * Limit how many TournamentConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TournamentConfig upsert
   */
  export type TournamentConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the TournamentConfig to update in case it exists.
     */
    where: TournamentConfigWhereUniqueInput
    /**
     * In case the TournamentConfig found by the `where` argument doesn't exist, create a new TournamentConfig with this data.
     */
    create: XOR<TournamentConfigCreateInput, TournamentConfigUncheckedCreateInput>
    /**
     * In case the TournamentConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentConfigUpdateInput, TournamentConfigUncheckedUpdateInput>
  }

  /**
   * TournamentConfig delete
   */
  export type TournamentConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
    /**
     * Filter which TournamentConfig to delete.
     */
    where: TournamentConfigWhereUniqueInput
  }

  /**
   * TournamentConfig deleteMany
   */
  export type TournamentConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TournamentConfigs to delete
     */
    where?: TournamentConfigWhereInput
    /**
     * Limit how many TournamentConfigs to delete.
     */
    limit?: number
  }

  /**
   * TournamentConfig without action
   */
  export type TournamentConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentConfig
     */
    select?: TournamentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TournamentConfig
     */
    omit?: TournamentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentConfigInclude<ExtArgs> | null
  }


  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    order: number | null
  }

  export type StageSumAggregateOutputType = {
    order: number | null
  }

  export type StageMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    order: number | null
    tournamentId: string | null
  }

  export type StageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    order: number | null
    tournamentId: string | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    name: number
    type: number
    order: number
    tournamentId: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    order?: true
  }

  export type StageSumAggregateInputType = {
    order?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    tournamentId?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    tournamentId?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    tournamentId?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: string
    name: string
    type: string
    order: number
    tournamentId: string
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    groups?: boolean | Stage$groupsArgs<ExtArgs>
    fixtures?: boolean | Stage$fixturesArgs<ExtArgs>
    _count?: boolean | StageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    tournamentId?: boolean
  }

  export type StageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "order" | "tournamentId", ExtArgs["result"]["stage"]>
  export type StageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    groups?: boolean | Stage$groupsArgs<ExtArgs>
    fixtures?: boolean | Stage$fixturesArgs<ExtArgs>
    _count?: boolean | StageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type StageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $StagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      groups: Prisma.$GroupPayload<ExtArgs>[]
      fixtures: Prisma.$FixturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      order: number
      tournamentId: string
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }

  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageFindUniqueArgs>(args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs>(args: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageFindFirstArgs>(args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs>(args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageFindManyArgs>(args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
     */
    create<T extends StageCreateArgs>(args: SelectSubset<T, StageCreateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stages.
     * @param {StageCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageCreateManyArgs>(args?: SelectSubset<T, StageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {StageCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageCreateManyAndReturnArgs>(args?: SelectSubset<T, StageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
     */
    delete<T extends StageDeleteArgs>(args: SelectSubset<T, StageDeleteArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageUpdateArgs>(args: SelectSubset<T, StageUpdateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageDeleteManyArgs>(args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageUpdateManyArgs>(args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages and returns the data updated in the database.
     * @param {StageUpdateManyAndReturnArgs} args - Arguments to update many Stages.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StageUpdateManyAndReturnArgs>(args: SelectSubset<T, StageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
     */
    upsert<T extends StageUpsertArgs>(args: SelectSubset<T, StageUpsertArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends Stage$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Stage$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fixtures<T extends Stage$fixturesArgs<ExtArgs> = {}>(args?: Subset<T, Stage$fixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stage model
   */
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'String'>
    readonly name: FieldRef<"Stage", 'String'>
    readonly type: FieldRef<"Stage", 'String'>
    readonly order: FieldRef<"Stage", 'Int'>
    readonly tournamentId: FieldRef<"Stage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }

  /**
   * Stage createMany
   */
  export type StageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stage createManyAndReturn
   */
  export type StageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
  }

  /**
   * Stage updateManyAndReturn
   */
  export type StageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }

  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
    /**
     * Limit how many Stages to delete.
     */
    limit?: number
  }

  /**
   * Stage.groups
   */
  export type Stage$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Stage.fixtures
   */
  export type Stage$fixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    stageId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stageId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    stageId: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    stageId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    stageId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    stageId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    stageId: string
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stageId?: boolean
    stage?: boolean | StageDefaultArgs<ExtArgs>
    teams?: boolean | Group$teamsArgs<ExtArgs>
    fixtures?: boolean | Group$fixturesArgs<ExtArgs>
    stats?: boolean | Group$statsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stageId?: boolean
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stageId?: boolean
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    stageId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stageId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | StageDefaultArgs<ExtArgs>
    teams?: boolean | Group$teamsArgs<ExtArgs>
    fixtures?: boolean | Group$fixturesArgs<ExtArgs>
    stats?: boolean | Group$statsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      stage: Prisma.$StagePayload<ExtArgs>
      teams: Prisma.$GroupTeamPayload<ExtArgs>[]
      fixtures: Prisma.$FixturePayload<ExtArgs>[]
      stats: Prisma.$GroupStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stageId: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stage<T extends StageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StageDefaultArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends Group$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Group$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fixtures<T extends Group$fixturesArgs<ExtArgs> = {}>(args?: Subset<T, Group$fixturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stats<T extends Group$statsArgs<ExtArgs> = {}>(args?: Subset<T, Group$statsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly stageId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.teams
   */
  export type Group$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    where?: GroupTeamWhereInput
    orderBy?: GroupTeamOrderByWithRelationInput | GroupTeamOrderByWithRelationInput[]
    cursor?: GroupTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupTeamScalarFieldEnum | GroupTeamScalarFieldEnum[]
  }

  /**
   * Group.fixtures
   */
  export type Group$fixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    cursor?: FixtureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Group.stats
   */
  export type Group$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    where?: GroupStatsWhereInput
    orderBy?: GroupStatsOrderByWithRelationInput | GroupStatsOrderByWithRelationInput[]
    cursor?: GroupStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupStatsScalarFieldEnum | GroupStatsScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupTeam
   */

  export type AggregateGroupTeam = {
    _count: GroupTeamCountAggregateOutputType | null
    _min: GroupTeamMinAggregateOutputType | null
    _max: GroupTeamMaxAggregateOutputType | null
  }

  export type GroupTeamMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    teamId: string | null
  }

  export type GroupTeamMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    teamId: string | null
  }

  export type GroupTeamCountAggregateOutputType = {
    id: number
    groupId: number
    teamId: number
    _all: number
  }


  export type GroupTeamMinAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
  }

  export type GroupTeamMaxAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
  }

  export type GroupTeamCountAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
    _all?: true
  }

  export type GroupTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTeam to aggregate.
     */
    where?: GroupTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTeams to fetch.
     */
    orderBy?: GroupTeamOrderByWithRelationInput | GroupTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupTeams
    **/
    _count?: true | GroupTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupTeamMaxAggregateInputType
  }

  export type GetGroupTeamAggregateType<T extends GroupTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupTeam[P]>
      : GetScalarType<T[P], AggregateGroupTeam[P]>
  }




  export type GroupTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupTeamWhereInput
    orderBy?: GroupTeamOrderByWithAggregationInput | GroupTeamOrderByWithAggregationInput[]
    by: GroupTeamScalarFieldEnum[] | GroupTeamScalarFieldEnum
    having?: GroupTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupTeamCountAggregateInputType | true
    _min?: GroupTeamMinAggregateInputType
    _max?: GroupTeamMaxAggregateInputType
  }

  export type GroupTeamGroupByOutputType = {
    id: string
    groupId: string
    teamId: string
    _count: GroupTeamCountAggregateOutputType | null
    _min: GroupTeamMinAggregateOutputType | null
    _max: GroupTeamMaxAggregateOutputType | null
  }

  type GetGroupTeamGroupByPayload<T extends GroupTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupTeamGroupByOutputType[P]>
            : GetScalarType<T[P], GroupTeamGroupByOutputType[P]>
        }
      >
    >


  export type GroupTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTeam"]>

  export type GroupTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTeam"]>

  export type GroupTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupTeam"]>

  export type GroupTeamSelectScalar = {
    id?: boolean
    groupId?: boolean
    teamId?: boolean
  }

  export type GroupTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "teamId", ExtArgs["result"]["groupTeam"]>
  export type GroupTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupTeam"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      teamId: string
    }, ExtArgs["result"]["groupTeam"]>
    composites: {}
  }

  type GroupTeamGetPayload<S extends boolean | null | undefined | GroupTeamDefaultArgs> = $Result.GetResult<Prisma.$GroupTeamPayload, S>

  type GroupTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupTeamCountAggregateInputType | true
    }

  export interface GroupTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupTeam'], meta: { name: 'GroupTeam' } }
    /**
     * Find zero or one GroupTeam that matches the filter.
     * @param {GroupTeamFindUniqueArgs} args - Arguments to find a GroupTeam
     * @example
     * // Get one GroupTeam
     * const groupTeam = await prisma.groupTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupTeamFindUniqueArgs>(args: SelectSubset<T, GroupTeamFindUniqueArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupTeamFindUniqueOrThrowArgs} args - Arguments to find a GroupTeam
     * @example
     * // Get one GroupTeam
     * const groupTeam = await prisma.groupTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamFindFirstArgs} args - Arguments to find a GroupTeam
     * @example
     * // Get one GroupTeam
     * const groupTeam = await prisma.groupTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupTeamFindFirstArgs>(args?: SelectSubset<T, GroupTeamFindFirstArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamFindFirstOrThrowArgs} args - Arguments to find a GroupTeam
     * @example
     * // Get one GroupTeam
     * const groupTeam = await prisma.groupTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupTeams
     * const groupTeams = await prisma.groupTeam.findMany()
     * 
     * // Get first 10 GroupTeams
     * const groupTeams = await prisma.groupTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupTeamWithIdOnly = await prisma.groupTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupTeamFindManyArgs>(args?: SelectSubset<T, GroupTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupTeam.
     * @param {GroupTeamCreateArgs} args - Arguments to create a GroupTeam.
     * @example
     * // Create one GroupTeam
     * const GroupTeam = await prisma.groupTeam.create({
     *   data: {
     *     // ... data to create a GroupTeam
     *   }
     * })
     * 
     */
    create<T extends GroupTeamCreateArgs>(args: SelectSubset<T, GroupTeamCreateArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupTeams.
     * @param {GroupTeamCreateManyArgs} args - Arguments to create many GroupTeams.
     * @example
     * // Create many GroupTeams
     * const groupTeam = await prisma.groupTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupTeamCreateManyArgs>(args?: SelectSubset<T, GroupTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupTeams and returns the data saved in the database.
     * @param {GroupTeamCreateManyAndReturnArgs} args - Arguments to create many GroupTeams.
     * @example
     * // Create many GroupTeams
     * const groupTeam = await prisma.groupTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupTeams and only return the `id`
     * const groupTeamWithIdOnly = await prisma.groupTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupTeam.
     * @param {GroupTeamDeleteArgs} args - Arguments to delete one GroupTeam.
     * @example
     * // Delete one GroupTeam
     * const GroupTeam = await prisma.groupTeam.delete({
     *   where: {
     *     // ... filter to delete one GroupTeam
     *   }
     * })
     * 
     */
    delete<T extends GroupTeamDeleteArgs>(args: SelectSubset<T, GroupTeamDeleteArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupTeam.
     * @param {GroupTeamUpdateArgs} args - Arguments to update one GroupTeam.
     * @example
     * // Update one GroupTeam
     * const groupTeam = await prisma.groupTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupTeamUpdateArgs>(args: SelectSubset<T, GroupTeamUpdateArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupTeams.
     * @param {GroupTeamDeleteManyArgs} args - Arguments to filter GroupTeams to delete.
     * @example
     * // Delete a few GroupTeams
     * const { count } = await prisma.groupTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupTeamDeleteManyArgs>(args?: SelectSubset<T, GroupTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupTeams
     * const groupTeam = await prisma.groupTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupTeamUpdateManyArgs>(args: SelectSubset<T, GroupTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupTeams and returns the data updated in the database.
     * @param {GroupTeamUpdateManyAndReturnArgs} args - Arguments to update many GroupTeams.
     * @example
     * // Update many GroupTeams
     * const groupTeam = await prisma.groupTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupTeams and only return the `id`
     * const groupTeamWithIdOnly = await prisma.groupTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupTeam.
     * @param {GroupTeamUpsertArgs} args - Arguments to update or create a GroupTeam.
     * @example
     * // Update or create a GroupTeam
     * const groupTeam = await prisma.groupTeam.upsert({
     *   create: {
     *     // ... data to create a GroupTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupTeam we want to update
     *   }
     * })
     */
    upsert<T extends GroupTeamUpsertArgs>(args: SelectSubset<T, GroupTeamUpsertArgs<ExtArgs>>): Prisma__GroupTeamClient<$Result.GetResult<Prisma.$GroupTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamCountArgs} args - Arguments to filter GroupTeams to count.
     * @example
     * // Count the number of GroupTeams
     * const count = await prisma.groupTeam.count({
     *   where: {
     *     // ... the filter for the GroupTeams we want to count
     *   }
     * })
    **/
    count<T extends GroupTeamCountArgs>(
      args?: Subset<T, GroupTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupTeamAggregateArgs>(args: Subset<T, GroupTeamAggregateArgs>): Prisma.PrismaPromise<GetGroupTeamAggregateType<T>>

    /**
     * Group by GroupTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupTeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupTeamGroupByArgs['orderBy'] }
        : { orderBy?: GroupTeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupTeam model
   */
  readonly fields: GroupTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupTeam model
   */
  interface GroupTeamFieldRefs {
    readonly id: FieldRef<"GroupTeam", 'String'>
    readonly groupId: FieldRef<"GroupTeam", 'String'>
    readonly teamId: FieldRef<"GroupTeam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupTeam findUnique
   */
  export type GroupTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter, which GroupTeam to fetch.
     */
    where: GroupTeamWhereUniqueInput
  }

  /**
   * GroupTeam findUniqueOrThrow
   */
  export type GroupTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter, which GroupTeam to fetch.
     */
    where: GroupTeamWhereUniqueInput
  }

  /**
   * GroupTeam findFirst
   */
  export type GroupTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter, which GroupTeam to fetch.
     */
    where?: GroupTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTeams to fetch.
     */
    orderBy?: GroupTeamOrderByWithRelationInput | GroupTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTeams.
     */
    cursor?: GroupTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTeams.
     */
    distinct?: GroupTeamScalarFieldEnum | GroupTeamScalarFieldEnum[]
  }

  /**
   * GroupTeam findFirstOrThrow
   */
  export type GroupTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter, which GroupTeam to fetch.
     */
    where?: GroupTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTeams to fetch.
     */
    orderBy?: GroupTeamOrderByWithRelationInput | GroupTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupTeams.
     */
    cursor?: GroupTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupTeams.
     */
    distinct?: GroupTeamScalarFieldEnum | GroupTeamScalarFieldEnum[]
  }

  /**
   * GroupTeam findMany
   */
  export type GroupTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter, which GroupTeams to fetch.
     */
    where?: GroupTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupTeams to fetch.
     */
    orderBy?: GroupTeamOrderByWithRelationInput | GroupTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupTeams.
     */
    cursor?: GroupTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupTeams.
     */
    skip?: number
    distinct?: GroupTeamScalarFieldEnum | GroupTeamScalarFieldEnum[]
  }

  /**
   * GroupTeam create
   */
  export type GroupTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupTeam.
     */
    data: XOR<GroupTeamCreateInput, GroupTeamUncheckedCreateInput>
  }

  /**
   * GroupTeam createMany
   */
  export type GroupTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupTeams.
     */
    data: GroupTeamCreateManyInput | GroupTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupTeam createManyAndReturn
   */
  export type GroupTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * The data used to create many GroupTeams.
     */
    data: GroupTeamCreateManyInput | GroupTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTeam update
   */
  export type GroupTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupTeam.
     */
    data: XOR<GroupTeamUpdateInput, GroupTeamUncheckedUpdateInput>
    /**
     * Choose, which GroupTeam to update.
     */
    where: GroupTeamWhereUniqueInput
  }

  /**
   * GroupTeam updateMany
   */
  export type GroupTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupTeams.
     */
    data: XOR<GroupTeamUpdateManyMutationInput, GroupTeamUncheckedUpdateManyInput>
    /**
     * Filter which GroupTeams to update
     */
    where?: GroupTeamWhereInput
    /**
     * Limit how many GroupTeams to update.
     */
    limit?: number
  }

  /**
   * GroupTeam updateManyAndReturn
   */
  export type GroupTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * The data used to update GroupTeams.
     */
    data: XOR<GroupTeamUpdateManyMutationInput, GroupTeamUncheckedUpdateManyInput>
    /**
     * Filter which GroupTeams to update
     */
    where?: GroupTeamWhereInput
    /**
     * Limit how many GroupTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupTeam upsert
   */
  export type GroupTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupTeam to update in case it exists.
     */
    where: GroupTeamWhereUniqueInput
    /**
     * In case the GroupTeam found by the `where` argument doesn't exist, create a new GroupTeam with this data.
     */
    create: XOR<GroupTeamCreateInput, GroupTeamUncheckedCreateInput>
    /**
     * In case the GroupTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupTeamUpdateInput, GroupTeamUncheckedUpdateInput>
  }

  /**
   * GroupTeam delete
   */
  export type GroupTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
    /**
     * Filter which GroupTeam to delete.
     */
    where: GroupTeamWhereUniqueInput
  }

  /**
   * GroupTeam deleteMany
   */
  export type GroupTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupTeams to delete
     */
    where?: GroupTeamWhereInput
    /**
     * Limit how many GroupTeams to delete.
     */
    limit?: number
  }

  /**
   * GroupTeam without action
   */
  export type GroupTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupTeam
     */
    select?: GroupTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupTeam
     */
    omit?: GroupTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupTeamInclude<ExtArgs> | null
  }


  /**
   * Model GroupStats
   */

  export type AggregateGroupStats = {
    _count: GroupStatsCountAggregateOutputType | null
    _avg: GroupStatsAvgAggregateOutputType | null
    _sum: GroupStatsSumAggregateOutputType | null
    _min: GroupStatsMinAggregateOutputType | null
    _max: GroupStatsMaxAggregateOutputType | null
  }

  export type GroupStatsAvgAggregateOutputType = {
    matchesPlayed: number | null
    wins: number | null
    losses: number | null
    points: number | null
    runsScored: number | null
    runsConceded: number | null
    oversFaced: number | null
    oversBowled: number | null
    netRunRate: number | null
  }

  export type GroupStatsSumAggregateOutputType = {
    matchesPlayed: number | null
    wins: number | null
    losses: number | null
    points: number | null
    runsScored: number | null
    runsConceded: number | null
    oversFaced: number | null
    oversBowled: number | null
    netRunRate: number | null
  }

  export type GroupStatsMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    teamId: string | null
    matchesPlayed: number | null
    wins: number | null
    losses: number | null
    points: number | null
    runsScored: number | null
    runsConceded: number | null
    oversFaced: number | null
    oversBowled: number | null
    netRunRate: number | null
  }

  export type GroupStatsMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    teamId: string | null
    matchesPlayed: number | null
    wins: number | null
    losses: number | null
    points: number | null
    runsScored: number | null
    runsConceded: number | null
    oversFaced: number | null
    oversBowled: number | null
    netRunRate: number | null
  }

  export type GroupStatsCountAggregateOutputType = {
    id: number
    groupId: number
    teamId: number
    matchesPlayed: number
    wins: number
    losses: number
    points: number
    runsScored: number
    runsConceded: number
    oversFaced: number
    oversBowled: number
    netRunRate: number
    _all: number
  }


  export type GroupStatsAvgAggregateInputType = {
    matchesPlayed?: true
    wins?: true
    losses?: true
    points?: true
    runsScored?: true
    runsConceded?: true
    oversFaced?: true
    oversBowled?: true
    netRunRate?: true
  }

  export type GroupStatsSumAggregateInputType = {
    matchesPlayed?: true
    wins?: true
    losses?: true
    points?: true
    runsScored?: true
    runsConceded?: true
    oversFaced?: true
    oversBowled?: true
    netRunRate?: true
  }

  export type GroupStatsMinAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
    matchesPlayed?: true
    wins?: true
    losses?: true
    points?: true
    runsScored?: true
    runsConceded?: true
    oversFaced?: true
    oversBowled?: true
    netRunRate?: true
  }

  export type GroupStatsMaxAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
    matchesPlayed?: true
    wins?: true
    losses?: true
    points?: true
    runsScored?: true
    runsConceded?: true
    oversFaced?: true
    oversBowled?: true
    netRunRate?: true
  }

  export type GroupStatsCountAggregateInputType = {
    id?: true
    groupId?: true
    teamId?: true
    matchesPlayed?: true
    wins?: true
    losses?: true
    points?: true
    runsScored?: true
    runsConceded?: true
    oversFaced?: true
    oversBowled?: true
    netRunRate?: true
    _all?: true
  }

  export type GroupStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupStats to aggregate.
     */
    where?: GroupStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupStats to fetch.
     */
    orderBy?: GroupStatsOrderByWithRelationInput | GroupStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupStats
    **/
    _count?: true | GroupStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupStatsMaxAggregateInputType
  }

  export type GetGroupStatsAggregateType<T extends GroupStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupStats[P]>
      : GetScalarType<T[P], AggregateGroupStats[P]>
  }




  export type GroupStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupStatsWhereInput
    orderBy?: GroupStatsOrderByWithAggregationInput | GroupStatsOrderByWithAggregationInput[]
    by: GroupStatsScalarFieldEnum[] | GroupStatsScalarFieldEnum
    having?: GroupStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupStatsCountAggregateInputType | true
    _avg?: GroupStatsAvgAggregateInputType
    _sum?: GroupStatsSumAggregateInputType
    _min?: GroupStatsMinAggregateInputType
    _max?: GroupStatsMaxAggregateInputType
  }

  export type GroupStatsGroupByOutputType = {
    id: string
    groupId: string
    teamId: string
    matchesPlayed: number
    wins: number
    losses: number
    points: number
    runsScored: number
    runsConceded: number
    oversFaced: number
    oversBowled: number
    netRunRate: number
    _count: GroupStatsCountAggregateOutputType | null
    _avg: GroupStatsAvgAggregateOutputType | null
    _sum: GroupStatsSumAggregateOutputType | null
    _min: GroupStatsMinAggregateOutputType | null
    _max: GroupStatsMaxAggregateOutputType | null
  }

  type GetGroupStatsGroupByPayload<T extends GroupStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupStatsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupStatsGroupByOutputType[P]>
        }
      >
    >


  export type GroupStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    matchesPlayed?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    runsScored?: boolean
    runsConceded?: boolean
    oversFaced?: boolean
    oversBowled?: boolean
    netRunRate?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupStats"]>

  export type GroupStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    matchesPlayed?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    runsScored?: boolean
    runsConceded?: boolean
    oversFaced?: boolean
    oversBowled?: boolean
    netRunRate?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupStats"]>

  export type GroupStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    matchesPlayed?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    runsScored?: boolean
    runsConceded?: boolean
    oversFaced?: boolean
    oversBowled?: boolean
    netRunRate?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupStats"]>

  export type GroupStatsSelectScalar = {
    id?: boolean
    groupId?: boolean
    teamId?: boolean
    matchesPlayed?: boolean
    wins?: boolean
    losses?: boolean
    points?: boolean
    runsScored?: boolean
    runsConceded?: boolean
    oversFaced?: boolean
    oversBowled?: boolean
    netRunRate?: boolean
  }

  export type GroupStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "teamId" | "matchesPlayed" | "wins" | "losses" | "points" | "runsScored" | "runsConceded" | "oversFaced" | "oversBowled" | "netRunRate", ExtArgs["result"]["groupStats"]>
  export type GroupStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupStats"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      teamId: string
      matchesPlayed: number
      wins: number
      losses: number
      points: number
      runsScored: number
      runsConceded: number
      oversFaced: number
      oversBowled: number
      netRunRate: number
    }, ExtArgs["result"]["groupStats"]>
    composites: {}
  }

  type GroupStatsGetPayload<S extends boolean | null | undefined | GroupStatsDefaultArgs> = $Result.GetResult<Prisma.$GroupStatsPayload, S>

  type GroupStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupStatsCountAggregateInputType | true
    }

  export interface GroupStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupStats'], meta: { name: 'GroupStats' } }
    /**
     * Find zero or one GroupStats that matches the filter.
     * @param {GroupStatsFindUniqueArgs} args - Arguments to find a GroupStats
     * @example
     * // Get one GroupStats
     * const groupStats = await prisma.groupStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupStatsFindUniqueArgs>(args: SelectSubset<T, GroupStatsFindUniqueArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupStatsFindUniqueOrThrowArgs} args - Arguments to find a GroupStats
     * @example
     * // Get one GroupStats
     * const groupStats = await prisma.groupStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsFindFirstArgs} args - Arguments to find a GroupStats
     * @example
     * // Get one GroupStats
     * const groupStats = await prisma.groupStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupStatsFindFirstArgs>(args?: SelectSubset<T, GroupStatsFindFirstArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsFindFirstOrThrowArgs} args - Arguments to find a GroupStats
     * @example
     * // Get one GroupStats
     * const groupStats = await prisma.groupStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupStats
     * const groupStats = await prisma.groupStats.findMany()
     * 
     * // Get first 10 GroupStats
     * const groupStats = await prisma.groupStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupStatsWithIdOnly = await prisma.groupStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupStatsFindManyArgs>(args?: SelectSubset<T, GroupStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupStats.
     * @param {GroupStatsCreateArgs} args - Arguments to create a GroupStats.
     * @example
     * // Create one GroupStats
     * const GroupStats = await prisma.groupStats.create({
     *   data: {
     *     // ... data to create a GroupStats
     *   }
     * })
     * 
     */
    create<T extends GroupStatsCreateArgs>(args: SelectSubset<T, GroupStatsCreateArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupStats.
     * @param {GroupStatsCreateManyArgs} args - Arguments to create many GroupStats.
     * @example
     * // Create many GroupStats
     * const groupStats = await prisma.groupStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupStatsCreateManyArgs>(args?: SelectSubset<T, GroupStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupStats and returns the data saved in the database.
     * @param {GroupStatsCreateManyAndReturnArgs} args - Arguments to create many GroupStats.
     * @example
     * // Create many GroupStats
     * const groupStats = await prisma.groupStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupStats and only return the `id`
     * const groupStatsWithIdOnly = await prisma.groupStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupStats.
     * @param {GroupStatsDeleteArgs} args - Arguments to delete one GroupStats.
     * @example
     * // Delete one GroupStats
     * const GroupStats = await prisma.groupStats.delete({
     *   where: {
     *     // ... filter to delete one GroupStats
     *   }
     * })
     * 
     */
    delete<T extends GroupStatsDeleteArgs>(args: SelectSubset<T, GroupStatsDeleteArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupStats.
     * @param {GroupStatsUpdateArgs} args - Arguments to update one GroupStats.
     * @example
     * // Update one GroupStats
     * const groupStats = await prisma.groupStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupStatsUpdateArgs>(args: SelectSubset<T, GroupStatsUpdateArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupStats.
     * @param {GroupStatsDeleteManyArgs} args - Arguments to filter GroupStats to delete.
     * @example
     * // Delete a few GroupStats
     * const { count } = await prisma.groupStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupStatsDeleteManyArgs>(args?: SelectSubset<T, GroupStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupStats
     * const groupStats = await prisma.groupStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupStatsUpdateManyArgs>(args: SelectSubset<T, GroupStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupStats and returns the data updated in the database.
     * @param {GroupStatsUpdateManyAndReturnArgs} args - Arguments to update many GroupStats.
     * @example
     * // Update many GroupStats
     * const groupStats = await prisma.groupStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupStats and only return the `id`
     * const groupStatsWithIdOnly = await prisma.groupStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupStats.
     * @param {GroupStatsUpsertArgs} args - Arguments to update or create a GroupStats.
     * @example
     * // Update or create a GroupStats
     * const groupStats = await prisma.groupStats.upsert({
     *   create: {
     *     // ... data to create a GroupStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupStats we want to update
     *   }
     * })
     */
    upsert<T extends GroupStatsUpsertArgs>(args: SelectSubset<T, GroupStatsUpsertArgs<ExtArgs>>): Prisma__GroupStatsClient<$Result.GetResult<Prisma.$GroupStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsCountArgs} args - Arguments to filter GroupStats to count.
     * @example
     * // Count the number of GroupStats
     * const count = await prisma.groupStats.count({
     *   where: {
     *     // ... the filter for the GroupStats we want to count
     *   }
     * })
    **/
    count<T extends GroupStatsCountArgs>(
      args?: Subset<T, GroupStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupStatsAggregateArgs>(args: Subset<T, GroupStatsAggregateArgs>): Prisma.PrismaPromise<GetGroupStatsAggregateType<T>>

    /**
     * Group by GroupStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupStatsGroupByArgs['orderBy'] }
        : { orderBy?: GroupStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupStats model
   */
  readonly fields: GroupStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupStats model
   */
  interface GroupStatsFieldRefs {
    readonly id: FieldRef<"GroupStats", 'String'>
    readonly groupId: FieldRef<"GroupStats", 'String'>
    readonly teamId: FieldRef<"GroupStats", 'String'>
    readonly matchesPlayed: FieldRef<"GroupStats", 'Int'>
    readonly wins: FieldRef<"GroupStats", 'Int'>
    readonly losses: FieldRef<"GroupStats", 'Int'>
    readonly points: FieldRef<"GroupStats", 'Int'>
    readonly runsScored: FieldRef<"GroupStats", 'Int'>
    readonly runsConceded: FieldRef<"GroupStats", 'Int'>
    readonly oversFaced: FieldRef<"GroupStats", 'Float'>
    readonly oversBowled: FieldRef<"GroupStats", 'Float'>
    readonly netRunRate: FieldRef<"GroupStats", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * GroupStats findUnique
   */
  export type GroupStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupStats to fetch.
     */
    where: GroupStatsWhereUniqueInput
  }

  /**
   * GroupStats findUniqueOrThrow
   */
  export type GroupStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupStats to fetch.
     */
    where: GroupStatsWhereUniqueInput
  }

  /**
   * GroupStats findFirst
   */
  export type GroupStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupStats to fetch.
     */
    where?: GroupStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupStats to fetch.
     */
    orderBy?: GroupStatsOrderByWithRelationInput | GroupStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupStats.
     */
    cursor?: GroupStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupStats.
     */
    distinct?: GroupStatsScalarFieldEnum | GroupStatsScalarFieldEnum[]
  }

  /**
   * GroupStats findFirstOrThrow
   */
  export type GroupStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupStats to fetch.
     */
    where?: GroupStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupStats to fetch.
     */
    orderBy?: GroupStatsOrderByWithRelationInput | GroupStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupStats.
     */
    cursor?: GroupStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupStats.
     */
    distinct?: GroupStatsScalarFieldEnum | GroupStatsScalarFieldEnum[]
  }

  /**
   * GroupStats findMany
   */
  export type GroupStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupStats to fetch.
     */
    where?: GroupStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupStats to fetch.
     */
    orderBy?: GroupStatsOrderByWithRelationInput | GroupStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupStats.
     */
    cursor?: GroupStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupStats.
     */
    skip?: number
    distinct?: GroupStatsScalarFieldEnum | GroupStatsScalarFieldEnum[]
  }

  /**
   * GroupStats create
   */
  export type GroupStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupStats.
     */
    data: XOR<GroupStatsCreateInput, GroupStatsUncheckedCreateInput>
  }

  /**
   * GroupStats createMany
   */
  export type GroupStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupStats.
     */
    data: GroupStatsCreateManyInput | GroupStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupStats createManyAndReturn
   */
  export type GroupStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * The data used to create many GroupStats.
     */
    data: GroupStatsCreateManyInput | GroupStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupStats update
   */
  export type GroupStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupStats.
     */
    data: XOR<GroupStatsUpdateInput, GroupStatsUncheckedUpdateInput>
    /**
     * Choose, which GroupStats to update.
     */
    where: GroupStatsWhereUniqueInput
  }

  /**
   * GroupStats updateMany
   */
  export type GroupStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupStats.
     */
    data: XOR<GroupStatsUpdateManyMutationInput, GroupStatsUncheckedUpdateManyInput>
    /**
     * Filter which GroupStats to update
     */
    where?: GroupStatsWhereInput
    /**
     * Limit how many GroupStats to update.
     */
    limit?: number
  }

  /**
   * GroupStats updateManyAndReturn
   */
  export type GroupStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * The data used to update GroupStats.
     */
    data: XOR<GroupStatsUpdateManyMutationInput, GroupStatsUncheckedUpdateManyInput>
    /**
     * Filter which GroupStats to update
     */
    where?: GroupStatsWhereInput
    /**
     * Limit how many GroupStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupStats upsert
   */
  export type GroupStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupStats to update in case it exists.
     */
    where: GroupStatsWhereUniqueInput
    /**
     * In case the GroupStats found by the `where` argument doesn't exist, create a new GroupStats with this data.
     */
    create: XOR<GroupStatsCreateInput, GroupStatsUncheckedCreateInput>
    /**
     * In case the GroupStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupStatsUpdateInput, GroupStatsUncheckedUpdateInput>
  }

  /**
   * GroupStats delete
   */
  export type GroupStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
    /**
     * Filter which GroupStats to delete.
     */
    where: GroupStatsWhereUniqueInput
  }

  /**
   * GroupStats deleteMany
   */
  export type GroupStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupStats to delete
     */
    where?: GroupStatsWhereInput
    /**
     * Limit how many GroupStats to delete.
     */
    limit?: number
  }

  /**
   * GroupStats without action
   */
  export type GroupStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupStats
     */
    select?: GroupStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupStats
     */
    omit?: GroupStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupStatsInclude<ExtArgs> | null
  }


  /**
   * Model Fixture
   */

  export type AggregateFixture = {
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  export type FixtureAvgAggregateOutputType = {
    round: number | null
    matchNo: number | null
  }

  export type FixtureSumAggregateOutputType = {
    round: number | null
    matchNo: number | null
  }

  export type FixtureMinAggregateOutputType = {
    id: string | null
    stageId: string | null
    groupId: string | null
    homeTeamId: string | null
    awayTeamId: string | null
    round: number | null
    matchNo: number | null
    createdAt: Date | null
  }

  export type FixtureMaxAggregateOutputType = {
    id: string | null
    stageId: string | null
    groupId: string | null
    homeTeamId: string | null
    awayTeamId: string | null
    round: number | null
    matchNo: number | null
    createdAt: Date | null
  }

  export type FixtureCountAggregateOutputType = {
    id: number
    stageId: number
    groupId: number
    homeTeamId: number
    awayTeamId: number
    round: number
    matchNo: number
    createdAt: number
    _all: number
  }


  export type FixtureAvgAggregateInputType = {
    round?: true
    matchNo?: true
  }

  export type FixtureSumAggregateInputType = {
    round?: true
    matchNo?: true
  }

  export type FixtureMinAggregateInputType = {
    id?: true
    stageId?: true
    groupId?: true
    homeTeamId?: true
    awayTeamId?: true
    round?: true
    matchNo?: true
    createdAt?: true
  }

  export type FixtureMaxAggregateInputType = {
    id?: true
    stageId?: true
    groupId?: true
    homeTeamId?: true
    awayTeamId?: true
    round?: true
    matchNo?: true
    createdAt?: true
  }

  export type FixtureCountAggregateInputType = {
    id?: true
    stageId?: true
    groupId?: true
    homeTeamId?: true
    awayTeamId?: true
    round?: true
    matchNo?: true
    createdAt?: true
    _all?: true
  }

  export type FixtureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixture to aggregate.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fixtures
    **/
    _count?: true | FixtureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FixtureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FixtureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixtureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixtureMaxAggregateInputType
  }

  export type GetFixtureAggregateType<T extends FixtureAggregateArgs> = {
        [P in keyof T & keyof AggregateFixture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixture[P]>
      : GetScalarType<T[P], AggregateFixture[P]>
  }




  export type FixtureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithAggregationInput | FixtureOrderByWithAggregationInput[]
    by: FixtureScalarFieldEnum[] | FixtureScalarFieldEnum
    having?: FixtureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixtureCountAggregateInputType | true
    _avg?: FixtureAvgAggregateInputType
    _sum?: FixtureSumAggregateInputType
    _min?: FixtureMinAggregateInputType
    _max?: FixtureMaxAggregateInputType
  }

  export type FixtureGroupByOutputType = {
    id: string
    stageId: string | null
    groupId: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt: Date
    _count: FixtureCountAggregateOutputType | null
    _avg: FixtureAvgAggregateOutputType | null
    _sum: FixtureSumAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  type GetFixtureGroupByPayload<T extends FixtureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixtureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixtureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixtureGroupByOutputType[P]>
            : GetScalarType<T[P], FixtureGroupByOutputType[P]>
        }
      >
    >


  export type FixtureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageId?: boolean
    groupId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    round?: boolean
    matchNo?: boolean
    createdAt?: boolean
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageId?: boolean
    groupId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    round?: boolean
    matchNo?: boolean
    createdAt?: boolean
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stageId?: boolean
    groupId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    round?: boolean
    matchNo?: boolean
    createdAt?: boolean
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectScalar = {
    id?: boolean
    stageId?: boolean
    groupId?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    round?: boolean
    matchNo?: boolean
    createdAt?: boolean
  }

  export type FixtureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stageId" | "groupId" | "homeTeamId" | "awayTeamId" | "round" | "matchNo" | "createdAt", ExtArgs["result"]["fixture"]>
  export type FixtureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }
  export type FixtureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }
  export type FixtureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stage?: boolean | Fixture$stageArgs<ExtArgs>
    group?: boolean | Fixture$groupArgs<ExtArgs>
  }

  export type $FixturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fixture"
    objects: {
      stage: Prisma.$StagePayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stageId: string | null
      groupId: string | null
      homeTeamId: string
      awayTeamId: string
      round: number
      matchNo: number
      createdAt: Date
    }, ExtArgs["result"]["fixture"]>
    composites: {}
  }

  type FixtureGetPayload<S extends boolean | null | undefined | FixtureDefaultArgs> = $Result.GetResult<Prisma.$FixturePayload, S>

  type FixtureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FixtureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FixtureCountAggregateInputType | true
    }

  export interface FixtureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fixture'], meta: { name: 'Fixture' } }
    /**
     * Find zero or one Fixture that matches the filter.
     * @param {FixtureFindUniqueArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FixtureFindUniqueArgs>(args: SelectSubset<T, FixtureFindUniqueArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fixture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FixtureFindUniqueOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FixtureFindUniqueOrThrowArgs>(args: SelectSubset<T, FixtureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FixtureFindFirstArgs>(args?: SelectSubset<T, FixtureFindFirstArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FixtureFindFirstOrThrowArgs>(args?: SelectSubset<T, FixtureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fixtures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fixtures
     * const fixtures = await prisma.fixture.findMany()
     * 
     * // Get first 10 Fixtures
     * const fixtures = await prisma.fixture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixtureWithIdOnly = await prisma.fixture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FixtureFindManyArgs>(args?: SelectSubset<T, FixtureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fixture.
     * @param {FixtureCreateArgs} args - Arguments to create a Fixture.
     * @example
     * // Create one Fixture
     * const Fixture = await prisma.fixture.create({
     *   data: {
     *     // ... data to create a Fixture
     *   }
     * })
     * 
     */
    create<T extends FixtureCreateArgs>(args: SelectSubset<T, FixtureCreateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fixtures.
     * @param {FixtureCreateManyArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FixtureCreateManyArgs>(args?: SelectSubset<T, FixtureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fixtures and returns the data saved in the database.
     * @param {FixtureCreateManyAndReturnArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FixtureCreateManyAndReturnArgs>(args?: SelectSubset<T, FixtureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fixture.
     * @param {FixtureDeleteArgs} args - Arguments to delete one Fixture.
     * @example
     * // Delete one Fixture
     * const Fixture = await prisma.fixture.delete({
     *   where: {
     *     // ... filter to delete one Fixture
     *   }
     * })
     * 
     */
    delete<T extends FixtureDeleteArgs>(args: SelectSubset<T, FixtureDeleteArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fixture.
     * @param {FixtureUpdateArgs} args - Arguments to update one Fixture.
     * @example
     * // Update one Fixture
     * const fixture = await prisma.fixture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FixtureUpdateArgs>(args: SelectSubset<T, FixtureUpdateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fixtures.
     * @param {FixtureDeleteManyArgs} args - Arguments to filter Fixtures to delete.
     * @example
     * // Delete a few Fixtures
     * const { count } = await prisma.fixture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FixtureDeleteManyArgs>(args?: SelectSubset<T, FixtureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FixtureUpdateManyArgs>(args: SelectSubset<T, FixtureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures and returns the data updated in the database.
     * @param {FixtureUpdateManyAndReturnArgs} args - Arguments to update many Fixtures.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FixtureUpdateManyAndReturnArgs>(args: SelectSubset<T, FixtureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fixture.
     * @param {FixtureUpsertArgs} args - Arguments to update or create a Fixture.
     * @example
     * // Update or create a Fixture
     * const fixture = await prisma.fixture.upsert({
     *   create: {
     *     // ... data to create a Fixture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fixture we want to update
     *   }
     * })
     */
    upsert<T extends FixtureUpsertArgs>(args: SelectSubset<T, FixtureUpsertArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureCountArgs} args - Arguments to filter Fixtures to count.
     * @example
     * // Count the number of Fixtures
     * const count = await prisma.fixture.count({
     *   where: {
     *     // ... the filter for the Fixtures we want to count
     *   }
     * })
    **/
    count<T extends FixtureCountArgs>(
      args?: Subset<T, FixtureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixtureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FixtureAggregateArgs>(args: Subset<T, FixtureAggregateArgs>): Prisma.PrismaPromise<GetFixtureAggregateType<T>>

    /**
     * Group by Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FixtureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixtureGroupByArgs['orderBy'] }
        : { orderBy?: FixtureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FixtureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixtureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fixture model
   */
  readonly fields: FixtureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fixture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixtureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stage<T extends Fixture$stageArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$stageArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends Fixture$groupArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fixture model
   */
  interface FixtureFieldRefs {
    readonly id: FieldRef<"Fixture", 'String'>
    readonly stageId: FieldRef<"Fixture", 'String'>
    readonly groupId: FieldRef<"Fixture", 'String'>
    readonly homeTeamId: FieldRef<"Fixture", 'String'>
    readonly awayTeamId: FieldRef<"Fixture", 'String'>
    readonly round: FieldRef<"Fixture", 'Int'>
    readonly matchNo: FieldRef<"Fixture", 'Int'>
    readonly createdAt: FieldRef<"Fixture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fixture findUnique
   */
  export type FixtureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findUniqueOrThrow
   */
  export type FixtureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findFirst
   */
  export type FixtureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findFirstOrThrow
   */
  export type FixtureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findMany
   */
  export type FixtureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixtures to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture create
   */
  export type FixtureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to create a Fixture.
     */
    data: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
  }

  /**
   * Fixture createMany
   */
  export type FixtureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fixture createManyAndReturn
   */
  export type FixtureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture update
   */
  export type FixtureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to update a Fixture.
     */
    data: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
    /**
     * Choose, which Fixture to update.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture updateMany
   */
  export type FixtureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
  }

  /**
   * Fixture updateManyAndReturn
   */
  export type FixtureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture upsert
   */
  export type FixtureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The filter to search for the Fixture to update in case it exists.
     */
    where: FixtureWhereUniqueInput
    /**
     * In case the Fixture found by the `where` argument doesn't exist, create a new Fixture with this data.
     */
    create: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
    /**
     * In case the Fixture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
  }

  /**
   * Fixture delete
   */
  export type FixtureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter which Fixture to delete.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture deleteMany
   */
  export type FixtureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixtures to delete
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to delete.
     */
    limit?: number
  }

  /**
   * Fixture.stage
   */
  export type Fixture$stageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stage
     */
    omit?: StageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
  }

  /**
   * Fixture.group
   */
  export type Fixture$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Fixture without action
   */
  export type FixtureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    seasonId: 'seasonId',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const TournamentConfigScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    format: 'format',
    totalTeams: 'totalTeams'
  };

  export type TournamentConfigScalarFieldEnum = (typeof TournamentConfigScalarFieldEnum)[keyof typeof TournamentConfigScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    order: 'order',
    tournamentId: 'tournamentId'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stageId: 'stageId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupTeamScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    teamId: 'teamId'
  };

  export type GroupTeamScalarFieldEnum = (typeof GroupTeamScalarFieldEnum)[keyof typeof GroupTeamScalarFieldEnum]


  export const GroupStatsScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    teamId: 'teamId',
    matchesPlayed: 'matchesPlayed',
    wins: 'wins',
    losses: 'losses',
    points: 'points',
    runsScored: 'runsScored',
    runsConceded: 'runsConceded',
    oversFaced: 'oversFaced',
    oversBowled: 'oversBowled',
    netRunRate: 'netRunRate'
  };

  export type GroupStatsScalarFieldEnum = (typeof GroupStatsScalarFieldEnum)[keyof typeof GroupStatsScalarFieldEnum]


  export const FixtureScalarFieldEnum: {
    id: 'id',
    stageId: 'stageId',
    groupId: 'groupId',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    round: 'round',
    matchNo: 'matchNo',
    createdAt: 'createdAt'
  };

  export type FixtureScalarFieldEnum = (typeof FixtureScalarFieldEnum)[keyof typeof FixtureScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TournamentStatus'
   */
  export type EnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus'>
    


  /**
   * Reference to a field of type 'TournamentStatus[]'
   */
  export type ListEnumTournamentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TournamentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    seasonId?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    config?: XOR<TournamentConfigNullableScalarRelationFilter, TournamentConfigWhereInput> | null
    stages?: StageListRelationFilter
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    config?: TournamentConfigOrderByWithRelationInput
    stages?: StageOrderByRelationAggregateInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    seasonId?: StringFilter<"Tournament"> | string
    status?: EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeFilter<"Tournament"> | Date | string
    config?: XOR<TournamentConfigNullableScalarRelationFilter, TournamentConfigWhereInput> | null
    stages?: StageListRelationFilter
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    status?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    seasonId?: StringWithAggregatesFilter<"Tournament"> | string
    status?: EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus
    startDate?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Tournament"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type TournamentConfigWhereInput = {
    AND?: TournamentConfigWhereInput | TournamentConfigWhereInput[]
    OR?: TournamentConfigWhereInput[]
    NOT?: TournamentConfigWhereInput | TournamentConfigWhereInput[]
    id?: StringFilter<"TournamentConfig"> | string
    tournamentId?: StringFilter<"TournamentConfig"> | string
    format?: StringFilter<"TournamentConfig"> | string
    totalTeams?: IntFilter<"TournamentConfig"> | number
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }

  export type TournamentConfigOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    format?: SortOrder
    totalTeams?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
  }

  export type TournamentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tournamentId?: string
    AND?: TournamentConfigWhereInput | TournamentConfigWhereInput[]
    OR?: TournamentConfigWhereInput[]
    NOT?: TournamentConfigWhereInput | TournamentConfigWhereInput[]
    format?: StringFilter<"TournamentConfig"> | string
    totalTeams?: IntFilter<"TournamentConfig"> | number
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
  }, "id" | "tournamentId">

  export type TournamentConfigOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    format?: SortOrder
    totalTeams?: SortOrder
    _count?: TournamentConfigCountOrderByAggregateInput
    _avg?: TournamentConfigAvgOrderByAggregateInput
    _max?: TournamentConfigMaxOrderByAggregateInput
    _min?: TournamentConfigMinOrderByAggregateInput
    _sum?: TournamentConfigSumOrderByAggregateInput
  }

  export type TournamentConfigScalarWhereWithAggregatesInput = {
    AND?: TournamentConfigScalarWhereWithAggregatesInput | TournamentConfigScalarWhereWithAggregatesInput[]
    OR?: TournamentConfigScalarWhereWithAggregatesInput[]
    NOT?: TournamentConfigScalarWhereWithAggregatesInput | TournamentConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TournamentConfig"> | string
    tournamentId?: StringWithAggregatesFilter<"TournamentConfig"> | string
    format?: StringWithAggregatesFilter<"TournamentConfig"> | string
    totalTeams?: IntWithAggregatesFilter<"TournamentConfig"> | number
  }

  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: StringFilter<"Stage"> | string
    name?: StringFilter<"Stage"> | string
    type?: StringFilter<"Stage"> | string
    order?: IntFilter<"Stage"> | number
    tournamentId?: StringFilter<"Stage"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    groups?: GroupListRelationFilter
    fixtures?: FixtureListRelationFilter
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    tournamentId?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    groups?: GroupOrderByRelationAggregateInput
    fixtures?: FixtureOrderByRelationAggregateInput
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    name?: StringFilter<"Stage"> | string
    type?: StringFilter<"Stage"> | string
    order?: IntFilter<"Stage"> | number
    tournamentId?: StringFilter<"Stage"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    groups?: GroupListRelationFilter
    fixtures?: FixtureListRelationFilter
  }, "id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    tournamentId?: SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stage"> | string
    name?: StringWithAggregatesFilter<"Stage"> | string
    type?: StringWithAggregatesFilter<"Stage"> | string
    order?: IntWithAggregatesFilter<"Stage"> | number
    tournamentId?: StringWithAggregatesFilter<"Stage"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    stageId?: StringFilter<"Group"> | string
    stage?: XOR<StageScalarRelationFilter, StageWhereInput>
    teams?: GroupTeamListRelationFilter
    fixtures?: FixtureListRelationFilter
    stats?: GroupStatsListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stageId?: SortOrder
    stage?: StageOrderByWithRelationInput
    teams?: GroupTeamOrderByRelationAggregateInput
    fixtures?: FixtureOrderByRelationAggregateInput
    stats?: GroupStatsOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    stageId?: StringFilter<"Group"> | string
    stage?: XOR<StageScalarRelationFilter, StageWhereInput>
    teams?: GroupTeamListRelationFilter
    fixtures?: FixtureListRelationFilter
    stats?: GroupStatsListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stageId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    stageId?: StringWithAggregatesFilter<"Group"> | string
  }

  export type GroupTeamWhereInput = {
    AND?: GroupTeamWhereInput | GroupTeamWhereInput[]
    OR?: GroupTeamWhereInput[]
    NOT?: GroupTeamWhereInput | GroupTeamWhereInput[]
    id?: StringFilter<"GroupTeam"> | string
    groupId?: StringFilter<"GroupTeam"> | string
    teamId?: StringFilter<"GroupTeam"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupTeamOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupTeamWhereInput | GroupTeamWhereInput[]
    OR?: GroupTeamWhereInput[]
    NOT?: GroupTeamWhereInput | GroupTeamWhereInput[]
    groupId?: StringFilter<"GroupTeam"> | string
    teamId?: StringFilter<"GroupTeam"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id">

  export type GroupTeamOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    _count?: GroupTeamCountOrderByAggregateInput
    _max?: GroupTeamMaxOrderByAggregateInput
    _min?: GroupTeamMinOrderByAggregateInput
  }

  export type GroupTeamScalarWhereWithAggregatesInput = {
    AND?: GroupTeamScalarWhereWithAggregatesInput | GroupTeamScalarWhereWithAggregatesInput[]
    OR?: GroupTeamScalarWhereWithAggregatesInput[]
    NOT?: GroupTeamScalarWhereWithAggregatesInput | GroupTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupTeam"> | string
    groupId?: StringWithAggregatesFilter<"GroupTeam"> | string
    teamId?: StringWithAggregatesFilter<"GroupTeam"> | string
  }

  export type GroupStatsWhereInput = {
    AND?: GroupStatsWhereInput | GroupStatsWhereInput[]
    OR?: GroupStatsWhereInput[]
    NOT?: GroupStatsWhereInput | GroupStatsWhereInput[]
    id?: StringFilter<"GroupStats"> | string
    groupId?: StringFilter<"GroupStats"> | string
    teamId?: StringFilter<"GroupStats"> | string
    matchesPlayed?: IntFilter<"GroupStats"> | number
    wins?: IntFilter<"GroupStats"> | number
    losses?: IntFilter<"GroupStats"> | number
    points?: IntFilter<"GroupStats"> | number
    runsScored?: IntFilter<"GroupStats"> | number
    runsConceded?: IntFilter<"GroupStats"> | number
    oversFaced?: FloatFilter<"GroupStats"> | number
    oversBowled?: FloatFilter<"GroupStats"> | number
    netRunRate?: FloatFilter<"GroupStats"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupStatsOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
    group?: GroupOrderByWithRelationInput
  }

  export type GroupStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId_teamId?: GroupStatsGroupIdTeamIdCompoundUniqueInput
    AND?: GroupStatsWhereInput | GroupStatsWhereInput[]
    OR?: GroupStatsWhereInput[]
    NOT?: GroupStatsWhereInput | GroupStatsWhereInput[]
    groupId?: StringFilter<"GroupStats"> | string
    teamId?: StringFilter<"GroupStats"> | string
    matchesPlayed?: IntFilter<"GroupStats"> | number
    wins?: IntFilter<"GroupStats"> | number
    losses?: IntFilter<"GroupStats"> | number
    points?: IntFilter<"GroupStats"> | number
    runsScored?: IntFilter<"GroupStats"> | number
    runsConceded?: IntFilter<"GroupStats"> | number
    oversFaced?: FloatFilter<"GroupStats"> | number
    oversBowled?: FloatFilter<"GroupStats"> | number
    netRunRate?: FloatFilter<"GroupStats"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "id" | "groupId_teamId">

  export type GroupStatsOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
    _count?: GroupStatsCountOrderByAggregateInput
    _avg?: GroupStatsAvgOrderByAggregateInput
    _max?: GroupStatsMaxOrderByAggregateInput
    _min?: GroupStatsMinOrderByAggregateInput
    _sum?: GroupStatsSumOrderByAggregateInput
  }

  export type GroupStatsScalarWhereWithAggregatesInput = {
    AND?: GroupStatsScalarWhereWithAggregatesInput | GroupStatsScalarWhereWithAggregatesInput[]
    OR?: GroupStatsScalarWhereWithAggregatesInput[]
    NOT?: GroupStatsScalarWhereWithAggregatesInput | GroupStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupStats"> | string
    groupId?: StringWithAggregatesFilter<"GroupStats"> | string
    teamId?: StringWithAggregatesFilter<"GroupStats"> | string
    matchesPlayed?: IntWithAggregatesFilter<"GroupStats"> | number
    wins?: IntWithAggregatesFilter<"GroupStats"> | number
    losses?: IntWithAggregatesFilter<"GroupStats"> | number
    points?: IntWithAggregatesFilter<"GroupStats"> | number
    runsScored?: IntWithAggregatesFilter<"GroupStats"> | number
    runsConceded?: IntWithAggregatesFilter<"GroupStats"> | number
    oversFaced?: FloatWithAggregatesFilter<"GroupStats"> | number
    oversBowled?: FloatWithAggregatesFilter<"GroupStats"> | number
    netRunRate?: FloatWithAggregatesFilter<"GroupStats"> | number
  }

  export type FixtureWhereInput = {
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    id?: StringFilter<"Fixture"> | string
    stageId?: StringNullableFilter<"Fixture"> | string | null
    groupId?: StringNullableFilter<"Fixture"> | string | null
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    round?: IntFilter<"Fixture"> | number
    matchNo?: IntFilter<"Fixture"> | number
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    stage?: XOR<StageNullableScalarRelationFilter, StageWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type FixtureOrderByWithRelationInput = {
    id?: SortOrder
    stageId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    round?: SortOrder
    matchNo?: SortOrder
    createdAt?: SortOrder
    stage?: StageOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type FixtureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    stageId?: StringNullableFilter<"Fixture"> | string | null
    groupId?: StringNullableFilter<"Fixture"> | string | null
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    round?: IntFilter<"Fixture"> | number
    matchNo?: IntFilter<"Fixture"> | number
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    stage?: XOR<StageNullableScalarRelationFilter, StageWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type FixtureOrderByWithAggregationInput = {
    id?: SortOrder
    stageId?: SortOrderInput | SortOrder
    groupId?: SortOrderInput | SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    round?: SortOrder
    matchNo?: SortOrder
    createdAt?: SortOrder
    _count?: FixtureCountOrderByAggregateInput
    _avg?: FixtureAvgOrderByAggregateInput
    _max?: FixtureMaxOrderByAggregateInput
    _min?: FixtureMinOrderByAggregateInput
    _sum?: FixtureSumOrderByAggregateInput
  }

  export type FixtureScalarWhereWithAggregatesInput = {
    AND?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    OR?: FixtureScalarWhereWithAggregatesInput[]
    NOT?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fixture"> | string
    stageId?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    groupId?: StringNullableWithAggregatesFilter<"Fixture"> | string | null
    homeTeamId?: StringWithAggregatesFilter<"Fixture"> | string
    awayTeamId?: StringWithAggregatesFilter<"Fixture"> | string
    round?: IntWithAggregatesFilter<"Fixture"> | number
    matchNo?: IntWithAggregatesFilter<"Fixture"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: TournamentConfigCreateNestedOneWithoutTournamentInput
    stages?: StageCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: TournamentConfigUncheckedCreateNestedOneWithoutTournamentInput
    stages?: StageUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TournamentConfigUpdateOneWithoutTournamentNestedInput
    stages?: StageUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TournamentConfigUncheckedUpdateOneWithoutTournamentNestedInput
    stages?: StageUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentConfigCreateInput = {
    id?: string
    format: string
    totalTeams: number
    tournament: TournamentCreateNestedOneWithoutConfigInput
  }

  export type TournamentConfigUncheckedCreateInput = {
    id?: string
    tournamentId: string
    format: string
    totalTeams: number
  }

  export type TournamentConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
    tournament?: TournamentUpdateOneRequiredWithoutConfigNestedInput
  }

  export type TournamentConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentConfigCreateManyInput = {
    id?: string
    tournamentId: string
    format: string
    totalTeams: number
  }

  export type TournamentConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
  }

  export type StageCreateInput = {
    id?: string
    name: string
    type: string
    order: number
    tournament: TournamentCreateNestedOneWithoutStagesInput
    groups?: GroupCreateNestedManyWithoutStageInput
    fixtures?: FixtureCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    order: number
    tournamentId: string
    groups?: GroupUncheckedCreateNestedManyWithoutStageInput
    fixtures?: FixtureUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournament?: TournamentUpdateOneRequiredWithoutStagesNestedInput
    groups?: GroupUpdateManyWithoutStageNestedInput
    fixtures?: FixtureUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournamentId?: StringFieldUpdateOperationsInput | string
    groups?: GroupUncheckedUpdateManyWithoutStageNestedInput
    fixtures?: FixtureUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StageCreateManyInput = {
    id?: string
    name: string
    type: string
    order: number
    tournamentId: string
  }

  export type StageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type StageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournamentId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    stage: StageCreateNestedOneWithoutGroupsInput
    teams?: GroupTeamCreateNestedManyWithoutGroupInput
    fixtures?: FixtureCreateNestedManyWithoutGroupInput
    stats?: GroupStatsCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    stageId: string
    teams?: GroupTeamUncheckedCreateNestedManyWithoutGroupInput
    fixtures?: FixtureUncheckedCreateNestedManyWithoutGroupInput
    stats?: GroupStatsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: StageUpdateOneRequiredWithoutGroupsNestedInput
    teams?: GroupTeamUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    teams?: GroupTeamUncheckedUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUncheckedUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    stageId: string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupTeamCreateInput = {
    id?: string
    teamId: string
    group: GroupCreateNestedOneWithoutTeamsInput
  }

  export type GroupTeamUncheckedCreateInput = {
    id?: string
    groupId: string
    teamId: string
  }

  export type GroupTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type GroupTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupTeamCreateManyInput = {
    id?: string
    groupId: string
    teamId: string
  }

  export type GroupTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupStatsCreateInput = {
    id?: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
    group: GroupCreateNestedOneWithoutStatsInput
  }

  export type GroupStatsUncheckedCreateInput = {
    id?: string
    groupId: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
  }

  export type GroupStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
    group?: GroupUpdateOneRequiredWithoutStatsNestedInput
  }

  export type GroupStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupStatsCreateManyInput = {
    id?: string
    groupId: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
  }

  export type GroupStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }

  export type FixtureCreateInput = {
    id?: string
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
    stage?: StageCreateNestedOneWithoutFixturesInput
    group?: GroupCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateInput = {
    id?: string
    stageId?: string | null
    groupId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type FixtureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: StageUpdateOneWithoutFixturesNestedInput
    group?: GroupUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateManyInput = {
    id?: string
    stageId?: string | null
    groupId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type FixtureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TournamentConfigNullableScalarRelationFilter = {
    is?: TournamentConfigWhereInput | null
    isNot?: TournamentConfigWhereInput | null
  }

  export type StageListRelationFilter = {
    every?: StageWhereInput
    some?: StageWhereInput
    none?: StageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    seasonId?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type TournamentConfigCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    format?: SortOrder
    totalTeams?: SortOrder
  }

  export type TournamentConfigAvgOrderByAggregateInput = {
    totalTeams?: SortOrder
  }

  export type TournamentConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    format?: SortOrder
    totalTeams?: SortOrder
  }

  export type TournamentConfigMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    format?: SortOrder
    totalTeams?: SortOrder
  }

  export type TournamentConfigSumOrderByAggregateInput = {
    totalTeams?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type FixtureListRelationFilter = {
    every?: FixtureWhereInput
    some?: FixtureWhereInput
    none?: FixtureWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    tournamentId?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    tournamentId?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    tournamentId?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type StageScalarRelationFilter = {
    is?: StageWhereInput
    isNot?: StageWhereInput
  }

  export type GroupTeamListRelationFilter = {
    every?: GroupTeamWhereInput
    some?: GroupTeamWhereInput
    none?: GroupTeamWhereInput
  }

  export type GroupStatsListRelationFilter = {
    every?: GroupStatsWhereInput
    some?: GroupStatsWhereInput
    none?: GroupStatsWhereInput
  }

  export type GroupTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stageId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stageId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stageId?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupTeamCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
  }

  export type GroupTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
  }

  export type GroupTeamMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GroupStatsGroupIdTeamIdCompoundUniqueInput = {
    groupId: string
    teamId: string
  }

  export type GroupStatsCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
  }

  export type GroupStatsAvgOrderByAggregateInput = {
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
  }

  export type GroupStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
  }

  export type GroupStatsMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    teamId?: SortOrder
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
  }

  export type GroupStatsSumOrderByAggregateInput = {
    matchesPlayed?: SortOrder
    wins?: SortOrder
    losses?: SortOrder
    points?: SortOrder
    runsScored?: SortOrder
    runsConceded?: SortOrder
    oversFaced?: SortOrder
    oversBowled?: SortOrder
    netRunRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StageNullableScalarRelationFilter = {
    is?: StageWhereInput | null
    isNot?: StageWhereInput | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type FixtureCountOrderByAggregateInput = {
    id?: SortOrder
    stageId?: SortOrder
    groupId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    round?: SortOrder
    matchNo?: SortOrder
    createdAt?: SortOrder
  }

  export type FixtureAvgOrderByAggregateInput = {
    round?: SortOrder
    matchNo?: SortOrder
  }

  export type FixtureMaxOrderByAggregateInput = {
    id?: SortOrder
    stageId?: SortOrder
    groupId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    round?: SortOrder
    matchNo?: SortOrder
    createdAt?: SortOrder
  }

  export type FixtureMinOrderByAggregateInput = {
    id?: SortOrder
    stageId?: SortOrder
    groupId?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    round?: SortOrder
    matchNo?: SortOrder
    createdAt?: SortOrder
  }

  export type FixtureSumOrderByAggregateInput = {
    round?: SortOrder
    matchNo?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TournamentConfigCreateNestedOneWithoutTournamentInput = {
    create?: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: TournamentConfigCreateOrConnectWithoutTournamentInput
    connect?: TournamentConfigWhereUniqueInput
  }

  export type StageCreateNestedManyWithoutTournamentInput = {
    create?: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput> | StageCreateWithoutTournamentInput[] | StageUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: StageCreateOrConnectWithoutTournamentInput | StageCreateOrConnectWithoutTournamentInput[]
    createMany?: StageCreateManyTournamentInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type TournamentConfigUncheckedCreateNestedOneWithoutTournamentInput = {
    create?: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: TournamentConfigCreateOrConnectWithoutTournamentInput
    connect?: TournamentConfigWhereUniqueInput
  }

  export type StageUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput> | StageCreateWithoutTournamentInput[] | StageUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: StageCreateOrConnectWithoutTournamentInput | StageCreateOrConnectWithoutTournamentInput[]
    createMany?: StageCreateManyTournamentInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TournamentConfigUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: TournamentConfigCreateOrConnectWithoutTournamentInput
    upsert?: TournamentConfigUpsertWithoutTournamentInput
    disconnect?: TournamentConfigWhereInput | boolean
    delete?: TournamentConfigWhereInput | boolean
    connect?: TournamentConfigWhereUniqueInput
    update?: XOR<XOR<TournamentConfigUpdateToOneWithWhereWithoutTournamentInput, TournamentConfigUpdateWithoutTournamentInput>, TournamentConfigUncheckedUpdateWithoutTournamentInput>
  }

  export type StageUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput> | StageCreateWithoutTournamentInput[] | StageUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: StageCreateOrConnectWithoutTournamentInput | StageCreateOrConnectWithoutTournamentInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutTournamentInput | StageUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: StageCreateManyTournamentInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutTournamentInput | StageUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: StageUpdateManyWithWhereWithoutTournamentInput | StageUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type TournamentConfigUncheckedUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: TournamentConfigCreateOrConnectWithoutTournamentInput
    upsert?: TournamentConfigUpsertWithoutTournamentInput
    disconnect?: TournamentConfigWhereInput | boolean
    delete?: TournamentConfigWhereInput | boolean
    connect?: TournamentConfigWhereUniqueInput
    update?: XOR<XOR<TournamentConfigUpdateToOneWithWhereWithoutTournamentInput, TournamentConfigUpdateWithoutTournamentInput>, TournamentConfigUncheckedUpdateWithoutTournamentInput>
  }

  export type StageUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput> | StageCreateWithoutTournamentInput[] | StageUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: StageCreateOrConnectWithoutTournamentInput | StageCreateOrConnectWithoutTournamentInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutTournamentInput | StageUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: StageCreateManyTournamentInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutTournamentInput | StageUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: StageUpdateManyWithWhereWithoutTournamentInput | StageUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutConfigInput = {
    create?: XOR<TournamentCreateWithoutConfigInput, TournamentUncheckedCreateWithoutConfigInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutConfigInput
    connect?: TournamentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TournamentUpdateOneRequiredWithoutConfigNestedInput = {
    create?: XOR<TournamentCreateWithoutConfigInput, TournamentUncheckedCreateWithoutConfigInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutConfigInput
    upsert?: TournamentUpsertWithoutConfigInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutConfigInput, TournamentUpdateWithoutConfigInput>, TournamentUncheckedUpdateWithoutConfigInput>
  }

  export type TournamentCreateNestedOneWithoutStagesInput = {
    create?: XOR<TournamentCreateWithoutStagesInput, TournamentUncheckedCreateWithoutStagesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutStagesInput
    connect?: TournamentWhereUniqueInput
  }

  export type GroupCreateNestedManyWithoutStageInput = {
    create?: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput> | GroupCreateWithoutStageInput[] | GroupUncheckedCreateWithoutStageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStageInput | GroupCreateOrConnectWithoutStageInput[]
    createMany?: GroupCreateManyStageInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type FixtureCreateNestedManyWithoutStageInput = {
    create?: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput> | FixtureCreateWithoutStageInput[] | FixtureUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutStageInput | FixtureCreateOrConnectWithoutStageInput[]
    createMany?: FixtureCreateManyStageInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput> | GroupCreateWithoutStageInput[] | GroupUncheckedCreateWithoutStageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStageInput | GroupCreateOrConnectWithoutStageInput[]
    createMany?: GroupCreateManyStageInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput> | FixtureCreateWithoutStageInput[] | FixtureUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutStageInput | FixtureCreateOrConnectWithoutStageInput[]
    createMany?: FixtureCreateManyStageInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type TournamentUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<TournamentCreateWithoutStagesInput, TournamentUncheckedCreateWithoutStagesInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutStagesInput
    upsert?: TournamentUpsertWithoutStagesInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutStagesInput, TournamentUpdateWithoutStagesInput>, TournamentUncheckedUpdateWithoutStagesInput>
  }

  export type GroupUpdateManyWithoutStageNestedInput = {
    create?: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput> | GroupCreateWithoutStageInput[] | GroupUncheckedCreateWithoutStageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStageInput | GroupCreateOrConnectWithoutStageInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutStageInput | GroupUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: GroupCreateManyStageInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutStageInput | GroupUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutStageInput | GroupUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type FixtureUpdateManyWithoutStageNestedInput = {
    create?: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput> | FixtureCreateWithoutStageInput[] | FixtureUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutStageInput | FixtureCreateOrConnectWithoutStageInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutStageInput | FixtureUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: FixtureCreateManyStageInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutStageInput | FixtureUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutStageInput | FixtureUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput> | GroupCreateWithoutStageInput[] | GroupUncheckedCreateWithoutStageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutStageInput | GroupCreateOrConnectWithoutStageInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutStageInput | GroupUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: GroupCreateManyStageInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutStageInput | GroupUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutStageInput | GroupUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput> | FixtureCreateWithoutStageInput[] | FixtureUncheckedCreateWithoutStageInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutStageInput | FixtureCreateOrConnectWithoutStageInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutStageInput | FixtureUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: FixtureCreateManyStageInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutStageInput | FixtureUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutStageInput | FixtureUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type StageCreateNestedOneWithoutGroupsInput = {
    create?: XOR<StageCreateWithoutGroupsInput, StageUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StageCreateOrConnectWithoutGroupsInput
    connect?: StageWhereUniqueInput
  }

  export type GroupTeamCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput> | GroupTeamCreateWithoutGroupInput[] | GroupTeamUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTeamCreateOrConnectWithoutGroupInput | GroupTeamCreateOrConnectWithoutGroupInput[]
    createMany?: GroupTeamCreateManyGroupInputEnvelope
    connect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
  }

  export type FixtureCreateNestedManyWithoutGroupInput = {
    create?: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput> | FixtureCreateWithoutGroupInput[] | FixtureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutGroupInput | FixtureCreateOrConnectWithoutGroupInput[]
    createMany?: FixtureCreateManyGroupInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type GroupStatsCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput> | GroupStatsCreateWithoutGroupInput[] | GroupStatsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupStatsCreateOrConnectWithoutGroupInput | GroupStatsCreateOrConnectWithoutGroupInput[]
    createMany?: GroupStatsCreateManyGroupInputEnvelope
    connect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
  }

  export type GroupTeamUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput> | GroupTeamCreateWithoutGroupInput[] | GroupTeamUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTeamCreateOrConnectWithoutGroupInput | GroupTeamCreateOrConnectWithoutGroupInput[]
    createMany?: GroupTeamCreateManyGroupInputEnvelope
    connect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput> | FixtureCreateWithoutGroupInput[] | FixtureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutGroupInput | FixtureCreateOrConnectWithoutGroupInput[]
    createMany?: FixtureCreateManyGroupInputEnvelope
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
  }

  export type GroupStatsUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput> | GroupStatsCreateWithoutGroupInput[] | GroupStatsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupStatsCreateOrConnectWithoutGroupInput | GroupStatsCreateOrConnectWithoutGroupInput[]
    createMany?: GroupStatsCreateManyGroupInputEnvelope
    connect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
  }

  export type StageUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<StageCreateWithoutGroupsInput, StageUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: StageCreateOrConnectWithoutGroupsInput
    upsert?: StageUpsertWithoutGroupsInput
    connect?: StageWhereUniqueInput
    update?: XOR<XOR<StageUpdateToOneWithWhereWithoutGroupsInput, StageUpdateWithoutGroupsInput>, StageUncheckedUpdateWithoutGroupsInput>
  }

  export type GroupTeamUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput> | GroupTeamCreateWithoutGroupInput[] | GroupTeamUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTeamCreateOrConnectWithoutGroupInput | GroupTeamCreateOrConnectWithoutGroupInput[]
    upsert?: GroupTeamUpsertWithWhereUniqueWithoutGroupInput | GroupTeamUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupTeamCreateManyGroupInputEnvelope
    set?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    disconnect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    delete?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    connect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    update?: GroupTeamUpdateWithWhereUniqueWithoutGroupInput | GroupTeamUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupTeamUpdateManyWithWhereWithoutGroupInput | GroupTeamUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupTeamScalarWhereInput | GroupTeamScalarWhereInput[]
  }

  export type FixtureUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput> | FixtureCreateWithoutGroupInput[] | FixtureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutGroupInput | FixtureCreateOrConnectWithoutGroupInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutGroupInput | FixtureUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FixtureCreateManyGroupInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutGroupInput | FixtureUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutGroupInput | FixtureUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type GroupStatsUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput> | GroupStatsCreateWithoutGroupInput[] | GroupStatsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupStatsCreateOrConnectWithoutGroupInput | GroupStatsCreateOrConnectWithoutGroupInput[]
    upsert?: GroupStatsUpsertWithWhereUniqueWithoutGroupInput | GroupStatsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupStatsCreateManyGroupInputEnvelope
    set?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    disconnect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    delete?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    connect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    update?: GroupStatsUpdateWithWhereUniqueWithoutGroupInput | GroupStatsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupStatsUpdateManyWithWhereWithoutGroupInput | GroupStatsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupStatsScalarWhereInput | GroupStatsScalarWhereInput[]
  }

  export type GroupTeamUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput> | GroupTeamCreateWithoutGroupInput[] | GroupTeamUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupTeamCreateOrConnectWithoutGroupInput | GroupTeamCreateOrConnectWithoutGroupInput[]
    upsert?: GroupTeamUpsertWithWhereUniqueWithoutGroupInput | GroupTeamUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupTeamCreateManyGroupInputEnvelope
    set?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    disconnect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    delete?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    connect?: GroupTeamWhereUniqueInput | GroupTeamWhereUniqueInput[]
    update?: GroupTeamUpdateWithWhereUniqueWithoutGroupInput | GroupTeamUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupTeamUpdateManyWithWhereWithoutGroupInput | GroupTeamUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupTeamScalarWhereInput | GroupTeamScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput> | FixtureCreateWithoutGroupInput[] | FixtureUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: FixtureCreateOrConnectWithoutGroupInput | FixtureCreateOrConnectWithoutGroupInput[]
    upsert?: FixtureUpsertWithWhereUniqueWithoutGroupInput | FixtureUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: FixtureCreateManyGroupInputEnvelope
    set?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    disconnect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    delete?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    connect?: FixtureWhereUniqueInput | FixtureWhereUniqueInput[]
    update?: FixtureUpdateWithWhereUniqueWithoutGroupInput | FixtureUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: FixtureUpdateManyWithWhereWithoutGroupInput | FixtureUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
  }

  export type GroupStatsUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput> | GroupStatsCreateWithoutGroupInput[] | GroupStatsUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupStatsCreateOrConnectWithoutGroupInput | GroupStatsCreateOrConnectWithoutGroupInput[]
    upsert?: GroupStatsUpsertWithWhereUniqueWithoutGroupInput | GroupStatsUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupStatsCreateManyGroupInputEnvelope
    set?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    disconnect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    delete?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    connect?: GroupStatsWhereUniqueInput | GroupStatsWhereUniqueInput[]
    update?: GroupStatsUpdateWithWhereUniqueWithoutGroupInput | GroupStatsUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupStatsUpdateManyWithWhereWithoutGroupInput | GroupStatsUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupStatsScalarWhereInput | GroupStatsScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutTeamsInput = {
    create?: XOR<GroupCreateWithoutTeamsInput, GroupUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeamsInput
    connect?: GroupWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<GroupCreateWithoutTeamsInput, GroupUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutTeamsInput
    upsert?: GroupUpsertWithoutTeamsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutTeamsInput, GroupUpdateWithoutTeamsInput>, GroupUncheckedUpdateWithoutTeamsInput>
  }

  export type GroupCreateNestedOneWithoutStatsInput = {
    create?: XOR<GroupCreateWithoutStatsInput, GroupUncheckedCreateWithoutStatsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStatsInput
    connect?: GroupWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<GroupCreateWithoutStatsInput, GroupUncheckedCreateWithoutStatsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStatsInput
    upsert?: GroupUpsertWithoutStatsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStatsInput, GroupUpdateWithoutStatsInput>, GroupUncheckedUpdateWithoutStatsInput>
  }

  export type StageCreateNestedOneWithoutFixturesInput = {
    create?: XOR<StageCreateWithoutFixturesInput, StageUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: StageCreateOrConnectWithoutFixturesInput
    connect?: StageWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutFixturesInput = {
    create?: XOR<GroupCreateWithoutFixturesInput, GroupUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutFixturesInput
    connect?: GroupWhereUniqueInput
  }

  export type StageUpdateOneWithoutFixturesNestedInput = {
    create?: XOR<StageCreateWithoutFixturesInput, StageUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: StageCreateOrConnectWithoutFixturesInput
    upsert?: StageUpsertWithoutFixturesInput
    disconnect?: StageWhereInput | boolean
    delete?: StageWhereInput | boolean
    connect?: StageWhereUniqueInput
    update?: XOR<XOR<StageUpdateToOneWithWhereWithoutFixturesInput, StageUpdateWithoutFixturesInput>, StageUncheckedUpdateWithoutFixturesInput>
  }

  export type GroupUpdateOneWithoutFixturesNestedInput = {
    create?: XOR<GroupCreateWithoutFixturesInput, GroupUncheckedCreateWithoutFixturesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutFixturesInput
    upsert?: GroupUpsertWithoutFixturesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutFixturesInput, GroupUpdateWithoutFixturesInput>, GroupUncheckedUpdateWithoutFixturesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumTournamentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusFilter<$PrismaModel> | $Enums.TournamentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TournamentStatus | EnumTournamentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TournamentStatus[] | ListEnumTournamentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTournamentStatusWithAggregatesFilter<$PrismaModel> | $Enums.TournamentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTournamentStatusFilter<$PrismaModel>
    _max?: NestedEnumTournamentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TournamentConfigCreateWithoutTournamentInput = {
    id?: string
    format: string
    totalTeams: number
  }

  export type TournamentConfigUncheckedCreateWithoutTournamentInput = {
    id?: string
    format: string
    totalTeams: number
  }

  export type TournamentConfigCreateOrConnectWithoutTournamentInput = {
    where: TournamentConfigWhereUniqueInput
    create: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
  }

  export type StageCreateWithoutTournamentInput = {
    id?: string
    name: string
    type: string
    order: number
    groups?: GroupCreateNestedManyWithoutStageInput
    fixtures?: FixtureCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateWithoutTournamentInput = {
    id?: string
    name: string
    type: string
    order: number
    groups?: GroupUncheckedCreateNestedManyWithoutStageInput
    fixtures?: FixtureUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageCreateOrConnectWithoutTournamentInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput>
  }

  export type StageCreateManyTournamentInputEnvelope = {
    data: StageCreateManyTournamentInput | StageCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TournamentConfigUpsertWithoutTournamentInput = {
    update: XOR<TournamentConfigUpdateWithoutTournamentInput, TournamentConfigUncheckedUpdateWithoutTournamentInput>
    create: XOR<TournamentConfigCreateWithoutTournamentInput, TournamentConfigUncheckedCreateWithoutTournamentInput>
    where?: TournamentConfigWhereInput
  }

  export type TournamentConfigUpdateToOneWithWhereWithoutTournamentInput = {
    where?: TournamentConfigWhereInput
    data: XOR<TournamentConfigUpdateWithoutTournamentInput, TournamentConfigUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentConfigUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
  }

  export type TournamentConfigUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    format?: StringFieldUpdateOperationsInput | string
    totalTeams?: IntFieldUpdateOperationsInput | number
  }

  export type StageUpsertWithWhereUniqueWithoutTournamentInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutTournamentInput, StageUncheckedUpdateWithoutTournamentInput>
    create: XOR<StageCreateWithoutTournamentInput, StageUncheckedCreateWithoutTournamentInput>
  }

  export type StageUpdateWithWhereUniqueWithoutTournamentInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutTournamentInput, StageUncheckedUpdateWithoutTournamentInput>
  }

  export type StageUpdateManyWithWhereWithoutTournamentInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutTournamentInput>
  }

  export type StageScalarWhereInput = {
    AND?: StageScalarWhereInput | StageScalarWhereInput[]
    OR?: StageScalarWhereInput[]
    NOT?: StageScalarWhereInput | StageScalarWhereInput[]
    id?: StringFilter<"Stage"> | string
    name?: StringFilter<"Stage"> | string
    type?: StringFilter<"Stage"> | string
    order?: IntFilter<"Stage"> | number
    tournamentId?: StringFilter<"Stage"> | string
  }

  export type TournamentCreateWithoutConfigInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutConfigInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutConfigInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutConfigInput, TournamentUncheckedCreateWithoutConfigInput>
  }

  export type TournamentUpsertWithoutConfigInput = {
    update: XOR<TournamentUpdateWithoutConfigInput, TournamentUncheckedUpdateWithoutConfigInput>
    create: XOR<TournamentCreateWithoutConfigInput, TournamentUncheckedCreateWithoutConfigInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutConfigInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutConfigInput, TournamentUncheckedUpdateWithoutConfigInput>
  }

  export type TournamentUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentCreateWithoutStagesInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: TournamentConfigCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutStagesInput = {
    id?: string
    name: string
    seasonId: string
    status?: $Enums.TournamentStatus
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    config?: TournamentConfigUncheckedCreateNestedOneWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutStagesInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutStagesInput, TournamentUncheckedCreateWithoutStagesInput>
  }

  export type GroupCreateWithoutStageInput = {
    id?: string
    name: string
    teams?: GroupTeamCreateNestedManyWithoutGroupInput
    fixtures?: FixtureCreateNestedManyWithoutGroupInput
    stats?: GroupStatsCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStageInput = {
    id?: string
    name: string
    teams?: GroupTeamUncheckedCreateNestedManyWithoutGroupInput
    fixtures?: FixtureUncheckedCreateNestedManyWithoutGroupInput
    stats?: GroupStatsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStageInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput>
  }

  export type GroupCreateManyStageInputEnvelope = {
    data: GroupCreateManyStageInput | GroupCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutStageInput = {
    id?: string
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
    group?: GroupCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutStageInput = {
    id?: string
    groupId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type FixtureCreateOrConnectWithoutStageInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput>
  }

  export type FixtureCreateManyStageInputEnvelope = {
    data: FixtureCreateManyStageInput | FixtureCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutStagesInput = {
    update: XOR<TournamentUpdateWithoutStagesInput, TournamentUncheckedUpdateWithoutStagesInput>
    create: XOR<TournamentCreateWithoutStagesInput, TournamentUncheckedCreateWithoutStagesInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutStagesInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutStagesInput, TournamentUncheckedUpdateWithoutStagesInput>
  }

  export type TournamentUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TournamentConfigUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seasonId?: StringFieldUpdateOperationsInput | string
    status?: EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    config?: TournamentConfigUncheckedUpdateOneWithoutTournamentNestedInput
  }

  export type GroupUpsertWithWhereUniqueWithoutStageInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutStageInput, GroupUncheckedUpdateWithoutStageInput>
    create: XOR<GroupCreateWithoutStageInput, GroupUncheckedCreateWithoutStageInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutStageInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutStageInput, GroupUncheckedUpdateWithoutStageInput>
  }

  export type GroupUpdateManyWithWhereWithoutStageInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutStageInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    stageId?: StringFilter<"Group"> | string
  }

  export type FixtureUpsertWithWhereUniqueWithoutStageInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutStageInput, FixtureUncheckedUpdateWithoutStageInput>
    create: XOR<FixtureCreateWithoutStageInput, FixtureUncheckedCreateWithoutStageInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutStageInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutStageInput, FixtureUncheckedUpdateWithoutStageInput>
  }

  export type FixtureUpdateManyWithWhereWithoutStageInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutStageInput>
  }

  export type FixtureScalarWhereInput = {
    AND?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    OR?: FixtureScalarWhereInput[]
    NOT?: FixtureScalarWhereInput | FixtureScalarWhereInput[]
    id?: StringFilter<"Fixture"> | string
    stageId?: StringNullableFilter<"Fixture"> | string | null
    groupId?: StringNullableFilter<"Fixture"> | string | null
    homeTeamId?: StringFilter<"Fixture"> | string
    awayTeamId?: StringFilter<"Fixture"> | string
    round?: IntFilter<"Fixture"> | number
    matchNo?: IntFilter<"Fixture"> | number
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
  }

  export type StageCreateWithoutGroupsInput = {
    id?: string
    name: string
    type: string
    order: number
    tournament: TournamentCreateNestedOneWithoutStagesInput
    fixtures?: FixtureCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    type: string
    order: number
    tournamentId: string
    fixtures?: FixtureUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageCreateOrConnectWithoutGroupsInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutGroupsInput, StageUncheckedCreateWithoutGroupsInput>
  }

  export type GroupTeamCreateWithoutGroupInput = {
    id?: string
    teamId: string
  }

  export type GroupTeamUncheckedCreateWithoutGroupInput = {
    id?: string
    teamId: string
  }

  export type GroupTeamCreateOrConnectWithoutGroupInput = {
    where: GroupTeamWhereUniqueInput
    create: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput>
  }

  export type GroupTeamCreateManyGroupInputEnvelope = {
    data: GroupTeamCreateManyGroupInput | GroupTeamCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutGroupInput = {
    id?: string
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
    stage?: StageCreateNestedOneWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutGroupInput = {
    id?: string
    stageId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type FixtureCreateOrConnectWithoutGroupInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput>
  }

  export type FixtureCreateManyGroupInputEnvelope = {
    data: FixtureCreateManyGroupInput | FixtureCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupStatsCreateWithoutGroupInput = {
    id?: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
  }

  export type GroupStatsUncheckedCreateWithoutGroupInput = {
    id?: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
  }

  export type GroupStatsCreateOrConnectWithoutGroupInput = {
    where: GroupStatsWhereUniqueInput
    create: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput>
  }

  export type GroupStatsCreateManyGroupInputEnvelope = {
    data: GroupStatsCreateManyGroupInput | GroupStatsCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type StageUpsertWithoutGroupsInput = {
    update: XOR<StageUpdateWithoutGroupsInput, StageUncheckedUpdateWithoutGroupsInput>
    create: XOR<StageCreateWithoutGroupsInput, StageUncheckedCreateWithoutGroupsInput>
    where?: StageWhereInput
  }

  export type StageUpdateToOneWithWhereWithoutGroupsInput = {
    where?: StageWhereInput
    data: XOR<StageUpdateWithoutGroupsInput, StageUncheckedUpdateWithoutGroupsInput>
  }

  export type StageUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournament?: TournamentUpdateOneRequiredWithoutStagesNestedInput
    fixtures?: FixtureUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournamentId?: StringFieldUpdateOperationsInput | string
    fixtures?: FixtureUncheckedUpdateManyWithoutStageNestedInput
  }

  export type GroupTeamUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupTeamWhereUniqueInput
    update: XOR<GroupTeamUpdateWithoutGroupInput, GroupTeamUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupTeamCreateWithoutGroupInput, GroupTeamUncheckedCreateWithoutGroupInput>
  }

  export type GroupTeamUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupTeamWhereUniqueInput
    data: XOR<GroupTeamUpdateWithoutGroupInput, GroupTeamUncheckedUpdateWithoutGroupInput>
  }

  export type GroupTeamUpdateManyWithWhereWithoutGroupInput = {
    where: GroupTeamScalarWhereInput
    data: XOR<GroupTeamUpdateManyMutationInput, GroupTeamUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupTeamScalarWhereInput = {
    AND?: GroupTeamScalarWhereInput | GroupTeamScalarWhereInput[]
    OR?: GroupTeamScalarWhereInput[]
    NOT?: GroupTeamScalarWhereInput | GroupTeamScalarWhereInput[]
    id?: StringFilter<"GroupTeam"> | string
    groupId?: StringFilter<"GroupTeam"> | string
    teamId?: StringFilter<"GroupTeam"> | string
  }

  export type FixtureUpsertWithWhereUniqueWithoutGroupInput = {
    where: FixtureWhereUniqueInput
    update: XOR<FixtureUpdateWithoutGroupInput, FixtureUncheckedUpdateWithoutGroupInput>
    create: XOR<FixtureCreateWithoutGroupInput, FixtureUncheckedCreateWithoutGroupInput>
  }

  export type FixtureUpdateWithWhereUniqueWithoutGroupInput = {
    where: FixtureWhereUniqueInput
    data: XOR<FixtureUpdateWithoutGroupInput, FixtureUncheckedUpdateWithoutGroupInput>
  }

  export type FixtureUpdateManyWithWhereWithoutGroupInput = {
    where: FixtureScalarWhereInput
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupStatsUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupStatsWhereUniqueInput
    update: XOR<GroupStatsUpdateWithoutGroupInput, GroupStatsUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupStatsCreateWithoutGroupInput, GroupStatsUncheckedCreateWithoutGroupInput>
  }

  export type GroupStatsUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupStatsWhereUniqueInput
    data: XOR<GroupStatsUpdateWithoutGroupInput, GroupStatsUncheckedUpdateWithoutGroupInput>
  }

  export type GroupStatsUpdateManyWithWhereWithoutGroupInput = {
    where: GroupStatsScalarWhereInput
    data: XOR<GroupStatsUpdateManyMutationInput, GroupStatsUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupStatsScalarWhereInput = {
    AND?: GroupStatsScalarWhereInput | GroupStatsScalarWhereInput[]
    OR?: GroupStatsScalarWhereInput[]
    NOT?: GroupStatsScalarWhereInput | GroupStatsScalarWhereInput[]
    id?: StringFilter<"GroupStats"> | string
    groupId?: StringFilter<"GroupStats"> | string
    teamId?: StringFilter<"GroupStats"> | string
    matchesPlayed?: IntFilter<"GroupStats"> | number
    wins?: IntFilter<"GroupStats"> | number
    losses?: IntFilter<"GroupStats"> | number
    points?: IntFilter<"GroupStats"> | number
    runsScored?: IntFilter<"GroupStats"> | number
    runsConceded?: IntFilter<"GroupStats"> | number
    oversFaced?: FloatFilter<"GroupStats"> | number
    oversBowled?: FloatFilter<"GroupStats"> | number
    netRunRate?: FloatFilter<"GroupStats"> | number
  }

  export type GroupCreateWithoutTeamsInput = {
    id?: string
    name: string
    stage: StageCreateNestedOneWithoutGroupsInput
    fixtures?: FixtureCreateNestedManyWithoutGroupInput
    stats?: GroupStatsCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    stageId: string
    fixtures?: FixtureUncheckedCreateNestedManyWithoutGroupInput
    stats?: GroupStatsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutTeamsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutTeamsInput, GroupUncheckedCreateWithoutTeamsInput>
  }

  export type GroupUpsertWithoutTeamsInput = {
    update: XOR<GroupUpdateWithoutTeamsInput, GroupUncheckedUpdateWithoutTeamsInput>
    create: XOR<GroupCreateWithoutTeamsInput, GroupUncheckedCreateWithoutTeamsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutTeamsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutTeamsInput, GroupUncheckedUpdateWithoutTeamsInput>
  }

  export type GroupUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: StageUpdateOneRequiredWithoutGroupsNestedInput
    fixtures?: FixtureUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    fixtures?: FixtureUncheckedUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateWithoutStatsInput = {
    id?: string
    name: string
    stage: StageCreateNestedOneWithoutGroupsInput
    teams?: GroupTeamCreateNestedManyWithoutGroupInput
    fixtures?: FixtureCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutStatsInput = {
    id?: string
    name: string
    stageId: string
    teams?: GroupTeamUncheckedCreateNestedManyWithoutGroupInput
    fixtures?: FixtureUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutStatsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStatsInput, GroupUncheckedCreateWithoutStatsInput>
  }

  export type GroupUpsertWithoutStatsInput = {
    update: XOR<GroupUpdateWithoutStatsInput, GroupUncheckedUpdateWithoutStatsInput>
    create: XOR<GroupCreateWithoutStatsInput, GroupUncheckedCreateWithoutStatsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStatsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStatsInput, GroupUncheckedUpdateWithoutStatsInput>
  }

  export type GroupUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: StageUpdateOneRequiredWithoutGroupsNestedInput
    teams?: GroupTeamUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    teams?: GroupTeamUncheckedUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StageCreateWithoutFixturesInput = {
    id?: string
    name: string
    type: string
    order: number
    tournament: TournamentCreateNestedOneWithoutStagesInput
    groups?: GroupCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateWithoutFixturesInput = {
    id?: string
    name: string
    type: string
    order: number
    tournamentId: string
    groups?: GroupUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageCreateOrConnectWithoutFixturesInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutFixturesInput, StageUncheckedCreateWithoutFixturesInput>
  }

  export type GroupCreateWithoutFixturesInput = {
    id?: string
    name: string
    stage: StageCreateNestedOneWithoutGroupsInput
    teams?: GroupTeamCreateNestedManyWithoutGroupInput
    stats?: GroupStatsCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutFixturesInput = {
    id?: string
    name: string
    stageId: string
    teams?: GroupTeamUncheckedCreateNestedManyWithoutGroupInput
    stats?: GroupStatsUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutFixturesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutFixturesInput, GroupUncheckedCreateWithoutFixturesInput>
  }

  export type StageUpsertWithoutFixturesInput = {
    update: XOR<StageUpdateWithoutFixturesInput, StageUncheckedUpdateWithoutFixturesInput>
    create: XOR<StageCreateWithoutFixturesInput, StageUncheckedCreateWithoutFixturesInput>
    where?: StageWhereInput
  }

  export type StageUpdateToOneWithWhereWithoutFixturesInput = {
    where?: StageWhereInput
    data: XOR<StageUpdateWithoutFixturesInput, StageUncheckedUpdateWithoutFixturesInput>
  }

  export type StageUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournament?: TournamentUpdateOneRequiredWithoutStagesNestedInput
    groups?: GroupUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    tournamentId?: StringFieldUpdateOperationsInput | string
    groups?: GroupUncheckedUpdateManyWithoutStageNestedInput
  }

  export type GroupUpsertWithoutFixturesInput = {
    update: XOR<GroupUpdateWithoutFixturesInput, GroupUncheckedUpdateWithoutFixturesInput>
    create: XOR<GroupCreateWithoutFixturesInput, GroupUncheckedCreateWithoutFixturesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutFixturesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutFixturesInput, GroupUncheckedUpdateWithoutFixturesInput>
  }

  export type GroupUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stage?: StageUpdateOneRequiredWithoutGroupsNestedInput
    teams?: GroupTeamUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    teams?: GroupTeamUncheckedUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type StageCreateManyTournamentInput = {
    id?: string
    name: string
    type: string
    order: number
  }

  export type StageUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    groups?: GroupUpdateManyWithoutStageNestedInput
    fixtures?: FixtureUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    groups?: GroupUncheckedUpdateManyWithoutStageNestedInput
    fixtures?: FixtureUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateManyStageInput = {
    id?: string
    name: string
  }

  export type FixtureCreateManyStageInput = {
    id?: string
    groupId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type GroupUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: GroupTeamUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: GroupTeamUncheckedUpdateManyWithoutGroupNestedInput
    fixtures?: FixtureUncheckedUpdateManyWithoutGroupNestedInput
    stats?: GroupStatsUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FixtureUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupTeamCreateManyGroupInput = {
    id?: string
    teamId: string
  }

  export type FixtureCreateManyGroupInput = {
    id?: string
    stageId?: string | null
    homeTeamId: string
    awayTeamId: string
    round: number
    matchNo: number
    createdAt?: Date | string
  }

  export type GroupStatsCreateManyGroupInput = {
    id?: string
    teamId: string
    matchesPlayed?: number
    wins?: number
    losses?: number
    points?: number
    runsScored?: number
    runsConceded?: number
    oversFaced?: number
    oversBowled?: number
    netRunRate?: number
  }

  export type GroupTeamUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupTeamUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupTeamUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type FixtureUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stage?: StageUpdateOneWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageId?: NullableStringFieldUpdateOperationsInput | string | null
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    round?: IntFieldUpdateOperationsInput | number
    matchNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupStatsUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupStatsUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }

  export type GroupStatsUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    matchesPlayed?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    losses?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    runsScored?: IntFieldUpdateOperationsInput | number
    runsConceded?: IntFieldUpdateOperationsInput | number
    oversFaced?: FloatFieldUpdateOperationsInput | number
    oversBowled?: FloatFieldUpdateOperationsInput | number
    netRunRate?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}