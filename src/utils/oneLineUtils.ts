// Pad 0 if val.toString().length == 1
export function pad(val: number): string {
    return val.toString().padStart(2, '0');
}

// Pluralize labels for TimeSince if val == 1
export function pluralize(val: number, label: string) {
    return `${pad(val)} ${label}${val === 1 ? '' : 's'}`;
}