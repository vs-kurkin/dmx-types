import type { Serial } from '#serial'

export declare interface Device {
  channels: Channel[]
  mode?: Record<string, Channel[]>
  model?: string
  name?: string
  universe?: string
  vendor?: string
}

export type DeviceList = Device[]
export type DeviceIndex = DeviceList[number]
export type DeviceProperty<Key extends keyof Device> = DeviceIndex[Key]
export type DeviceMap = Map<Serial['serialNumber'], Serial>

export declare interface Channel {
  amount?: number
  default?: number
  max?: number
  min?: number
  name?: string
  steps?: number[]
  type: keyof typeof ChannelType
  value: number
}

export declare enum ChannelType {
  'strobe', 'rotate', 'color', 'display', 'laser', 'lamp', 'head', 'mode',
}
