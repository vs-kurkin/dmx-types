export interface Serial {
  path: string;
  manufacturer: string;
  serialNumber: string;
  pnpId: string;
  friendlyName: string;
  vendorId: string;
  productId: string;
}

export type SerialDrivers = [
  'null',
  'socketio',
  'dmx4all',
  'enttec-usb-dmx-pro',
  'enttec-open-usb-dmx',
  'dmxking-ultra-dmx-pro',
  'artnet',
  'bbdmx',
  'sacn'
];

export type SerialDriver = SerialDrivers[number];
export type SerialList = Serial[];
export type SerialProperty<Key extends keyof Serial> = Serial[Key];
export type SerialID = SerialProperty<'serialNumber'>;
export type SerialUniverses = SerialID[];

export interface SerialDevices extends Map<SerialID, Serial> {}

export interface SerialOptions {
  host?: string;
  port?: string;
  baudRate?: number;
  dataBits?: number;
  stopBits?: number;
  universe?: number;
  interval?: number;
  id: SerialID;
  path: string;
  driver: SerialDriver;
}
