
export declare interface Serial {
  path: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  friendlyName: string;
  vendorId: string;
  productId: string;
}

export declare interface SerialOptions {
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