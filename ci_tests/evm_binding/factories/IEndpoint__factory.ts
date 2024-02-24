/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IEndpoint, IEndpointInterface } from "../IEndpoint";

const _abi = [
  {
    type: "function",
    name: "quoteDeliveryPrice",
    inputs: [
      {
        name: "recipientChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct EndpointStructs.EndpointInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "sendMessage",
    inputs: [
      {
        name: "recipientChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "instruction",
        type: "tuple",
        internalType: "struct EndpointStructs.EndpointInstruction",
        components: [
          {
            name: "index",
            type: "uint8",
            internalType: "uint8",
          },
          {
            name: "payload",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
      {
        name: "managerMessage",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "recipientManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "transferEndpointOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgrade",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "CallerNotManager",
    inputs: [
      {
        name: "caller",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotRenounceEndpointOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "CannotTransferEndpointOwnership",
    inputs: [
      {
        name: "currentOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UnexpectedRecipientManagerAddress",
    inputs: [
      {
        name: "recipientManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "expectedRecipientManagerAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;

export class IEndpoint__factory {
  static readonly abi = _abi;
  static createInterface(): IEndpointInterface {
    return new Interface(_abi) as IEndpointInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IEndpoint {
    return new Contract(address, _abi, runner) as unknown as IEndpoint;
  }
}
