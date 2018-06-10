export class Header {
    magic: String;
    signature: Uint8Array;
    header_length: number;
    file_length: number;
    metadata_offset: number;
    metadata_length: number;
    payload_header_offset: number;
    payload_header_length: number;
    payload_offset: number;
}
