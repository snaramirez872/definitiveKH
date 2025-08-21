import { TimeSince } from "@/lib/types";

export function getTimeSince(timestamp: string): TimeSince {
    const past = new Date(timestamp).getTime();
    const now = Date.now();

    const diff = Math.max(0, now - past);

    const secs = Math.floor(diff / 1000) % 60;
    const mins = Math.floor(diff / (1000 * 60)) % 60;
    const hrs = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return { days, hrs, mins, secs };
}