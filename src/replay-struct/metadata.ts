import { Stats } from './stats';

export class Metadata {
    gameLength: number;
    gameVersion: String;
    lastGameChunkId: number;
    lastKeyFrameId: number;
    statsJson: Stats[];
}
