/* eslint-disable @typescript-eslint/no-non-null-assertion */
type FoodItem = { food: string; cuisine: string; rating: number };
type FoodRatingItem = Pick<FoodItem, 'food' | 'rating'>;
type PriorityQueue<T> = any; // ts issues with @datastructures-js/priority-queue

class FoodRatings {
  private topRatedQueuePerCuisine = new Map<string, PriorityQueue<FoodRatingItem>>();
  private foodMap: Record<string, FoodItem> = {};

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    for (let i = 0; i < foods.length; i += 1)
      this.addFood(foods[i]!, cuisines[i]!, ratings[i]!);
  }

  addFood(food: string, cuisine: string, rating: number): void {
    const foodItem: FoodItem = {
      food,
      cuisine,
      rating,
    };

    this.foodMap[food] = foodItem;
    this.addFoodItemToTopRatedQueue(foodItem);
  }

  private compareFoodItems(food1: FoodRatingItem, food2: FoodRatingItem): number {
    if (food1.rating !== food2.rating) return food2.rating - food1.rating;

    if (food1.food < food2.food) return -1;
    else if (food1.food > food2.food) return 1;

    return 0;
  }

  private addFoodItemToTopRatedQueue(foodItem: FoodItem): void {
    const queueFoodItem = { food: foodItem.food, rating: foodItem.rating };

    if (this.topRatedQueuePerCuisine.has(foodItem.cuisine))
      this.topRatedQueuePerCuisine.get(foodItem.cuisine)!.enqueue(queueFoodItem);
    else {
      const topRatedQueue = new PriorityQueue({
        compare: this.compareFoodItems.bind(null),
      });

      topRatedQueue.enqueue(queueFoodItem);

      this.topRatedQueuePerCuisine.set(foodItem.cuisine, topRatedQueue);
    }
  }

  changeRating(food: string, newRating: number): void {
    const foodItem = this.foodMap[food];

    if (foodItem === undefined) throw new Error('invalid food');

    foodItem.rating = newRating;

    const topRatedQueue = this.topRatedQueuePerCuisine.get(foodItem.cuisine)!;

    if (topRatedQueue.front().food === food) topRatedQueue.dequeue();

    topRatedQueue.enqueue({ food, rating: newRating });
  }

  highestRated(cuisine: string): string {
    const topRatedQueue = this.topRatedQueuePerCuisine.get(cuisine);

    if (topRatedQueue === undefined) throw new Error('invalid cuisine');

    let topRated = topRatedQueue.front();
    let upToDateRating = this.foodMap[topRated.food]!.rating;

    while (topRated.rating !== upToDateRating) {
      const front = topRatedQueue.dequeue();
      front.rating = upToDateRating;
      topRatedQueue.enqueue(front);

      topRated = topRatedQueue.front();
      upToDateRating = this.foodMap[topRated.food]!.rating;
    }

    return topRated.food;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
