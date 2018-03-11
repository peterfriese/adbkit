/**
 * adbkit typings, manually written by Peter Friese
 */

export = adbkit;
export as namespace adbkit;

declare namespace adbkit {
  export function createClient(options?: ClientOptions): Client;

  export interface ClientOptions {
    host?: string;
    port?: number;
  }

  export interface Client {
    listDevices(): Promise<[Device]>;
    trackDevices(): Promise<Tracker>;
    getProperties(serial: string): Promise<{}>;
    getPackages(serial: string): Promise<{}>;
  }

  export interface Device {
    id: string;
    type: string;
  }

  export interface Tracker {
    on(event: 'add', listener: (device: Device) => void): this
    on(event: 'remove', listener: (device: Device) => void): this
    on(event: 'change', listener: (device: Device) => void): this
    on(event: 'changeSet', listener: (changes: ChangeSet) => void): this
    on(event: 'end', listener: () => void): this
    on(event: string, listener: Function): this
  }

  export interface ChangeSet {
    removed: Array<Device>
    changed: Array<Device>
    added: Array<Device>
  }
}