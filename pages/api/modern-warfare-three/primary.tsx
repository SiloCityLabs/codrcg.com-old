import primaryList from '../../../json/modern-warfare-three/primary.json';
import { randomListItem } from '../../../helpers/randomListItem';
import { Weapon } from '@/app/lib/definitions';

export default async function handler(req, res) {
    const primary: Weapon = randomListItem(primaryList);

    res.status(200).json(primary);
}