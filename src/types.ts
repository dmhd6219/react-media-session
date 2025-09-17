export enum EMediaActionType {
    NEXT_TRACK = 'nexttrack',
    PAUSE = 'pause',
    PLAY = 'play',
    PREVIOUS_TRACK = 'previoustrack',
    SEEK_BACKWARD = 'seekbackward',
    SEEK_FORWARD = 'seekforward',
    SEEK_TO = 'seekto',
    SKIP_AD = 'skipad',
    STOP = 'stop'
}

export interface IMediaSessionProps {
    title?: string;
    artist?: string;
    album?: string;
    artwork: MediaImage[];

    onNextTrack?: MediaSessionActionHandler;
    onPause?: MediaSessionActionHandler;
    onPlay?: MediaSessionActionHandler;
    onPreviousTrack?: MediaSessionActionHandler;
    onSeekBackward?: MediaSessionActionHandler;
    onSeekForward?: MediaSessionActionHandler;
    onSeekTo?: MediaSessionActionHandler;
    onSkipAd?: MediaSessionActionHandler;
    onStop?: MediaSessionActionHandler;
}
