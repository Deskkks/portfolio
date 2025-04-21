
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model bueiros
 * 
 */
export type bueiros = $Result.DefaultSelection<Prisma.$bueirosPayload>
/**
 * Model classe
 * 
 */
export type classe = $Result.DefaultSelection<Prisma.$classePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const situacao: {
  vazio: 'vazio',
  medio: 'medio',
  cheio: 'cheio'
};

export type situacao = (typeof situacao)[keyof typeof situacao]


export const classes: {
  podre: 'podre',
  pessimo: 'pessimo',
  ruim: 'ruim',
  mediano: 'mediano',
  bom: 'bom',
  incrivel: 'incrivel',
  perfeito: 'perfeito'
};

export type classes = (typeof classes)[keyof typeof classes]

}

export type situacao = $Enums.situacao

export const situacao: typeof $Enums.situacao

export type classes = $Enums.classes

export const classes: typeof $Enums.classes

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bueiros
 * const bueiros = await prisma.bueiros.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Bueiros
   * const bueiros = await prisma.bueiros.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bueiros`: Exposes CRUD operations for the **bueiros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bueiros
    * const bueiros = await prisma.bueiros.findMany()
    * ```
    */
  get bueiros(): Prisma.bueirosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classe`: Exposes CRUD operations for the **classe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.classe.findMany()
    * ```
    */
  get classe(): Prisma.classeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    bueiros: 'bueiros',
    classe: 'classe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bueiros" | "classe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      bueiros: {
        payload: Prisma.$bueirosPayload<ExtArgs>
        fields: Prisma.bueirosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bueirosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bueirosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          findFirst: {
            args: Prisma.bueirosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bueirosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          findMany: {
            args: Prisma.bueirosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>[]
          }
          create: {
            args: Prisma.bueirosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          createMany: {
            args: Prisma.bueirosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bueirosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          update: {
            args: Prisma.bueirosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          deleteMany: {
            args: Prisma.bueirosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bueirosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bueirosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bueirosPayload>
          }
          aggregate: {
            args: Prisma.BueirosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBueiros>
          }
          groupBy: {
            args: Prisma.bueirosGroupByArgs<ExtArgs>
            result: $Utils.Optional<BueirosGroupByOutputType>[]
          }
          count: {
            args: Prisma.bueirosCountArgs<ExtArgs>
            result: $Utils.Optional<BueirosCountAggregateOutputType> | number
          }
        }
      }
      classe: {
        payload: Prisma.$classePayload<ExtArgs>
        fields: Prisma.classeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          findFirst: {
            args: Prisma.classeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          findMany: {
            args: Prisma.classeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>[]
          }
          create: {
            args: Prisma.classeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          createMany: {
            args: Prisma.classeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.classeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          update: {
            args: Prisma.classeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          deleteMany: {
            args: Prisma.classeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.classeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classePayload>
          }
          aggregate: {
            args: Prisma.ClasseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClasse>
          }
          groupBy: {
            args: Prisma.classeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClasseGroupByOutputType>[]
          }
          count: {
            args: Prisma.classeCountArgs<ExtArgs>
            result: $Utils.Optional<ClasseCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    bueiros?: bueirosOmit
    classe?: classeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model bueiros
   */

  export type AggregateBueiros = {
    _count: BueirosCountAggregateOutputType | null
    _avg: BueirosAvgAggregateOutputType | null
    _sum: BueirosSumAggregateOutputType | null
    _min: BueirosMinAggregateOutputType | null
    _max: BueirosMaxAggregateOutputType | null
  }

  export type BueirosAvgAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type BueirosSumAggregateOutputType = {
    id: number | null
    numero: number | null
  }

  export type BueirosMinAggregateOutputType = {
    id: number | null
    logradouro: string | null
    numero: number | null
    cidade: string | null
    UF: string | null
    cep: string | null
    situacao: $Enums.situacao | null
  }

  export type BueirosMaxAggregateOutputType = {
    id: number | null
    logradouro: string | null
    numero: number | null
    cidade: string | null
    UF: string | null
    cep: string | null
    situacao: $Enums.situacao | null
  }

  export type BueirosCountAggregateOutputType = {
    id: number
    logradouro: number
    numero: number
    cidade: number
    UF: number
    cep: number
    situacao: number
    _all: number
  }


  export type BueirosAvgAggregateInputType = {
    id?: true
    numero?: true
  }

  export type BueirosSumAggregateInputType = {
    id?: true
    numero?: true
  }

  export type BueirosMinAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    cidade?: true
    UF?: true
    cep?: true
    situacao?: true
  }

  export type BueirosMaxAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    cidade?: true
    UF?: true
    cep?: true
    situacao?: true
  }

  export type BueirosCountAggregateInputType = {
    id?: true
    logradouro?: true
    numero?: true
    cidade?: true
    UF?: true
    cep?: true
    situacao?: true
    _all?: true
  }

  export type BueirosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bueiros to aggregate.
     */
    where?: bueirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bueiros to fetch.
     */
    orderBy?: bueirosOrderByWithRelationInput | bueirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bueirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bueiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bueiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bueiros
    **/
    _count?: true | BueirosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BueirosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BueirosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BueirosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BueirosMaxAggregateInputType
  }

  export type GetBueirosAggregateType<T extends BueirosAggregateArgs> = {
        [P in keyof T & keyof AggregateBueiros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBueiros[P]>
      : GetScalarType<T[P], AggregateBueiros[P]>
  }




  export type bueirosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bueirosWhereInput
    orderBy?: bueirosOrderByWithAggregationInput | bueirosOrderByWithAggregationInput[]
    by: BueirosScalarFieldEnum[] | BueirosScalarFieldEnum
    having?: bueirosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BueirosCountAggregateInputType | true
    _avg?: BueirosAvgAggregateInputType
    _sum?: BueirosSumAggregateInputType
    _min?: BueirosMinAggregateInputType
    _max?: BueirosMaxAggregateInputType
  }

  export type BueirosGroupByOutputType = {
    id: number
    logradouro: string
    numero: number
    cidade: string
    UF: string
    cep: string
    situacao: $Enums.situacao
    _count: BueirosCountAggregateOutputType | null
    _avg: BueirosAvgAggregateOutputType | null
    _sum: BueirosSumAggregateOutputType | null
    _min: BueirosMinAggregateOutputType | null
    _max: BueirosMaxAggregateOutputType | null
  }

  type GetBueirosGroupByPayload<T extends bueirosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BueirosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BueirosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BueirosGroupByOutputType[P]>
            : GetScalarType<T[P], BueirosGroupByOutputType[P]>
        }
      >
    >


  export type bueirosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    cidade?: boolean
    UF?: boolean
    cep?: boolean
    situacao?: boolean
  }, ExtArgs["result"]["bueiros"]>



  export type bueirosSelectScalar = {
    id?: boolean
    logradouro?: boolean
    numero?: boolean
    cidade?: boolean
    UF?: boolean
    cep?: boolean
    situacao?: boolean
  }

  export type bueirosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "logradouro" | "numero" | "cidade" | "UF" | "cep" | "situacao", ExtArgs["result"]["bueiros"]>

  export type $bueirosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bueiros"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      logradouro: string
      numero: number
      cidade: string
      UF: string
      cep: string
      situacao: $Enums.situacao
    }, ExtArgs["result"]["bueiros"]>
    composites: {}
  }

  type bueirosGetPayload<S extends boolean | null | undefined | bueirosDefaultArgs> = $Result.GetResult<Prisma.$bueirosPayload, S>

  type bueirosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bueirosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BueirosCountAggregateInputType | true
    }

  export interface bueirosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bueiros'], meta: { name: 'bueiros' } }
    /**
     * Find zero or one Bueiros that matches the filter.
     * @param {bueirosFindUniqueArgs} args - Arguments to find a Bueiros
     * @example
     * // Get one Bueiros
     * const bueiros = await prisma.bueiros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bueirosFindUniqueArgs>(args: SelectSubset<T, bueirosFindUniqueArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bueiros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bueirosFindUniqueOrThrowArgs} args - Arguments to find a Bueiros
     * @example
     * // Get one Bueiros
     * const bueiros = await prisma.bueiros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bueirosFindUniqueOrThrowArgs>(args: SelectSubset<T, bueirosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bueiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosFindFirstArgs} args - Arguments to find a Bueiros
     * @example
     * // Get one Bueiros
     * const bueiros = await prisma.bueiros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bueirosFindFirstArgs>(args?: SelectSubset<T, bueirosFindFirstArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bueiros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosFindFirstOrThrowArgs} args - Arguments to find a Bueiros
     * @example
     * // Get one Bueiros
     * const bueiros = await prisma.bueiros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bueirosFindFirstOrThrowArgs>(args?: SelectSubset<T, bueirosFindFirstOrThrowArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bueiros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bueiros
     * const bueiros = await prisma.bueiros.findMany()
     * 
     * // Get first 10 Bueiros
     * const bueiros = await prisma.bueiros.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bueirosWithIdOnly = await prisma.bueiros.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bueirosFindManyArgs>(args?: SelectSubset<T, bueirosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bueiros.
     * @param {bueirosCreateArgs} args - Arguments to create a Bueiros.
     * @example
     * // Create one Bueiros
     * const Bueiros = await prisma.bueiros.create({
     *   data: {
     *     // ... data to create a Bueiros
     *   }
     * })
     * 
     */
    create<T extends bueirosCreateArgs>(args: SelectSubset<T, bueirosCreateArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bueiros.
     * @param {bueirosCreateManyArgs} args - Arguments to create many Bueiros.
     * @example
     * // Create many Bueiros
     * const bueiros = await prisma.bueiros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bueirosCreateManyArgs>(args?: SelectSubset<T, bueirosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bueiros.
     * @param {bueirosDeleteArgs} args - Arguments to delete one Bueiros.
     * @example
     * // Delete one Bueiros
     * const Bueiros = await prisma.bueiros.delete({
     *   where: {
     *     // ... filter to delete one Bueiros
     *   }
     * })
     * 
     */
    delete<T extends bueirosDeleteArgs>(args: SelectSubset<T, bueirosDeleteArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bueiros.
     * @param {bueirosUpdateArgs} args - Arguments to update one Bueiros.
     * @example
     * // Update one Bueiros
     * const bueiros = await prisma.bueiros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bueirosUpdateArgs>(args: SelectSubset<T, bueirosUpdateArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bueiros.
     * @param {bueirosDeleteManyArgs} args - Arguments to filter Bueiros to delete.
     * @example
     * // Delete a few Bueiros
     * const { count } = await prisma.bueiros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bueirosDeleteManyArgs>(args?: SelectSubset<T, bueirosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bueiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bueiros
     * const bueiros = await prisma.bueiros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bueirosUpdateManyArgs>(args: SelectSubset<T, bueirosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bueiros.
     * @param {bueirosUpsertArgs} args - Arguments to update or create a Bueiros.
     * @example
     * // Update or create a Bueiros
     * const bueiros = await prisma.bueiros.upsert({
     *   create: {
     *     // ... data to create a Bueiros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bueiros we want to update
     *   }
     * })
     */
    upsert<T extends bueirosUpsertArgs>(args: SelectSubset<T, bueirosUpsertArgs<ExtArgs>>): Prisma__bueirosClient<$Result.GetResult<Prisma.$bueirosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bueiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosCountArgs} args - Arguments to filter Bueiros to count.
     * @example
     * // Count the number of Bueiros
     * const count = await prisma.bueiros.count({
     *   where: {
     *     // ... the filter for the Bueiros we want to count
     *   }
     * })
    **/
    count<T extends bueirosCountArgs>(
      args?: Subset<T, bueirosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BueirosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bueiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BueirosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BueirosAggregateArgs>(args: Subset<T, BueirosAggregateArgs>): Prisma.PrismaPromise<GetBueirosAggregateType<T>>

    /**
     * Group by Bueiros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bueirosGroupByArgs} args - Group by arguments.
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
      T extends bueirosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bueirosGroupByArgs['orderBy'] }
        : { orderBy?: bueirosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bueirosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBueirosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bueiros model
   */
  readonly fields: bueirosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bueiros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bueirosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the bueiros model
   */
  interface bueirosFieldRefs {
    readonly id: FieldRef<"bueiros", 'Int'>
    readonly logradouro: FieldRef<"bueiros", 'String'>
    readonly numero: FieldRef<"bueiros", 'Int'>
    readonly cidade: FieldRef<"bueiros", 'String'>
    readonly UF: FieldRef<"bueiros", 'String'>
    readonly cep: FieldRef<"bueiros", 'String'>
    readonly situacao: FieldRef<"bueiros", 'situacao'>
  }
    

  // Custom InputTypes
  /**
   * bueiros findUnique
   */
  export type bueirosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter, which bueiros to fetch.
     */
    where: bueirosWhereUniqueInput
  }

  /**
   * bueiros findUniqueOrThrow
   */
  export type bueirosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter, which bueiros to fetch.
     */
    where: bueirosWhereUniqueInput
  }

  /**
   * bueiros findFirst
   */
  export type bueirosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter, which bueiros to fetch.
     */
    where?: bueirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bueiros to fetch.
     */
    orderBy?: bueirosOrderByWithRelationInput | bueirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bueiros.
     */
    cursor?: bueirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bueiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bueiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bueiros.
     */
    distinct?: BueirosScalarFieldEnum | BueirosScalarFieldEnum[]
  }

  /**
   * bueiros findFirstOrThrow
   */
  export type bueirosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter, which bueiros to fetch.
     */
    where?: bueirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bueiros to fetch.
     */
    orderBy?: bueirosOrderByWithRelationInput | bueirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bueiros.
     */
    cursor?: bueirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bueiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bueiros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bueiros.
     */
    distinct?: BueirosScalarFieldEnum | BueirosScalarFieldEnum[]
  }

  /**
   * bueiros findMany
   */
  export type bueirosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter, which bueiros to fetch.
     */
    where?: bueirosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bueiros to fetch.
     */
    orderBy?: bueirosOrderByWithRelationInput | bueirosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bueiros.
     */
    cursor?: bueirosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bueiros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bueiros.
     */
    skip?: number
    distinct?: BueirosScalarFieldEnum | BueirosScalarFieldEnum[]
  }

  /**
   * bueiros create
   */
  export type bueirosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * The data needed to create a bueiros.
     */
    data: XOR<bueirosCreateInput, bueirosUncheckedCreateInput>
  }

  /**
   * bueiros createMany
   */
  export type bueirosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bueiros.
     */
    data: bueirosCreateManyInput | bueirosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bueiros update
   */
  export type bueirosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * The data needed to update a bueiros.
     */
    data: XOR<bueirosUpdateInput, bueirosUncheckedUpdateInput>
    /**
     * Choose, which bueiros to update.
     */
    where: bueirosWhereUniqueInput
  }

  /**
   * bueiros updateMany
   */
  export type bueirosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bueiros.
     */
    data: XOR<bueirosUpdateManyMutationInput, bueirosUncheckedUpdateManyInput>
    /**
     * Filter which bueiros to update
     */
    where?: bueirosWhereInput
    /**
     * Limit how many bueiros to update.
     */
    limit?: number
  }

  /**
   * bueiros upsert
   */
  export type bueirosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * The filter to search for the bueiros to update in case it exists.
     */
    where: bueirosWhereUniqueInput
    /**
     * In case the bueiros found by the `where` argument doesn't exist, create a new bueiros with this data.
     */
    create: XOR<bueirosCreateInput, bueirosUncheckedCreateInput>
    /**
     * In case the bueiros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bueirosUpdateInput, bueirosUncheckedUpdateInput>
  }

  /**
   * bueiros delete
   */
  export type bueirosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
    /**
     * Filter which bueiros to delete.
     */
    where: bueirosWhereUniqueInput
  }

  /**
   * bueiros deleteMany
   */
  export type bueirosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bueiros to delete
     */
    where?: bueirosWhereInput
    /**
     * Limit how many bueiros to delete.
     */
    limit?: number
  }

  /**
   * bueiros without action
   */
  export type bueirosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bueiros
     */
    select?: bueirosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bueiros
     */
    omit?: bueirosOmit<ExtArgs> | null
  }


  /**
   * Model classe
   */

  export type AggregateClasse = {
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  export type ClasseAvgAggregateOutputType = {
    id: number | null
  }

  export type ClasseSumAggregateOutputType = {
    id: number | null
  }

  export type ClasseMinAggregateOutputType = {
    id: number | null
    classe: $Enums.classes | null
    descricao: string | null
    data: string | null
  }

  export type ClasseMaxAggregateOutputType = {
    id: number | null
    classe: $Enums.classes | null
    descricao: string | null
    data: string | null
  }

  export type ClasseCountAggregateOutputType = {
    id: number
    classe: number
    descricao: number
    data: number
    _all: number
  }


  export type ClasseAvgAggregateInputType = {
    id?: true
  }

  export type ClasseSumAggregateInputType = {
    id?: true
  }

  export type ClasseMinAggregateInputType = {
    id?: true
    classe?: true
    descricao?: true
    data?: true
  }

  export type ClasseMaxAggregateInputType = {
    id?: true
    classe?: true
    descricao?: true
    data?: true
  }

  export type ClasseCountAggregateInputType = {
    id?: true
    classe?: true
    descricao?: true
    data?: true
    _all?: true
  }

  export type ClasseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classe to aggregate.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classes
    **/
    _count?: true | ClasseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClasseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClasseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClasseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClasseMaxAggregateInputType
  }

  export type GetClasseAggregateType<T extends ClasseAggregateArgs> = {
        [P in keyof T & keyof AggregateClasse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClasse[P]>
      : GetScalarType<T[P], AggregateClasse[P]>
  }




  export type classeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classeWhereInput
    orderBy?: classeOrderByWithAggregationInput | classeOrderByWithAggregationInput[]
    by: ClasseScalarFieldEnum[] | ClasseScalarFieldEnum
    having?: classeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClasseCountAggregateInputType | true
    _avg?: ClasseAvgAggregateInputType
    _sum?: ClasseSumAggregateInputType
    _min?: ClasseMinAggregateInputType
    _max?: ClasseMaxAggregateInputType
  }

  export type ClasseGroupByOutputType = {
    id: number
    classe: $Enums.classes
    descricao: string
    data: string
    _count: ClasseCountAggregateOutputType | null
    _avg: ClasseAvgAggregateOutputType | null
    _sum: ClasseSumAggregateOutputType | null
    _min: ClasseMinAggregateOutputType | null
    _max: ClasseMaxAggregateOutputType | null
  }

  type GetClasseGroupByPayload<T extends classeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClasseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClasseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClasseGroupByOutputType[P]>
            : GetScalarType<T[P], ClasseGroupByOutputType[P]>
        }
      >
    >


  export type classeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classe?: boolean
    descricao?: boolean
    data?: boolean
  }, ExtArgs["result"]["classe"]>



  export type classeSelectScalar = {
    id?: boolean
    classe?: boolean
    descricao?: boolean
    data?: boolean
  }

  export type classeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classe" | "descricao" | "data", ExtArgs["result"]["classe"]>

  export type $classePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classe: $Enums.classes
      descricao: string
      data: string
    }, ExtArgs["result"]["classe"]>
    composites: {}
  }

  type classeGetPayload<S extends boolean | null | undefined | classeDefaultArgs> = $Result.GetResult<Prisma.$classePayload, S>

  type classeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClasseCountAggregateInputType | true
    }

  export interface classeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classe'], meta: { name: 'classe' } }
    /**
     * Find zero or one Classe that matches the filter.
     * @param {classeFindUniqueArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classeFindUniqueArgs>(args: SelectSubset<T, classeFindUniqueArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classeFindUniqueOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classeFindUniqueOrThrowArgs>(args: SelectSubset<T, classeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindFirstArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classeFindFirstArgs>(args?: SelectSubset<T, classeFindFirstArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindFirstOrThrowArgs} args - Arguments to find a Classe
     * @example
     * // Get one Classe
     * const classe = await prisma.classe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classeFindFirstOrThrowArgs>(args?: SelectSubset<T, classeFindFirstOrThrowArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classe.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.classe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classeWithIdOnly = await prisma.classe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classeFindManyArgs>(args?: SelectSubset<T, classeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classe.
     * @param {classeCreateArgs} args - Arguments to create a Classe.
     * @example
     * // Create one Classe
     * const Classe = await prisma.classe.create({
     *   data: {
     *     // ... data to create a Classe
     *   }
     * })
     * 
     */
    create<T extends classeCreateArgs>(args: SelectSubset<T, classeCreateArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {classeCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classe = await prisma.classe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classeCreateManyArgs>(args?: SelectSubset<T, classeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Classe.
     * @param {classeDeleteArgs} args - Arguments to delete one Classe.
     * @example
     * // Delete one Classe
     * const Classe = await prisma.classe.delete({
     *   where: {
     *     // ... filter to delete one Classe
     *   }
     * })
     * 
     */
    delete<T extends classeDeleteArgs>(args: SelectSubset<T, classeDeleteArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classe.
     * @param {classeUpdateArgs} args - Arguments to update one Classe.
     * @example
     * // Update one Classe
     * const classe = await prisma.classe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classeUpdateArgs>(args: SelectSubset<T, classeUpdateArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {classeDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classeDeleteManyArgs>(args?: SelectSubset<T, classeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classe = await prisma.classe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classeUpdateManyArgs>(args: SelectSubset<T, classeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Classe.
     * @param {classeUpsertArgs} args - Arguments to update or create a Classe.
     * @example
     * // Update or create a Classe
     * const classe = await prisma.classe.upsert({
     *   create: {
     *     // ... data to create a Classe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classe we want to update
     *   }
     * })
     */
    upsert<T extends classeUpsertArgs>(args: SelectSubset<T, classeUpsertArgs<ExtArgs>>): Prisma__classeClient<$Result.GetResult<Prisma.$classePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classe.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classeCountArgs>(
      args?: Subset<T, classeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClasseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClasseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClasseAggregateArgs>(args: Subset<T, ClasseAggregateArgs>): Prisma.PrismaPromise<GetClasseAggregateType<T>>

    /**
     * Group by Classe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classeGroupByArgs} args - Group by arguments.
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
      T extends classeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classeGroupByArgs['orderBy'] }
        : { orderBy?: classeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, classeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClasseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classe model
   */
  readonly fields: classeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the classe model
   */
  interface classeFieldRefs {
    readonly id: FieldRef<"classe", 'Int'>
    readonly classe: FieldRef<"classe", 'classes'>
    readonly descricao: FieldRef<"classe", 'String'>
    readonly data: FieldRef<"classe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * classe findUnique
   */
  export type classeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe findUniqueOrThrow
   */
  export type classeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe findFirst
   */
  export type classeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe findFirstOrThrow
   */
  export type classeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classe to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classes.
     */
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe findMany
   */
  export type classeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter, which classes to fetch.
     */
    where?: classeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classes to fetch.
     */
    orderBy?: classeOrderByWithRelationInput | classeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classes.
     */
    cursor?: classeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classes.
     */
    skip?: number
    distinct?: ClasseScalarFieldEnum | ClasseScalarFieldEnum[]
  }

  /**
   * classe create
   */
  export type classeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data needed to create a classe.
     */
    data: XOR<classeCreateInput, classeUncheckedCreateInput>
  }

  /**
   * classe createMany
   */
  export type classeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: classeCreateManyInput | classeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * classe update
   */
  export type classeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The data needed to update a classe.
     */
    data: XOR<classeUpdateInput, classeUncheckedUpdateInput>
    /**
     * Choose, which classe to update.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe updateMany
   */
  export type classeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: XOR<classeUpdateManyMutationInput, classeUncheckedUpdateManyInput>
    /**
     * Filter which classes to update
     */
    where?: classeWhereInput
    /**
     * Limit how many classes to update.
     */
    limit?: number
  }

  /**
   * classe upsert
   */
  export type classeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * The filter to search for the classe to update in case it exists.
     */
    where: classeWhereUniqueInput
    /**
     * In case the classe found by the `where` argument doesn't exist, create a new classe with this data.
     */
    create: XOR<classeCreateInput, classeUncheckedCreateInput>
    /**
     * In case the classe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classeUpdateInput, classeUncheckedUpdateInput>
  }

  /**
   * classe delete
   */
  export type classeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
    /**
     * Filter which classe to delete.
     */
    where: classeWhereUniqueInput
  }

  /**
   * classe deleteMany
   */
  export type classeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: classeWhereInput
    /**
     * Limit how many classes to delete.
     */
    limit?: number
  }

  /**
   * classe without action
   */
  export type classeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classe
     */
    select?: classeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classe
     */
    omit?: classeOmit<ExtArgs> | null
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


  export const BueirosScalarFieldEnum: {
    id: 'id',
    logradouro: 'logradouro',
    numero: 'numero',
    cidade: 'cidade',
    UF: 'UF',
    cep: 'cep',
    situacao: 'situacao'
  };

  export type BueirosScalarFieldEnum = (typeof BueirosScalarFieldEnum)[keyof typeof BueirosScalarFieldEnum]


  export const ClasseScalarFieldEnum: {
    id: 'id',
    classe: 'classe',
    descricao: 'descricao',
    data: 'data'
  };

  export type ClasseScalarFieldEnum = (typeof ClasseScalarFieldEnum)[keyof typeof ClasseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const bueirosOrderByRelevanceFieldEnum: {
    logradouro: 'logradouro',
    cidade: 'cidade',
    UF: 'UF',
    cep: 'cep'
  };

  export type bueirosOrderByRelevanceFieldEnum = (typeof bueirosOrderByRelevanceFieldEnum)[keyof typeof bueirosOrderByRelevanceFieldEnum]


  export const classeOrderByRelevanceFieldEnum: {
    descricao: 'descricao',
    data: 'data'
  };

  export type classeOrderByRelevanceFieldEnum = (typeof classeOrderByRelevanceFieldEnum)[keyof typeof classeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'situacao'
   */
  export type EnumsituacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'situacao'>
    


  /**
   * Reference to a field of type 'classes'
   */
  export type EnumclassesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type bueirosWhereInput = {
    AND?: bueirosWhereInput | bueirosWhereInput[]
    OR?: bueirosWhereInput[]
    NOT?: bueirosWhereInput | bueirosWhereInput[]
    id?: IntFilter<"bueiros"> | number
    logradouro?: StringFilter<"bueiros"> | string
    numero?: IntFilter<"bueiros"> | number
    cidade?: StringFilter<"bueiros"> | string
    UF?: StringFilter<"bueiros"> | string
    cep?: StringFilter<"bueiros"> | string
    situacao?: EnumsituacaoFilter<"bueiros"> | $Enums.situacao
  }

  export type bueirosOrderByWithRelationInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    UF?: SortOrder
    cep?: SortOrder
    situacao?: SortOrder
    _relevance?: bueirosOrderByRelevanceInput
  }

  export type bueirosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bueirosWhereInput | bueirosWhereInput[]
    OR?: bueirosWhereInput[]
    NOT?: bueirosWhereInput | bueirosWhereInput[]
    logradouro?: StringFilter<"bueiros"> | string
    numero?: IntFilter<"bueiros"> | number
    cidade?: StringFilter<"bueiros"> | string
    UF?: StringFilter<"bueiros"> | string
    cep?: StringFilter<"bueiros"> | string
    situacao?: EnumsituacaoFilter<"bueiros"> | $Enums.situacao
  }, "id">

  export type bueirosOrderByWithAggregationInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    UF?: SortOrder
    cep?: SortOrder
    situacao?: SortOrder
    _count?: bueirosCountOrderByAggregateInput
    _avg?: bueirosAvgOrderByAggregateInput
    _max?: bueirosMaxOrderByAggregateInput
    _min?: bueirosMinOrderByAggregateInput
    _sum?: bueirosSumOrderByAggregateInput
  }

  export type bueirosScalarWhereWithAggregatesInput = {
    AND?: bueirosScalarWhereWithAggregatesInput | bueirosScalarWhereWithAggregatesInput[]
    OR?: bueirosScalarWhereWithAggregatesInput[]
    NOT?: bueirosScalarWhereWithAggregatesInput | bueirosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bueiros"> | number
    logradouro?: StringWithAggregatesFilter<"bueiros"> | string
    numero?: IntWithAggregatesFilter<"bueiros"> | number
    cidade?: StringWithAggregatesFilter<"bueiros"> | string
    UF?: StringWithAggregatesFilter<"bueiros"> | string
    cep?: StringWithAggregatesFilter<"bueiros"> | string
    situacao?: EnumsituacaoWithAggregatesFilter<"bueiros"> | $Enums.situacao
  }

  export type classeWhereInput = {
    AND?: classeWhereInput | classeWhereInput[]
    OR?: classeWhereInput[]
    NOT?: classeWhereInput | classeWhereInput[]
    id?: IntFilter<"classe"> | number
    classe?: EnumclassesFilter<"classe"> | $Enums.classes
    descricao?: StringFilter<"classe"> | string
    data?: StringFilter<"classe"> | string
  }

  export type classeOrderByWithRelationInput = {
    id?: SortOrder
    classe?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    _relevance?: classeOrderByRelevanceInput
  }

  export type classeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: classeWhereInput | classeWhereInput[]
    OR?: classeWhereInput[]
    NOT?: classeWhereInput | classeWhereInput[]
    classe?: EnumclassesFilter<"classe"> | $Enums.classes
    descricao?: StringFilter<"classe"> | string
    data?: StringFilter<"classe"> | string
  }, "id">

  export type classeOrderByWithAggregationInput = {
    id?: SortOrder
    classe?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
    _count?: classeCountOrderByAggregateInput
    _avg?: classeAvgOrderByAggregateInput
    _max?: classeMaxOrderByAggregateInput
    _min?: classeMinOrderByAggregateInput
    _sum?: classeSumOrderByAggregateInput
  }

  export type classeScalarWhereWithAggregatesInput = {
    AND?: classeScalarWhereWithAggregatesInput | classeScalarWhereWithAggregatesInput[]
    OR?: classeScalarWhereWithAggregatesInput[]
    NOT?: classeScalarWhereWithAggregatesInput | classeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"classe"> | number
    classe?: EnumclassesWithAggregatesFilter<"classe"> | $Enums.classes
    descricao?: StringWithAggregatesFilter<"classe"> | string
    data?: StringWithAggregatesFilter<"classe"> | string
  }

  export type bueirosCreateInput = {
    logradouro: string
    numero: number
    cidade: string
    UF: string
    cep: string
    situacao?: $Enums.situacao
  }

  export type bueirosUncheckedCreateInput = {
    id?: number
    logradouro: string
    numero: number
    cidade: string
    UF: string
    cep: string
    situacao?: $Enums.situacao
  }

  export type bueirosUpdateInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    situacao?: EnumsituacaoFieldUpdateOperationsInput | $Enums.situacao
  }

  export type bueirosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    situacao?: EnumsituacaoFieldUpdateOperationsInput | $Enums.situacao
  }

  export type bueirosCreateManyInput = {
    id?: number
    logradouro: string
    numero: number
    cidade: string
    UF: string
    cep: string
    situacao?: $Enums.situacao
  }

  export type bueirosUpdateManyMutationInput = {
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    situacao?: EnumsituacaoFieldUpdateOperationsInput | $Enums.situacao
  }

  export type bueirosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    cidade?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    situacao?: EnumsituacaoFieldUpdateOperationsInput | $Enums.situacao
  }

  export type classeCreateInput = {
    classe: $Enums.classes
    descricao: string
    data: string
  }

  export type classeUncheckedCreateInput = {
    id?: number
    classe: $Enums.classes
    descricao: string
    data: string
  }

  export type classeUpdateInput = {
    classe?: EnumclassesFieldUpdateOperationsInput | $Enums.classes
    descricao?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type classeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classe?: EnumclassesFieldUpdateOperationsInput | $Enums.classes
    descricao?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type classeCreateManyInput = {
    id?: number
    classe: $Enums.classes
    descricao: string
    data: string
  }

  export type classeUpdateManyMutationInput = {
    classe?: EnumclassesFieldUpdateOperationsInput | $Enums.classes
    descricao?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type classeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classe?: EnumclassesFieldUpdateOperationsInput | $Enums.classes
    descricao?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumsituacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.situacao | EnumsituacaoFieldRefInput<$PrismaModel>
    in?: $Enums.situacao[]
    notIn?: $Enums.situacao[]
    not?: NestedEnumsituacaoFilter<$PrismaModel> | $Enums.situacao
  }

  export type bueirosOrderByRelevanceInput = {
    fields: bueirosOrderByRelevanceFieldEnum | bueirosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bueirosCountOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    UF?: SortOrder
    cep?: SortOrder
    situacao?: SortOrder
  }

  export type bueirosAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type bueirosMaxOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    UF?: SortOrder
    cep?: SortOrder
    situacao?: SortOrder
  }

  export type bueirosMinOrderByAggregateInput = {
    id?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    UF?: SortOrder
    cep?: SortOrder
    situacao?: SortOrder
  }

  export type bueirosSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumsituacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.situacao | EnumsituacaoFieldRefInput<$PrismaModel>
    in?: $Enums.situacao[]
    notIn?: $Enums.situacao[]
    not?: NestedEnumsituacaoWithAggregatesFilter<$PrismaModel> | $Enums.situacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsituacaoFilter<$PrismaModel>
    _max?: NestedEnumsituacaoFilter<$PrismaModel>
  }

  export type EnumclassesFilter<$PrismaModel = never> = {
    equals?: $Enums.classes | EnumclassesFieldRefInput<$PrismaModel>
    in?: $Enums.classes[]
    notIn?: $Enums.classes[]
    not?: NestedEnumclassesFilter<$PrismaModel> | $Enums.classes
  }

  export type classeOrderByRelevanceInput = {
    fields: classeOrderByRelevanceFieldEnum | classeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type classeCountOrderByAggregateInput = {
    id?: SortOrder
    classe?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
  }

  export type classeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type classeMaxOrderByAggregateInput = {
    id?: SortOrder
    classe?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
  }

  export type classeMinOrderByAggregateInput = {
    id?: SortOrder
    classe?: SortOrder
    descricao?: SortOrder
    data?: SortOrder
  }

  export type classeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumclassesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classes | EnumclassesFieldRefInput<$PrismaModel>
    in?: $Enums.classes[]
    notIn?: $Enums.classes[]
    not?: NestedEnumclassesWithAggregatesFilter<$PrismaModel> | $Enums.classes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassesFilter<$PrismaModel>
    _max?: NestedEnumclassesFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumsituacaoFieldUpdateOperationsInput = {
    set?: $Enums.situacao
  }

  export type EnumclassesFieldUpdateOperationsInput = {
    set?: $Enums.classes
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumsituacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.situacao | EnumsituacaoFieldRefInput<$PrismaModel>
    in?: $Enums.situacao[]
    notIn?: $Enums.situacao[]
    not?: NestedEnumsituacaoFilter<$PrismaModel> | $Enums.situacao
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumsituacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.situacao | EnumsituacaoFieldRefInput<$PrismaModel>
    in?: $Enums.situacao[]
    notIn?: $Enums.situacao[]
    not?: NestedEnumsituacaoWithAggregatesFilter<$PrismaModel> | $Enums.situacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsituacaoFilter<$PrismaModel>
    _max?: NestedEnumsituacaoFilter<$PrismaModel>
  }

  export type NestedEnumclassesFilter<$PrismaModel = never> = {
    equals?: $Enums.classes | EnumclassesFieldRefInput<$PrismaModel>
    in?: $Enums.classes[]
    notIn?: $Enums.classes[]
    not?: NestedEnumclassesFilter<$PrismaModel> | $Enums.classes
  }

  export type NestedEnumclassesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classes | EnumclassesFieldRefInput<$PrismaModel>
    in?: $Enums.classes[]
    notIn?: $Enums.classes[]
    not?: NestedEnumclassesWithAggregatesFilter<$PrismaModel> | $Enums.classes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassesFilter<$PrismaModel>
    _max?: NestedEnumclassesFilter<$PrismaModel>
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