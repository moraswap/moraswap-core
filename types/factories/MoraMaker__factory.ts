/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MoraMaker } from "../MoraMaker";

export class MoraMaker__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _arom: string,
    _mora: string,
    _weth: string,
    overrides?: Overrides
  ): Promise<MoraMaker> {
    return super.deploy(
      _factory,
      _arom,
      _mora,
      _weth,
      overrides || {}
    ) as Promise<MoraMaker>;
  }
  getDeployTransaction(
    _factory: string,
    _arom: string,
    _mora: string,
    _weth: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _arom,
      _mora,
      _weth,
      overrides || {}
    );
  }
  attach(address: string): MoraMaker {
    return super.attach(address) as MoraMaker;
  }
  connect(signer: Signer): MoraMaker__factory {
    return super.connect(signer) as MoraMaker__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MoraMaker {
    return new Contract(address, _abi, signerOrProvider) as MoraMaker;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_arom",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mora",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "LogBridgeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "server",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMORA",
        type: "uint256",
      },
    ],
    name: "LogConvert",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "server",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountMORA",
        type: "uint256",
      },
    ],
    name: "LogConvertSingleToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "arom",
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
        name: "token",
        type: "address",
      },
    ],
    name: "bridgeFor",
    outputs: [
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
    ],
    name: "convert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token0",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "token1",
        type: "address[]",
      },
    ],
    name: "convertMultiple",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "token",
        type: "address[]",
      },
    ],
    name: "convertMultipleSingleToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "convertSingleToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IMoraSwapFactory",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "setBridge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x61010060405234801561001157600080fd5b50604051611aad380380611aad8339818101604052608081101561003457600080fd5b5080516020820151604080840151606090940151600080546001600160a01b0319163390811782559251949593949192917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36001600160601b0319606094851b811660805292841b831660a05290831b821660c05290911b1660e05260805160601c60a05160601c60c05160601c60e05160601c6119466101676000398060bb528061070452806108225280611018528061105552806111fa52806112375280611260528061128d52806112ca52806112f35250806106c75280610d9f5280610f825280610fc752806110b552806110fa528061115e52806111a35250806106355280610dc15280610fe9528061111c52806111c55250806108575280610a9d52806113cc52506119466000f3fe6080604052600436106100ab5760003560e01c8063a761a93911610064578063a761a93914610291578063bd1b820c146102c4578063c45a0155146102ff578063cc3ea33d14610314578063ddc1732114610391578063e30c3978146103c4576100e4565b8063078dfbe7146100e9578063303e6aa41461012c5780634e71e0c8146101fb5780638b1dedba146102105780638da5cb5b146102415780639d22ae8c14610256576100e4565b366100e457336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100e257fe5b005b600080fd5b3480156100f557600080fd5b506100e26004803603606081101561010c57600080fd5b506001600160a01b038135169060208101351515906040013515156103d9565b34801561013857600080fd5b506100e26004803603604081101561014f57600080fd5b81019060208101813564010000000081111561016a57600080fd5b82018360208201111561017c57600080fd5b8035906020019184602083028401116401000000008311171561019e57600080fd5b9193909290916020810190356401000000008111156101bc57600080fd5b8201836020820111156101ce57600080fd5b803590602001918460208302840111640100000000831117156101f057600080fd5b509092509050610515565b34801561020757600080fd5b506100e2610571565b34801561021c57600080fd5b50610225610633565b604080516001600160a01b039092168252519081900360200190f35b34801561024d57600080fd5b50610225610657565b34801561026257600080fd5b506100e26004803603604081101561027957600080fd5b506001600160a01b0381358116916020013516610666565b34801561029d57600080fd5b50610225600480360360208110156102b457600080fd5b50356001600160a01b03166107ff565b3480156102d057600080fd5b506100e2600480360360408110156102e757600080fd5b506001600160a01b0381358116916020013516610847565b34801561030b57600080fd5b50610225610855565b34801561032057600080fd5b506100e26004803603602081101561033757600080fd5b81019060208101813564010000000081111561035257600080fd5b82018360208201111561036457600080fd5b8035906020019184602083028401116401000000008311171561038657600080fd5b509092509050610879565b34801561039d57600080fd5b506100e2600480360360208110156103b457600080fd5b50356001600160a01b03166109ba565b3480156103d057600080fd5b50610225610a8a565b6000546001600160a01b03163314610438576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b81156104f4576001600160a01b0383161515806104525750805b61049b576040805162461bcd60e51b81526020600482015260156024820152744f776e61626c653a207a65726f206164647265737360581b604482015290519081900360640190fd5b600080546040516001600160a01b03808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b038516179055610510565b600180546001600160a01b0319166001600160a01b0385161790555b505050565b8260005b818110156105695761056186868381811061053057fe5b905060200201356001600160a01b031685858481811061054c57fe5b905060200201356001600160a01b0316610a99565b600101610519565b505050505050565b6001546001600160a01b03163381146105d1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316179055600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b031681565b6000546001600160a01b031633146106c5576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b03161415801561073957507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614155b80156107575750806001600160a01b0316826001600160a01b031614155b6107a8576040805162461bcd60e51b815260206004820152601960248201527f4d6f72614d616b65723a20496e76616c69642062726964676500000000000000604482015290519081900360640190fd5b6001600160a01b0382811660008181526002602052604080822080546001600160a01b0319169486169485179055517f2e103aa707acc565f9a1547341914802b2bfe977fd79c595209f248ae4b006139190a35050565b6001600160a01b03808216600090815260026020526040902054168061084257507f00000000000000000000000000000000000000000000000000000000000000005b919050565b6108518282610a99565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b8060005b818110156109b457600084848381811061089357fe5b905060200201356001600160a01b03166001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156108ef57600080fd5b505afa158015610903573d6000803e3d6000fd5b505050506040513d602081101561091957600080fd5b5051905084848381811061092957fe5b905060200201356001600160a01b03166001600160a01b0316336001600160a01b03167f0ba9afd832f8532ff2bca679e71c6d99a0a46b207624fb035b78c7b923df7a648361099389898881811061097d57fe5b905060200201356001600160a01b031686610d97565b6040805192835260208301919091528051918290030190a35060010161087d565b50505050565b6000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a0957600080fd5b505afa158015610a1d573d6000803e3d6000fd5b505050506040513d6020811015610a3357600080fd5b505190506001600160a01b038216337f0ba9afd832f8532ff2bca679e71c6d99a0a46b207624fb035b78c7b923df7a6483610a6e8682610d97565b6040805192835260208301919091528051918290030190a35050565b6001546001600160a01b031681565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390584846040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b158015610b1957600080fd5b505afa158015610b2d573d6000803e3d6000fd5b505050506040513d6020811015610b4357600080fd5b505190506001600160a01b038116610ba2576040805162461bcd60e51b815260206004820152601760248201527f4d6f72614d616b65723a20496e76616c69642070616972000000000000000000604482015290519081900360640190fd5b610c3081826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610bf357600080fd5b505afa158015610c07573d6000803e3d6000fd5b505050506040513d6020811015610c1d57600080fd5b50516001600160a01b0384169190610dec565b600080826001600160a01b03166389afcb44306040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506040805180830381600087803b158015610c8157600080fd5b505af1158015610c95573d6000803e3d6000fd5b505050506040513d6040811015610cab57600080fd5b50805160209182015160408051630dfe168160e01b815290519295509093506001600160a01b03861692630dfe168192600480840193829003018186803b158015610cf557600080fd5b505afa158015610d09573d6000803e3d6000fd5b505050506040513d6020811015610d1f57600080fd5b50516001600160a01b03868116911614610d3557905b6001600160a01b03808516908616337fd06b1d7ed79b664d17472c6f6997b929f1abe463ccccb4e5b6a0038f2f730c158585610d738b8b8484610f56565b60408051938452602084019290925282820152519081900360600190a45050505050565b6000610de5837f0000000000000000000000000000000000000000000000000000000000000000847f00000000000000000000000000000000000000000000000000000000000000006113c7565b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b178152925182516000946060949389169392918291908083835b60208310610e695780518252601f199092019160209182019101610e4a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ecb576040519150601f19603f3d011682016040523d82523d6000602084013e610ed0565b606091505b5091509150818015610efe575080511580610efe5750808060200190516020811015610efb57600080fd5b50515b610f4f576040805162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c656400000000604482015290519081900360640190fd5b5050505050565b6000836001600160a01b0316856001600160a01b031614156110b3576000610f7e8484611846565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b031614156110165761100e6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000083610dec565b8091506110ad565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316866001600160a01b031614156110815761107a7f000000000000000000000000000000000000000000000000000000000000000082610d97565b91506110ad565b600061108c876107ff565b905061109a878284306113c7565b91506110a98182846000610f56565b9250505b506113bf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316141561115c576111416001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000085610dec565b6111558361114f8685610d97565b90611846565b90506113bf565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b031614156111f8576111ea6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f000000000000000000000000000000000000000000000000000000000000000084610dec565b6111558261114f8786610d97565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b0316141561128b576111557f00000000000000000000000000000000000000000000000000000000000000006112868561114f887f000000000000000000000000000000000000000000000000000000000000000088306113c7565b610d97565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316846001600160a01b03161415611319576111557f00000000000000000000000000000000000000000000000000000000000000006112868461114f897f000000000000000000000000000000000000000000000000000000000000000089306113c7565b6000611324866107ff565b90506000611331866107ff565b9050856001600160a01b0316826001600160a01b0316141561136b57611364828761135e8a868a306113c7565b87610f56565b92506113bc565b866001600160a01b0316816001600160a01b0316141561139c576113648782876113978a868a306113c7565b610f56565b6113b982826113ad8a868a306113c7565b6113978a868a306113c7565b92505b50505b949350505050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e6a4390587876040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b031681526020019250505060206040518083038186803b15801561144857600080fd5b505afa15801561145c573d6000803e3d6000fd5b505050506040513d602081101561147257600080fd5b505190506001600160a01b0381166114d1576040805162461bcd60e51b815260206004820152601960248201527f4d6f72614d616b65723a2043616e6e6f7420636f6e7665727400000000000000604482015290519081900360640190fd5b600080826001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561150d57600080fd5b505afa158015611521573d6000803e3d6000fd5b505050506040513d606081101561153757600080fd5b5080516020909101516dffffffffffffffffffffffffffff91821693501690506000611565876103e66118a4565b9050836001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156115a057600080fd5b505afa1580156115b4573d6000803e3d6000fd5b505050506040513d60208110156115ca57600080fd5b50516001600160a01b038a811691161415611711576115ef8161114f856103e86118a4565b611605836115ff8a6103e66118a4565b906118a4565b8161160c57fe5b0494506116236001600160a01b038a168589610dec565b604080516000808252602082019283905263022c0d9f60e01b835260248201818152604483018990526001600160a01b038a81166064850152608060848501908152845160a48601819052918a169563022c0d9f958c948e9491939092909160c4850191908083838b5b838110156116a557818101518382015260200161168d565b50505050905090810190601f1680156116d25780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b1580156116f457600080fd5b505af1158015611708573d6000803e3d6000fd5b5050505061183a565b6117218161114f846103e86118a4565b611731846115ff8a6103e66118a4565b8161173857fe5b04945061174f6001600160a01b038a168589610dec565b604080516000808252602082019283905263022c0d9f60e01b835260248201888152604483018290526001600160a01b038a81166064850152608060848501908152845160a48601819052918a169563022c0d9f958c95948e9491939092909160c4850191908083838a5b838110156117d25781810151838201526020016117ba565b50505050905090810190601f1680156117ff5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561182157600080fd5b505af1158015611835573d6000803e3d6000fd5b505050505b50505050949350505050565b8181018181101561189e576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a20416464204f766572666c6f770000000000000000604482015290519081900360640190fd5b92915050565b60008115806118bf575050808202828282816118bc57fe5b04145b61189e576040805162461bcd60e51b815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fdfea2646970667358221220a156caf0782a742b6d60431e12219f4f7aa0dddb6bc4278486f77adfaedacaff64736f6c634300060c0033";
