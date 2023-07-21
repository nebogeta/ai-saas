"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("fff23d73-515f-4f44-b922-c4379e879665");
    }, []);

    return null;
};