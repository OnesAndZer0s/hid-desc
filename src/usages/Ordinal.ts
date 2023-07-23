export namespace Ordinal {
  export const UsagePage = () => 0x0A;
  export const InstanceN = ( n: number ) => Math.min( 65535, Math.max( 0, n ) );
}