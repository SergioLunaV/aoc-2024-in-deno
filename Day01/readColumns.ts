// Parse two columns into two separate vectors and return them
export async function readColumns(filePath: string): Promise<[number[], number[]]> {
    const content: string = await Deno.readTextFile(filePath);

    const firstcolumn: number[] = [];
    const secondcolumn: number[] = [];

    // Process each line
    content
        .split("\n") // Split into lines
        .filter((line) => line.trim() != "") // Remove empty lines
        .forEach((line) => {
            const [first, second] = line.trim().split(/\s+/);   // Split line by spaces
            firstcolumn.push(parseInt(first, 10));  // Add the first item to the first column
            secondcolumn.push(parseInt(second, 10)); // Add the second item to the second column
        });

    // Return both columns as a tuple
    return [firstcolumn, secondcolumn];
}