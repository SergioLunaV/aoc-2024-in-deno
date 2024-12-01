import { expect } from "jsr:@std/expect";
import { DistanceCalculator } from "./distanceCalculator.ts";

Deno.test("sumUp adds each element of a vector and returns the sum", () => {
    const v: number[] = [1, 2, 3, 4, 5];
    const sum: number = new DistanceCalculator().sumUp(v);

    expect(sum).toBe(15);
});

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

    const totalDistance: number = new DistanceCalculator().calculateTotalDistance(v1, v2);

    expect(totalDistance).toBe(11);
});

Deno.test("computeSimilarityScores computes the similarity scores between two vectors", () => {
    const v1: number[] = [3, 4, 2, 1, 3, 3];
    const v2: number[] = [4, 3, 5, 3, 9, 3];

    const expectedSimilarityScores: number[] = [9, 4, 0, 0, 9, 9];
    const similarityScores: number[] = new DistanceCalculator().computeSimilarityScores(v1, v2);

    expect(similarityScores).toEqual(expectedSimilarityScores);    
});

Deno.test("computeSimilarityScore computes the similarity of each element of two vectors and returns the sum of the similarities", () => {
    const v1: number[] = [3, 4, 2, 1, 3, 3];
    const v2: number[] = [4, 3, 5, 3, 9, 3];

    const similarityScore: number = new DistanceCalculator().computeSimilarityScore(v1, v2);

    expect(similarityScore).toBe(31);
});