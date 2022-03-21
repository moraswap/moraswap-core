/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMoraSwapCallee } from "../IMoraSwapCallee";

export class IMoraSwapCallee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMoraSwapCallee {
    return new Contract(address, _abi, signerOrProvider) as IMoraSwapCallee;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "moraswapCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];