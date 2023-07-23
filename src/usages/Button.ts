export namespace Button {
  export const UsagePage = () => 0x09;
  export const NoButton = 0x00;
  export const ButtonN = ( n: number ) => Math.min( 65535, Math.max( 0, n ) );
}