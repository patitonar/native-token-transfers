/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  CCTPAndTokenSender,
  CCTPAndTokenSenderInterface,
} from "../../CCTPAndTokenBase.sol/CCTPAndTokenSender";

const _abi = [
  {
    type: "function",
    name: "chainIdToCCTPDomain",
    inputs: [
      {
        name: "",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setCCTPDomain",
    inputs: [
      {
        name: "chain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cctpDomain",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRegisteredSender",
    inputs: [
      {
        name: "sourceChain",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "sourceAddress",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tokenBridge",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ITokenBridge",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormhole",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormhole",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wormholeRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWormholeRelayer",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class CCTPAndTokenSender__factory {
  static readonly abi = _abi;
  static createInterface(): CCTPAndTokenSenderInterface {
    return new Interface(_abi) as CCTPAndTokenSenderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CCTPAndTokenSender {
    return new Contract(address, _abi, runner) as unknown as CCTPAndTokenSender;
  }
}
