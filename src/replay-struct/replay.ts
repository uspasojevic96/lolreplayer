import { Header } from './header';
import { Metadata } from './metadata';
import { PayloadHeader } from './payload-header';

export class Replay {
    header: Header;
    metadata: Metadata;
    payload_header: PayloadHeader;
}
