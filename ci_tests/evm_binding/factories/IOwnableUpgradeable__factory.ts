/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOwnableUpgradeable,
  IOwnableUpgradeableInterface,
} from "../IOwnableUpgradeable";

const _abi = [
  {
    type: "function",
    name: "owner",
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
] as const;

export class IOwnableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IOwnableUpgradeableInterface {
    return new Interface(_abi) as IOwnableUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IOwnableUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IOwnableUpgradeable;
  }
}
