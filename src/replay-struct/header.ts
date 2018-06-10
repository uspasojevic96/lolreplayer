export class Header {
    magic: String;
    signature: Uint8Array;
    header_length: Number;
    file_length: Number;
    metadata_offset: Number;
    metadata_length: Number;
    payload_header_offset: Number;
    payload_header_length: Number;
    payload_offset: Number;
}
