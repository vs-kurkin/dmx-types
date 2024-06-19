import { Serial, SerialNumber, UniverseID } from '#serial'

export declare type DeviceMode = Record<string, ChannelList>

export declare interface Device {
  channels: ChannelList
  mode?: DeviceMode
  model?: string
  name?: string
  universe?: UniverseID
  vendor?: string
}

export declare type DeviceMap = Map<SerialNumber, Serial>
export declare interface DeviceList {
  [key: number]: Device
}

export declare type DeviceIndex = keyof DeviceList
export declare type DeviceProperty<Key extends keyof Device> = Device[Key]

export declare interface Channel {
  amount?: number
  default?: number
  max?: number
  min?: number
  name?: string
  steps?: number[]
  type: ChannelType
  value?: number
}

export declare enum ChannelTypes {
  'strobe',
  'rotate',
  'color',
  'display',
  'laser',
  'lamp',
  'head',
  'mode',
}

export declare interface ChannelList {
  [key: number]: Channel
}
export declare type ChannelType = keyof typeof ChannelTypes
