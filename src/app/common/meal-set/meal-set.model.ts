import {Meal} from '../meal/meal.model';
import {Price} from '../meal/price.model';
/**
 * The class describes a set of meals that is provided as one and cannot be bought separately.
 */
export class MealSet {
    constructor(name: string,
        meals: Meal[],
        price: Price) {
    }
}