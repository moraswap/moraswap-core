/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BancorConverterRegistry } from "../BancorConverterRegistry";

export class BancorConverterRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BancorConverterRegistry> {
    return super.deploy(overrides || {}) as Promise<BancorConverterRegistry>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BancorConverterRegistry {
    return super.attach(address) as BancorConverterRegistry;
  }
  connect(signer: Signer): BancorConverterRegistry__factory {
    return super.connect(signer) as BancorConverterRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BancorConverterRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BancorConverterRegistry;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "ConverterAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "ConverterRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdate",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_index",
        type: "uint32",
      },
    ],
    name: "converterAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "converterCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "newOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_converter",
        type: "address",
      },
    ],
    name: "registerConverter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_converter",
        type: "address",
      },
    ],
    name: "tokenAddress",
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
    name: "tokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
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
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_index",
        type: "uint32",
      },
    ],
    name: "unregisterConverter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610793806100326000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80639884e801116100715780639884e8011461015d5780639f181b5e14610183578063cd9d4d661461019d578063d26a8d2e146101c3578063d4ee1d90146101f1578063f2fde38b146101f9576100a9565b806338cb066f146100ae5780634f64b2be146100e257806379ba50971461011b5780638da5cb5b1461012357806390ab31061461012b575b600080fd5b6100e0600480360360408110156100c457600080fd5b5080356001600160a01b0316906020013563ffffffff1661021f565b005b6100ff600480360360208110156100f857600080fd5b503561041f565b604080516001600160a01b039092168252519081900360200190f35b6100e0610446565b6100ff6104c1565b6100ff6004803603604081101561014157600080fd5b5080356001600160a01b0316906020013563ffffffff166104d0565b6100ff6004803603602081101561017357600080fd5b50356001600160a01b0316610545565b61018b610563565b60408051918252519081900360200190f35b61018b600480360360208110156101b357600080fd5b50356001600160a01b0316610569565b6100e0600480360360408110156101d957600080fd5b506001600160a01b0381358116916020013516610584565b6100ff6106fa565b6100e06004803603602081101561020f57600080fd5b50356001600160a01b0316610709565b6000546001600160a01b0316331461023657600080fd5b816001600160a01b03811661024a57600080fd5b6001600160a01b03831660009081526003602052604090205463ffffffff83161061027457600080fd5b6001600160a01b0383166000908152600360205260408120805463ffffffff851690811061029e57fe5b6000918252602090912001546001600160a01b03169050600183015b6001600160a01b03851660009081526003602052604090205463ffffffff8216101561037c576001600160a01b0385166000908152600360205260409020805463ffffffff831690811061030a57fe5b60009182526020808320909101546001600160a01b03888116845260039092526040909220805491909216919063ffffffff60001985011690811061034b57fe5b600091825260209091200180546001600160a01b0319166001600160a01b03929092169190911790556001016102ba565b506001600160a01b038416600090815260036020526040902080548061039e57fe5b60008281526020808220830160001990810180546001600160a01b031990811690915593019093556001600160a01b0384811680835260048552604092839020805490941690935581519283529051908716927fc3b25a6c3b7509edde0f2e6cc317b5820a901fa82ac554709206e1d7237fe294928290030190a250505050565b6005818154811061042c57fe5b6000918252602090912001546001600160a01b0316905081565b6001546001600160a01b0316331461045d57600080fd5b600154600080546040516001600160a01b0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a360018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b031681565b6001600160a01b03821660009081526003602052604081205463ffffffff8316106104fd5750600061053f565b6001600160a01b0383166000908152600360205260409020805463ffffffff841690811061052757fe5b6000918252602090912001546001600160a01b031690505b92915050565b6001600160a01b039081166000908152600460205260409020541690565b60055490565b6001600160a01b031660009081526003602052604090205490565b6000546001600160a01b0316331461059b57600080fd5b816001600160a01b0381166105af57600080fd5b816001600160a01b0381166105c357600080fd5b6001600160a01b0383811660009081526004602052604090205416156105e857600080fd5b6001600160a01b03841660009081526002602052604090205460ff1661066c576005805460018082019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319166001600160a01b0387169081179091556000908152600260205260409020805460ff191690911790555b6001600160a01b03808516600081815260036020908152604080832080546001810182559084528284200180549589166001600160a01b031996871681179091558084526004835292819020805490951684179094558351918252925191927f229aec2ec4b21e700d6daf13a894e7b38c18b844b021f2eee263f04af3ea6f0092918290030190a250505050565b6001546001600160a01b031681565b6000546001600160a01b0316331461072057600080fd5b6000546001600160a01b038281169116141561073b57600080fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fea2646970667358221220fa737aa10ce6a104d4586a4d003014367b7d68b789c6bfca34ba6d4ac12dd22564736f6c634300060c0033";