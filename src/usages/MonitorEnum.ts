export namespace MonitorEnum {
  export const UsagePage = () => 0x81;
  export const Enum = ( n: number ) => Math.min( 65535, Math.max( 0, n ) );
}