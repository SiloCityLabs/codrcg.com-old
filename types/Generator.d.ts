export type Weapon = {
    name: string;
    type: string;
    game: string;
    no_attach?: boolean;
    isDlc?: boolean;
}

export type Perk = {
    name: string;
    type: string;
    game: string;
    isDlc?: boolean;
}

export type Wildcard = {
    name: string;
    type: string;
    game: string;
    description: string;
    isDlc?: boolean;
}

export type Streak = {
    name: string;
    type: string;
    game: string;
    score: number;
    isDlc?: boolean;
}

export type Equipment = {
    name: string;
    type: string;
    game: string;
    isDlc?: boolean;
}

export type ZombiesMap = {
    name: string;
    type: string;
    game: string;
}
