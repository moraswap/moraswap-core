/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Rewarder } from "../Rewarder";

export class Rewarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _lpToken: string,
    _rewardPerSecond: BigNumberish,
    _chef: string,
    overrides?: Overrides
  ): Promise<Rewarder> {
    return super.deploy(
      _rewardToken,
      _lpToken,
      _rewardPerSecond,
      _chef,
      overrides || {}
    ) as Promise<Rewarder>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _lpToken: string,
    _rewardPerSecond: BigNumberish,
    _chef: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _lpToken,
      _rewardPerSecond,
      _chef,
      overrides || {}
    );
  }
  attach(address: string): Rewarder {
    return super.attach(address) as Rewarder;
  }
  connect(signer: Signer): Rewarder__factory {
    return super.connect(signer) as Rewarder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Rewarder {
    return new Contract(address, _abi, signerOrProvider) as Rewarder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_chef",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OnReward",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetRewardPerSecond",
    type: "event",
  },
  {
    inputs: [],
    name: "chef",
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
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "onReward",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "pendingReward",
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "accRewardPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardSecond",
        type: "uint256",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "reclaimTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPerSecond",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "_rewardPerSecond",
        type: "uint256",
      },
    ],
    name: "setRewardPerSecond",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "accRewardPerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardSecond",
            type: "uint256",
          },
        ],
        internalType: "struct Rewarder.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200135a3803806200135a8339810160408190526200003491620000da565b600062000040620000d6565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160601b0319606094851b811660805292841b831660a05260049190915590911b1660c0526040805180820190915260008082524260209092018290526001556002556200014e565b3390565b60008060008060808587031215620000f0578384fd5b8451620000fd8162000135565b6020860151909450620001108162000135565b6040860151606087015191945092506200012a8162000135565b939692955090935050565b6001600160a01b03811681146200014b57600080fd5b50565b60805160601c60a05160601c60c05160601c6111ae620001ac600039806101fc528061042e52806106e1528061091052508061022952806106b452806108e35250806104f152806105a252806105db5280610a3452506111ae6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f10369a1161008c578063e3161ddd11610066578063e3161ddd1461019e578063f2fde38b146101b3578063f430cf0d146101c6578063f7c618c1146101d9576100ea565b80638f10369a14610163578063c1ea386814610178578063c37232881461018b576100ea565b80635fcbd285116100c85780635fcbd2851461013657806366da58151461013e578063715018a6146101535780638da5cb5b1461015b576100ea565b80631959a002146100ef5780631fc8bc5d146101195780635a2f3d091461012e575b600080fd5b6101026100fd366004610d30565b6101e1565b604051610110929190611122565b60405180910390f35b6101216101fa565b6040516101109190610e24565b61010261021e565b610121610227565b61015161014c366004610dd8565b61024b565b005b6101516102e2565b61012161036b565b61016b61037b565b6040516101109190611119565b610151610186366004610d77565b610381565b610151610199366004610d4c565b610423565b6101a6610671565b6040516101109190611102565b6101516101c1366004610d30565b6107cf565b61016b6101d4366004610d4c565b61088f565b610121610a32565b6003602052600090815260409020805460019091015482565b7f000000000000000000000000000000000000000000000000000000000000000081565b60015460025482565b7f000000000000000000000000000000000000000000000000000000000000000081565b610253610a56565b6001600160a01b031661026461036b565b6001600160a01b0316146102935760405162461bcd60e51b815260040161028a90610ff6565b60405180910390fd5b61029b610671565b5060048054908290556040517fcf46b21c204617ffb815b827463db479e0f3cdc9586e33690d10ced9541fcda0906102d69083908590611122565b60405180910390a15050565b6102ea610a56565b6001600160a01b03166102fb61036b565b6001600160a01b0316146103215760405162461bcd60e51b815260040161028a90610ff6565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b03165b90565b60045481565b610389610a56565b6001600160a01b031661039a61036b565b6001600160a01b0316146103c05760405162461bcd60e51b815260040161028a90610ff6565b6001600160a01b03831661040a576040516001600160a01b0382169083156108fc029084906000818181858888f19350505050158015610404573d6000803e3d6000fd5b5061041e565b61041e6001600160a01b0384168284610a5a565b505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461046b5760405162461bcd60e51b815260040161028a9061102b565b610473610671565b5061047c610d16565b5060408051808201825260015481526002546020808301919091526001600160a01b0385166000908152600390915291822080549192909115610604576001820154835183546104eb92916104e591670de0b6b3a7640000916104df9190610ab0565b90610af1565b90610b23565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161053b9190610e24565b60206040518083038186803b15801561055357600080fd5b505afa158015610567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058b9190610df0565b9050808211156105ce576105c96001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168783610a5a565b610602565b6106026001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168784610a5a565b505b838255825161062290670de0b6b3a7640000906104df908790610ab0565b60018301556040516001600160a01b038616907fd1072bb52c3131d0c96197b73fb8a45637e30f8b6664fc142310cc9b242859b490610662908490611119565b60405180910390a25050505050565b610679610d16565b5060408051808201909152600154815260025460208201819052421115610378576040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610709907f000000000000000000000000000000000000000000000000000000000000000090600401610e24565b60206040518083038186803b15801561072157600080fd5b505afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107599190610df0565b905080156107bb57600061077a836020015142610b2390919063ffffffff16565b9050600061079360045483610ab090919063ffffffff16565b90506107b66107ae846104df84670de0b6b3a7640000610ab0565b855190610b4b565b845250505b504260208201819052815160015560025590565b6107d7610a56565b6001600160a01b03166107e861036b565b6001600160a01b03161461080e5760405162461bcd60e51b815260040161028a90610ff6565b6001600160a01b0381166108345760405162461bcd60e51b815260040161028a90610e84565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000610899610d16565b5060408051808201825260015481526002546020808301919091526001600160a01b0380871660009081526003909252838220835194516370a0823160e01b8152939490939092917f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610938907f000000000000000000000000000000000000000000000000000000000000000090600401610e24565b60206040518083038186803b15801561095057600080fd5b505afa158015610964573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109889190610df0565b905083602001514211801561099c57508015155b156109fa5760006109ba856020015142610b2390919063ffffffff16565b905060006109d360045483610ab090919063ffffffff16565b90506109f56109ee846104df84670de0b6b3a7640000610ab0565b8590610b4b565b935050505b610a2583600101546104e5670de0b6b3a76400006104df868860000154610ab090919063ffffffff16565b9450505050505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b3390565b61041e8363a9059cbb60e01b8484604051602401610a79929190610e38565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b70565b600082610abf57506000610a2c565b82820282848281610acc57fe5b0414610aea5760405162461bcd60e51b815260040161028a90610fb5565b9392505050565b6000808211610b125760405162461bcd60e51b815260040161028a90610f7e565b818381610b1b57fe5b049392505050565b600082821115610b455760405162461bcd60e51b815260040161028a90610f01565b50900390565b600082820183811015610aea5760405162461bcd60e51b815260040161028a90610eca565b6060610bc5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610bff9092919063ffffffff16565b80519091501561041e5780806020019051810190610be39190610db8565b61041e5760405162461bcd60e51b815260040161028a906110b8565b6060610c0e8484600085610c16565b949350505050565b606082471015610c385760405162461bcd60e51b815260040161028a90610f38565b610c4185610cd7565b610c5d5760405162461bcd60e51b815260040161028a90611081565b60006060866001600160a01b03168587604051610c7a9190610e08565b60006040518083038185875af1925050503d8060008114610cb7576040519150601f19603f3d011682016040523d82523d6000602084013e610cbc565b606091505b5091509150610ccc828286610cdd565b979650505050505050565b3b151590565b60608315610cec575081610aea565b825115610cfc5782518084602001fd5b8160405162461bcd60e51b815260040161028a9190610e51565b604051806040016040528060008152602001600081525090565b600060208284031215610d41578081fd5b8135610aea81611160565b60008060408385031215610d5e578081fd5b8235610d6981611160565b946020939093013593505050565b600080600060608486031215610d8b578081fd5b8335610d9681611160565b9250602084013591506040840135610dad81611160565b809150509250925092565b600060208284031215610dc9578081fd5b81518015158114610aea578182fd5b600060208284031215610de9578081fd5b5035919050565b600060208284031215610e01578081fd5b5051919050565b60008251610e1a818460208701611130565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602082528251806020840152610e70816040850160208701611130565b601f01601f19169190910160400192915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526036908201527f6f6e6c794d6173746572436865663a206f6e6c79204d6173746572436865662060408201527531b0b71031b0b636103a3434b990333ab731ba34b7b760511b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b815181526020918201519181019190915260400190565b90815260200190565b918252602082015260400190565b60005b8381101561114b578181015183820152602001611133565b8381111561115a576000848401525b50505050565b6001600160a01b038116811461117557600080fd5b5056fea264697066735822122005496cc7673700b514a342c2957200b5dfdcbb229c44fa04126c1b8cc94a635564736f6c634300060c0033";