export class DistanceCalculator {
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
        
        let totalDistance = 0;

        for (let i = 0; i < distances.length; i++) {
            totalDistance += distances[i];

        }

        return totalDistance;
    }
}