// noinspection JSUnusedGlobalSymbols

export declare interface Serial {
  path: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  friendlyName: string;
  vendorId: string;
  productId: string;
}

export interface UniverseOptions {
  host?: string;
  port?: string;
  baudRate?: number;
  dataBits?: number;
  stopBits?: number;
  universe?: number;
  interval?: number;
  id: string;
  path: string;
  driver: string;
}

export interface Device {
  channels: Channel[];
  mode?: Record<string, Channel[]>;
  universe?: string;
  vendor?: string;
  model?: string;
}

export interface Channel {
  type: string;
  value: number;
  name?: string;
  default?: number;
  min?: number;
  max?: number;
  amount?: number;
  steps?: number[];
}
