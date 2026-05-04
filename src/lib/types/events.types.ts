export type EventName =
    | 'NEW_MESSAGE'
    | 'MESSAGE_STATUS_UPDATE'
    | 'SESSION_STATUS_CHANGE'
    | 'CONTACT_UPDATE'
    | 'CHAT_PRESENCE_UPDATE'
    | 'INTERNAL_MESSAGE'
    | 'CHAT_TAGS_UPDATE'

export type EventPayload = {
    'NEW_MESSAGE': {
        sessionId: string
        chatId: string
        message: any
    }
    'MESSAGE_STATUS_UPDATE': {
        sessionId: string
        messageId: string
        status: string
        chatId: string
    }
    'SESSION_STATUS_CHANGE': {
        sessionId: string
        status: string
    }
    'CONTACT_UPDATE': {
        sessionId: string
        contact: any
    }
    'CHAT_PRESENCE_UPDATE': {
        sessionId: string
        remoteJid: string
        lastKnownPresence: string
    }
    'INTERNAL_MESSAGE': {
        sessionId: string
        chatId: string
        internalMessage: any
    }
    'CHAT_TAGS_UPDATE': {
        sessionId: string
        chatId: string
        tags: any[]
    }
}

export type Event<T extends EventName = EventName> = {
    event: T
    data: EventPayload[T]
    timestamp: number
}