
export declare interface Device {
  channels: Channel[];
  mode?: Record<string, Channel[]>;
  universe?: string;
  vendor?: string;
  model?: string;
}

export declare interface Channel {
  type: string;
  value: number;
  name?: string;
  default?: number;
  min?: number;
  max?: number;
  amount?: number;
  steps?: number[];
}
