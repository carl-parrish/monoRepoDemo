"use client";

import { trpc } from "@web/app/trpc";
import { useEffect, useState} from "react";

export default function ClientSide() {
    const [greeting, setGreeting] = useState<string>("");
    useEffect(() => {
        trpc.hello
            .query({ name: `Tom` })
            .then(({greeting}) => setGreeting(greeting));
    }, []);
    return <p> I am client side: {greeting}</p>;
}