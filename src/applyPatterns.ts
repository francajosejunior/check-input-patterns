export const applyPatterns = (value: string, patterns: RegExp | RegExp[]) => {
    let normalPatterns: RegExp[] = [];

    if (Array.isArray(patterns)) {
        normalPatterns = [...patterns];
    } else if (patterns) {
        normalPatterns = [patterns];
    }

    if (normalPatterns.length > 0) {
        return normalPatterns.reduce(
            (value, pattern) => value.replace(pattern, ""),
            value
        );
    }

    return value;
};

export default applyPatterns;