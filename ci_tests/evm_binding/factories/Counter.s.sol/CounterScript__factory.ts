/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  CounterScript,
  CounterScriptInterface,
} from "../../Counter.s.sol/CounterScript";

const _abi = [
  {
    type: "function",
    name: "IS_SCRIPT",
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
    name: "run",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUp",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x60808060405234610027576201000162ff00ff19600b541617600b5561012d908161002d8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c9081630a9254e41460e5578163c0406226146064575063f8ccbf4714603e57600080fd5b3460615780600319360112606157602060ff600b5460101c166040519015158152f35b80fd5b90503460e1578160031936011260e15781737109709ecfa91a80626ff3989d68f67f5b1dd12d803b1560e1576004838381936302bf260160e61b83525af1801560d65760ae575080f35b67ffffffffffffffff811160c25760405280f35b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b5080fd5b82346061578060031936011260615780f3fea26469706673582212202cac4e3621ae5aa0859eb68506bc20b41dfd30210df6962232b612bcb2a5622f64736f6c63430008130033";

type CounterScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterScriptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CounterScript__factory extends ContractFactory {
  constructor(...args: CounterScriptConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CounterScript & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CounterScript__factory {
    return super.connect(runner) as CounterScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterScriptInterface {
    return new Interface(_abi) as CounterScriptInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CounterScript {
    return new Contract(address, _abi, runner) as unknown as CounterScript;
  }
}
