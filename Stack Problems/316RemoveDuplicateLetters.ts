function removeDuplicateLetters(s: string): string {
        const lastOccurrence: number[] = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }

    const inArray: boolean[] = new Array(26).fill(false);
    // Simulate stack with array of characters
    const result: string[] = new Array(s.length);
    let stackPointer = 0;

    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        const idx = current.charCodeAt(0) - 'a'.charCodeAt(0);

        if (inArray[idx]) continue;

        while (
            stackPointer > 0 &&
            result[stackPointer - 1] > current &&
            lastOccurrence[(result[stackPointer - 1] as string).charCodeAt(0) - 'a'.charCodeAt(0)] > i
        ) {
            const removed = result[--stackPointer] as string;
            inArray[removed.charCodeAt(0) - 'a'.charCodeAt(0)] = false;
        }

        result[stackPointer++] = current;
        inArray[idx] = true;
    }

    return result.slice(0, stackPointer).join("");
};