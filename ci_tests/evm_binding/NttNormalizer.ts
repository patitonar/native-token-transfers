/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type NormalizedAmountStruct = {
  amount: BigNumberish;
  decimals: BigNumberish;
};

export type NormalizedAmountStructOutput = [
  amount: bigint,
  decimals: bigint
] & { amount: bigint; decimals: bigint };

export interface NttNormalizerInterface extends Interface {
  getFunction(
    nameOrSignature: "nttDenormalize" | "nttFixDecimals" | "nttNormalize"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "nttDenormalize",
    values: [NormalizedAmountStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "nttFixDecimals",
    values: [NormalizedAmountStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "nttNormalize",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "nttDenormalize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nttFixDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nttNormalize",
    data: BytesLike
  ): Result;
}

export interface NttNormalizer extends BaseContract {
  connect(runner?: ContractRunner | null): NttNormalizer;
  waitForDeployment(): Promise<this>;

  interface: NttNormalizerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  nttDenormalize: TypedContractMethod<
    [amount: NormalizedAmountStruct],
    [bigint],
    "view"
  >;

  nttFixDecimals: TypedContractMethod<
    [amount: NormalizedAmountStruct],
    [NormalizedAmountStructOutput],
    "view"
  >;

  nttNormalize: TypedContractMethod<
    [amount: BigNumberish],
    [NormalizedAmountStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "nttDenormalize"
  ): TypedContractMethod<[amount: NormalizedAmountStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "nttFixDecimals"
  ): TypedContractMethod<
    [amount: NormalizedAmountStruct],
    [NormalizedAmountStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "nttNormalize"
  ): TypedContractMethod<
    [amount: BigNumberish],
    [NormalizedAmountStructOutput],
    "view"
  >;

  filters: {};
}
