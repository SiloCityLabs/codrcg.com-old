import secondaryList from '../../../json/modern-warfare-two/secondary.json';
import { randomListItem } from '../../../helpers/randomListItem';
import { Weapon } from '@/app/lib/definitions';

export default async function handler(req, res) {
    const secondary: Weapon = randomListItem(secondaryList);

    res.status(200).json(secondary);
}