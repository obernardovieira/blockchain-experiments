// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class CreateChildContract extends EthereumEvent {
  get params(): CreateChildContract__Params {
    return new CreateChildContract__Params(this);
  }
}

export class CreateChildContract__Params {
  _event: CreateChildContract;

  constructor(event: CreateChildContract) {
    this._event = event;
  }

  get brand(): string {
    return this._event.parameters[0].value.toString();
  }

  get model(): string {
    return this._event.parameters[1].value.toString();
  }

  get contractAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class CarShop extends SmartContract {
  static bind(address: Address): CarShop {
    return new CarShop("CarShop", address);
  }

  getDeployedChildContracts(): Array<Address> {
    let result = super.call("getDeployedChildContracts", []);

    return result[0].toAddressArray();
  }

  try_getDeployedChildContracts(): CallResult<Array<Address>> {
    let result = super.tryCall("getDeployedChildContracts", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddressArray());
  }
}

export class CreateChildContractCall extends EthereumCall {
  get inputs(): CreateChildContractCall__Inputs {
    return new CreateChildContractCall__Inputs(this);
  }

  get outputs(): CreateChildContractCall__Outputs {
    return new CreateChildContractCall__Outputs(this);
  }
}

export class CreateChildContractCall__Inputs {
  _call: CreateChildContractCall;

  constructor(call: CreateChildContractCall) {
    this._call = call;
  }

  get brand(): string {
    return this._call.inputValues[0].value.toString();
  }

  get model(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateChildContractCall__Outputs {
  _call: CreateChildContractCall;

  constructor(call: CreateChildContractCall) {
    this._call = call;
  }
}
