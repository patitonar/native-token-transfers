/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISpecialRelayer,
  ISpecialRelayerInterface,
} from "../ISpecialRelayer";

const _abi = [
  {
    type: "function",
    name: "quoteDeliveryPrice",
    inputs: [
      {
        name: "sourceContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "additionalValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "nativePriceQuote",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "requestDelivery",
    inputs: [
      {
        name: "sourceContract",
        type: "address",
        internalType: "address",
      },
      {
        name: "targetChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "additionalValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "sequence",
        type: "uint64",
        internalType: "uint64",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
] as const;

export class ISpecialRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): ISpecialRelayerInterface {
    return new Interface(_abi) as ISpecialRelayerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISpecialRelayer {
    return new Contract(address, _abi, runner) as unknown as ISpecialRelayer;
  }
}
