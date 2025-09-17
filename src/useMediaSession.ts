import {useEffect} from 'react';

import {EMediaActionType, type IMediaSessionProps} from "./types";
import {MEDIA_SESSION_SUPPORTED} from "./constants";

const useMediaSession = (props: IMediaSessionProps) => {
    const {
        title = '',
        artist = '',
        album = '',
        artwork = [],

        onNextTrack = null,
        onPause = null,
        onPlay = null,
        onPreviousTrack = null,
        onSeekBackward = null,
        onSeekForward = null,
        onSeekTo = null,
        onSkipAd = null,
        onStop = null,
    } = props;

    const mediaSession = MEDIA_SESSION_SUPPORTED ? navigator.mediaSession : null;

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.metadata = new MediaMetadata({
            title,
            artist,
            album,
            artwork,
        });
        return () => {
            mediaSession.metadata = null;
        };
    }, [title, artist, album, artwork, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.NEXT_TRACK, onNextTrack);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.NEXT_TRACK, null);
        };
    }, [onNextTrack, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.PAUSE, onPause);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.PAUSE, null);
        };
    }, [onPause, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.PLAY, onPlay);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.PLAY, null);
        };
    }, [onPlay, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.PREVIOUS_TRACK, onPreviousTrack);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.PREVIOUS_TRACK, null);
        };
    }, [onPreviousTrack, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.SEEK_BACKWARD, onSeekBackward);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.SEEK_BACKWARD, null);
        };
    }, [onSeekBackward, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.SEEK_FORWARD, onSeekForward);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.SEEK_FORWARD, null);
        };
    }, [onSeekForward, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.SEEK_TO, onSeekTo);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.SEEK_TO, null);
        };
    }, [onSeekTo, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.SKIP_AD, onSkipAd);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.SKIP_AD, null);
        };
    }, [onSkipAd, mediaSession]);

    useEffect(() => {
        if (!mediaSession) return;

        mediaSession.setActionHandler(EMediaActionType.STOP, onStop);
        return () => {
            mediaSession.setActionHandler(EMediaActionType.STOP, null);
        };
    }, [onStop, mediaSession]);


};

export default useMediaSession;
