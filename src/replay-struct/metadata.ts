import { Stats } from './stats';

export class Metadata {
    gameLength: Number;
    gameVersion: Number;
    lastGameChunkId: Number;
    lastKeyFrameId: Number;
    statsJson: Stats[];
}
