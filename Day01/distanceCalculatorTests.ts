import { expect } from "jsr:@std/expect";
import { DistanceCalculator } from "./distanceCalculator.ts";

Deno.test("calculateDistances returns the absolute distances between two vectors sorted by ascending order", () => {
    const v1: number[] = [1, 2, 3, 3, 3, 4];
    const v2: number[] = [3, 3, 3, 4, 5, 9];
    
    const expectedDistances: number[] = [2, 1, 0, 1, 2, 5];
    const calculatedDistances: number[] = new DistanceCalculator().calculateDistances(v1, v2);

    expect(calculatedDistances).toEqual(expectedDistances);
});

Deno.test("calculateTotalDistance sorts two vectors, calculates their absolute distance and adds them up.", () => {
    const v1: number[] = [3, 4, 2, 1, 3, 3];
    const v2: number[] = [4, 3, 5, 3, 9, 3];

    const calculatedTotalDistance: number = new DistanceCalculator().calculateTotalDistance(v1, v2);

    expect(calculatedTotalDistance).toBe(11);
});