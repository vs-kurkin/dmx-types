import { SerialID } from '#serial'

export type DeviceMode<Key extends string = string> = Map<Key, ChannelList>;

export interface Device {
  channels: ChannelList;
  mode?: DeviceMode;
  model?: string;
  name?: string;
  universe?: SerialID;
  vendor?: string;
}

export type DeviceList = Device[];

export type DeviceIndex<Key extends keyof DeviceList = number> = Key;
export type DeviceProperty<Key extends keyof Device = keyof Device> = Device[Key];

export interface Channel {
  amount?: number;
  default?: number;
  max?: number;
  min?: number;
  name?: string;
  steps?: number[];
  type: ChannelType;
  value?: number;
}

export type ChannelList = Channel[];

export type ChannelTypes = [
  'color',
  'display',
  'head',
  'lamp',
  'laser',
  'mode',
  'rotate',
  'strobe'
];

export type ChannelType = ChannelTypes[number];
