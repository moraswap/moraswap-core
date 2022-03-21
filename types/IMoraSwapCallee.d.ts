/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IMoraSwapCalleeInterface extends ethers.utils.Interface {
  functions: {
    "moraswapCall(address,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "moraswapCall",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "moraswapCall",
    data: BytesLike
  ): Result;

  events: {};
}

export class IMoraSwapCallee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IMoraSwapCalleeInterface;

  functions: {
    moraswapCall(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "moraswapCall(address,uint256,uint256,bytes)"(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  moraswapCall(
    sender: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "moraswapCall(address,uint256,uint256,bytes)"(
    sender: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    moraswapCall(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "moraswapCall(address,uint256,uint256,bytes)"(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    moraswapCall(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "moraswapCall(address,uint256,uint256,bytes)"(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    moraswapCall(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "moraswapCall(address,uint256,uint256,bytes)"(
      sender: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
