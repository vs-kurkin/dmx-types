export declare interface Device {
  channels: Channel[];
  mode?: Record<string, Channel[]>;
  model?: string;
  name?: string;
  universe?: string;
  vendor?: string;
}

export declare interface Channel {
  amount?: number;
  default?: number;
  max?: number;
  min?: number;
  name?: string;
  steps?: number[];
  type: keyof typeof ChannelType;
  value: number;
}

export declare enum ChannelType {
  'strobe',
  'rotate',
  'color',
  'display',
  'laser',
  'lamp',
  'head',
  'mode',
}
