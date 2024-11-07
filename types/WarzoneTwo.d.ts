export type ClassPerks = {
    perk1: string;
    perk2: string;
    perk3: string;
    perk4: string;
}

export type GunAttachments = {
    attach1: string;
    attach2: string;
    attach3: string;
    attach4: string;
    attach5: string;
}

export type ClassProps = {
    primary: string;
    p_attachments: GunAttachments;
    secondary: string;
    s_attachments: GunAttachments;
    tactical: string;
    lethal: string;
    perks: ClassPerks;
}