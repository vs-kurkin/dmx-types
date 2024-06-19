import { Serial, SerialNumber, Universe } from '#serial'

export declare type DeviceMode = Record<string, ChannelList>

export declare interface Device {
  channels: ChannelList
  mode?: DeviceMode
  model?: string
  name?: string
  universe?: Universe
  vendor?: string
}

export type DeviceList = Device[]
export type DeviceIndex = keyof DeviceList
export type DeviceProperty<Key extends keyof Device> = Device[Key]
export type DeviceMap = Map<SerialNumber, Serial>

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

export declare type ChannelList = Channel[]
export declare type ChannelType = keyof typeof ChannelTypes
