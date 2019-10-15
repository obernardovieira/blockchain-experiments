// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CreateChildContractEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save CreateChildContractEntity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CreateChildContractEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CreateChildContractEntity", id.toString(), this);
  }

  static load(id: string): CreateChildContractEntity | null {
    return store.get(
      "CreateChildContractEntity",
      id
    ) as CreateChildContractEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get brand(): string {
    let value = this.get("brand");
    return value.toString();
  }

  set brand(value: string) {
    this.set("brand", Value.fromString(value));
  }

  get model(): string {
    let value = this.get("model");
    return value.toString();
  }

  set model(value: string) {
    this.set("model", Value.fromString(value));
  }
}

export class OwnershipTransferredEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save OwnershipTransferredEntity entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OwnershipTransferredEntity entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OwnershipTransferredEntity", id.toString(), this);
  }

  static load(id: string): OwnershipTransferredEntity | null {
    return store.get(
      "OwnershipTransferredEntity",
      id
    ) as OwnershipTransferredEntity | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newowner(): Bytes {
    let value = this.get("newowner");
    return value.toBytes();
  }

  set newowner(value: Bytes) {
    this.set("newowner", Value.fromBytes(value));
  }
}
