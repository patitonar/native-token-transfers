/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  PausableUpgradeable,
  PausableUpgradeableInterface,
} from "../PausableUpgradeable";

const _abi = [
  {
    type: "function",
    name: "isPaused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pauser",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NotPaused",
    inputs: [
      {
        name: "notPaused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "paused",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PauserTransferred",
    inputs: [
      {
        name: "oldPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newPauser",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CannotRenounceWhilePaused",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPauser",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsNotPaused",
    inputs: [],
  },
  {
    type: "error",
    name: "RequireContractIsPaused",
    inputs: [],
  },
] as const;

export class PausableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): PausableUpgradeableInterface {
    return new Interface(_abi) as PausableUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PausableUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as PausableUpgradeable;
  }
}
