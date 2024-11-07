import lethalList from '../../../json/warzone-two/lethal.json';
import { randomListItem } from '../../../helpers/randomListItem';
import { Equipment } from '@/app/lib/definitions';

export default async function handler(req, res) {
    const lethal: Equipment = randomListItem(lethalList);

    res.status(200).json(lethal);
}