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

interface TimelockInterface extends ethers.utils.Interface {
  functions: {
    "amount()": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "lastReleaseTime()": FunctionFragment;
    "nextReleaseTime()": FunctionFragment;
    "release()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "amount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastReleaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextReleaseTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "amount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastReleaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextReleaseTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class Timelock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TimelockInterface;

  functions: {
    amount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "amount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;

    lastReleaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastReleaseTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextReleaseTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextReleaseTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    release(overrides?: Overrides): Promise<ContractTransaction>;

    "release()"(overrides?: Overrides): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;
  };

  amount(overrides?: CallOverrides): Promise<BigNumber>;

  "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  lastReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  "lastReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

  "nextReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  release(overrides?: Overrides): Promise<ContractTransaction>;

  "release()"(overrides?: Overrides): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    amount(overrides?: CallOverrides): Promise<BigNumber>;

    "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    lastReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "lastReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "nextReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: CallOverrides): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    amount(overrides?: CallOverrides): Promise<BigNumber>;

    "amount()"(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "lastReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextReleaseTime(overrides?: CallOverrides): Promise<BigNumber>;

    "nextReleaseTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: Overrides): Promise<BigNumber>;

    "release()"(overrides?: Overrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    amount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "amount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastReleaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastReleaseTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextReleaseTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextReleaseTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(overrides?: Overrides): Promise<PopulatedTransaction>;

    "release()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
