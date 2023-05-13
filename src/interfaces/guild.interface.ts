export interface Server {
    guildId?: string;
    icon?: string;
    name?: string;
    owner?: boolean;
    ownerId?: string;
    description?: string;
    roles?: string[];
    emojis?: string[];
    approximateMemberCount?: number;
    approximatePreseneceCount?: number;
    preferredLocale?: string;
}