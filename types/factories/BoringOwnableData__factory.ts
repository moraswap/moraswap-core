/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringOwnableData } from "../BoringOwnableData";

export class BoringOwnableData__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060b38061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063e30c3978146059575b600080fd5b603d605f565b604080516001600160a01b039092168252519081900360200190f35b603d606e565b6000546001600160a01b031681565b6001546001600160a01b03168156fea26469706673582212206fa1a37060beac630adf20f5e4f8b4edf82802123554bc3a8ae04b135e2fd9db64736f6c634300060c0033";
