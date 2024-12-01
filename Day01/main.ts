import { readColumns } from "./readColumns.ts";
import { DistanceCalculator } from "./distanceCalculator.ts";

async function main() {
    const filePath = "input.txt"
    const [firstColumn, secondColumn] = await readColumns(filePath);

    const distanceCalculator: DistanceCalculator = new DistanceCalculator();
    const totalDistance: number = distanceCalculator.calculateTotalDistance(firstColumn, secondColumn);

    console.log("Total distance: ", totalDistance);
}

main();