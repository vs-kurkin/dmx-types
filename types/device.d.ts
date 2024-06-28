import { SerialID } from '#serial'

export declare type DeviceMode<Key extends string = string> = Map<Key, ChannelList>

export declare interface Device {
  channels: ChannelList
  mode?: DeviceMode
  model?: string
  name?: string
  universe?: SerialID
  vendor?: string
}

export declare interface DeviceList extends Array<Device> {}

export declare type DeviceIndex<Key extends keyof DeviceList> = Key
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

export declare interface ChannelList extends Array<Channel> {}

export declare type ChannelTypes = [
  'color',
  'display',
  'head',
  'lamp',
  'laser',
  'mode',
  'rotate',
  'strobe'
]

export declare type ChannelType = ChannelTypes[number]
