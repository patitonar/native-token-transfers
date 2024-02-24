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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace VmSafe {
  export type LogStruct = {
    topics: BytesLike[];
    data: BytesLike;
    emitter: AddressLike;
  };

  export type LogStructOutput = [
    topics: string[],
    data: string,
    emitter: string
  ] & { topics: string[]; data: string; emitter: string };
}

export declare namespace EndpointStructs {
  export type EndpointInstructionStruct = {
    index: BigNumberish;
    payload: BytesLike;
  };

  export type EndpointInstructionStructOutput = [
    index: bigint,
    payload: string
  ] & { index: bigint; payload: string };
}

export interface DummyEndpointInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getManagerOwner"
      | "getManagerToken"
      | "getMigratesImmutables"
      | "initialize"
      | "isPaused"
      | "manager"
      | "managerToken"
      | "migrate"
      | "owner"
      | "parseMessageFromLogs"
      | "pauser"
      | "quoteDeliveryPrice"
      | "receiveMessage"
      | "sendMessage"
      | "transferEndpointOwnership"
      | "transferOwnership"
      | "transferPauserCapability"
      | "upgrade"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Initialized"
      | "NotPaused"
      | "OwnershipTransferred"
      | "Paused"
      | "PauserTransferred"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getManagerOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getManagerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMigratesImmutables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "managerToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "migrate", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "parseMessageFromLogs",
    values: [VmSafe.LogStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "pauser", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteDeliveryPrice",
    values: [BigNumberish, EndpointStructs.EndpointInstructionStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [
      BigNumberish,
      EndpointStructs.EndpointInstructionStruct,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferEndpointOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferPauserCapability",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getManagerOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManagerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMigratesImmutables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "managerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "parseMessageFromLogs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteDeliveryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferEndpointOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferPauserCapability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NotPausedEvent {
  export type InputTuple = [notPaused: boolean];
  export type OutputTuple = [notPaused: boolean];
  export interface OutputObject {
    notPaused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [paused: boolean];
  export type OutputTuple = [paused: boolean];
  export interface OutputObject {
    paused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PauserTransferredEvent {
  export type InputTuple = [oldPauser: AddressLike, newPauser: AddressLike];
  export type OutputTuple = [oldPauser: string, newPauser: string];
  export interface OutputObject {
    oldPauser: string;
    newPauser: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DummyEndpoint extends BaseContract {
  connect(runner?: ContractRunner | null): DummyEndpoint;
  waitForDeployment(): Promise<this>;

  interface: DummyEndpointInterface;

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

  getManagerOwner: TypedContractMethod<[], [string], "view">;

  getManagerToken: TypedContractMethod<[], [string], "view">;

  getMigratesImmutables: TypedContractMethod<[], [boolean], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  isPaused: TypedContractMethod<[], [boolean], "view">;

  manager: TypedContractMethod<[], [string], "view">;

  managerToken: TypedContractMethod<[], [string], "view">;

  migrate: TypedContractMethod<[], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  parseMessageFromLogs: TypedContractMethod<
    [logs: VmSafe.LogStruct[]],
    [[bigint, string] & { recipientChain: bigint; payload: string }],
    "view"
  >;

  pauser: TypedContractMethod<[], [string], "view">;

  quoteDeliveryPrice: TypedContractMethod<
    [
      targetChain: BigNumberish,
      instruction: EndpointStructs.EndpointInstructionStruct
    ],
    [bigint],
    "view"
  >;

  receiveMessage: TypedContractMethod<
    [encodedMessage: BytesLike],
    [void],
    "nonpayable"
  >;

  sendMessage: TypedContractMethod<
    [
      recipientChain: BigNumberish,
      instruction: EndpointStructs.EndpointInstructionStruct,
      managerMessage: BytesLike,
      recipientManagerAddress: BytesLike
    ],
    [void],
    "payable"
  >;

  transferEndpointOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  transferPauserCapability: TypedContractMethod<
    [newPauser: AddressLike],
    [void],
    "nonpayable"
  >;

  upgrade: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getManagerOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getManagerToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getMigratesImmutables"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isPaused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "manager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "managerToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "migrate"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "parseMessageFromLogs"
  ): TypedContractMethod<
    [logs: VmSafe.LogStruct[]],
    [[bigint, string] & { recipientChain: bigint; payload: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pauser"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "quoteDeliveryPrice"
  ): TypedContractMethod<
    [
      targetChain: BigNumberish,
      instruction: EndpointStructs.EndpointInstructionStruct
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "receiveMessage"
  ): TypedContractMethod<[encodedMessage: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sendMessage"
  ): TypedContractMethod<
    [
      recipientChain: BigNumberish,
      instruction: EndpointStructs.EndpointInstructionStruct,
      managerMessage: BytesLike,
      recipientManagerAddress: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "transferEndpointOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferPauserCapability"
  ): TypedContractMethod<[newPauser: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgrade"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "NotPaused"
  ): TypedContractEvent<
    NotPausedEvent.InputTuple,
    NotPausedEvent.OutputTuple,
    NotPausedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "PauserTransferred"
  ): TypedContractEvent<
    PauserTransferredEvent.InputTuple,
    PauserTransferredEvent.OutputTuple,
    PauserTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "NotPaused(bool)": TypedContractEvent<
      NotPausedEvent.InputTuple,
      NotPausedEvent.OutputTuple,
      NotPausedEvent.OutputObject
    >;
    NotPaused: TypedContractEvent<
      NotPausedEvent.InputTuple,
      NotPausedEvent.OutputTuple,
      NotPausedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(bool)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "PauserTransferred(address,address)": TypedContractEvent<
      PauserTransferredEvent.InputTuple,
      PauserTransferredEvent.OutputTuple,
      PauserTransferredEvent.OutputObject
    >;
    PauserTransferred: TypedContractEvent<
      PauserTransferredEvent.InputTuple,
      PauserTransferredEvent.OutputTuple,
      PauserTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
