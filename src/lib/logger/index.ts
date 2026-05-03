import pino from 'pino'

const isDev = process.env.NODE_ENV !== 'production'

const externalStreams: pino.DestinationStream[] = []

export const addLogStream = (stream: pino.DestinationStream) => {
    externalStreams.push(stream)
}

export const createLogger = (name: string) => {
    const streams: pino.StreamEntry[] = [
        {
            stream: isDev
                ? pino.destination({ dest: 1, sync: true })
                : pino.destination(1)
        }
    ]

    for (const ext of externalStreams) {
        streams.push({ stream: ext })
    }

    return pino(
        {
            name,
            level: isDev ? 'debug' : 'info',
            timestamp: pino.stdTimeFunctions.isoTime
        },
        pino.multistream(streams)
    )
}

export const log = createLogger('app')
export type Logger = ReturnType<typeof createLogger>