import perkList from '../../../json/warzone-two/perks.json';
import { randomListItem } from '../../../helpers/randomListItem';
import { implodeObject } from '../../../helpers/implodeObject';

export default async function handler(req, res) {
    const perks = {
        perk1: randomListItem(perkList.slot1),
        perk2: randomListItem(perkList.slot1),
        perk3: randomListItem(perkList.slot3),
        perk4: randomListItem(perkList.slot4),
    };

    res.status(200).json(implodeObject(perks));
}