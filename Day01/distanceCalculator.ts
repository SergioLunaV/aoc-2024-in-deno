export class DistanceCalculator {
    // Adds each element of a vector and returns the sum
    public sumUp(v: number[]): number {
        let sum = 0;

        for (let i = 0; i < v.length; i++) {
            sum += v[i];
        }

        return sum;
    }

    // Calculates the distances between each element of two given vectors sorted by ascending order
    public calculateDistances(v1: number[], v2: number[]): number[] {
        const distances: number[] = [];

        for (let i = 0; i < v1.length; i++){
            distances.push(Math.abs(v1[i] - v2[i]));
        }

        return distances;
    }

    // Sorts two vectors, calculates their absolute distance and adds them up.
    public calculateTotalDistance(v1: number[], v2: number[]): number {
        v1.sort((a, b) => a - b);
        v2.sort((a, b) => a - b);

        const distances: number[] = this.calculateDistances(v1, v2);

        return this.sumUp(distances);
    }

    // Computes the similarity scores between two vectors
    public computeSimilarityScores(v1: number[], v2: number[]): number[] {
        const similarityScores: number[] = [];
        let coincidences = 0;

        for(let i = 0; i < v1.length; i++) {
            for(let j = 0; j < v2.length; j++) {
                if (v1[i] == v2[j]) {
                    coincidences++;
                }
            }
            similarityScores.push(v1[i] * coincidences);
            coincidences = 0;
        }

        return similarityScores;
    }

    // Computes the similarity of each element of two vectors and returns the sum of the similarities 
    public computeSimilarityScore(v1: number[], v2: number[]): number {
        const similarityScores: number[] = this.computeSimilarityScores(v1, v2);

        return this.sumUp(similarityScores);
    }
}