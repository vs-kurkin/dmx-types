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

export declare type DRIVERS = [
  'null',
  'socketio',
  'dmx4all',
  'enttec-usb-dmx-pro',
  'enttec-open-usb-dmx',
  'dmxking-ultra-dmx-pro',
  'artnet',
  'bbdmx',
  'sacn',
]
