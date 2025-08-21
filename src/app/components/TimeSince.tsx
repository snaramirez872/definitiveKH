"use client"
import { useEffect, useState } from "react";
import { getTimeSince } from "@/utils/timeSince";
import { pluralize } from "@/utils/oneLineUtils";

export default function TimeSince({ time }: { time: string }) {
    const [since, setSince] = useState(() => getTimeSince(time));
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        const interval = setInterval(() => {
            setSince(getTimeSince(time));
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    if (!hasMounted) return null;

    const { days, hrs, mins, secs } = since;

    return (
        <span>
            {pluralize((days), "day")}, {pluralize(hrs, "hour")}, {pluralize(mins, "minute")}, and {pluralize(secs, "second")}
        </span>
    );
}