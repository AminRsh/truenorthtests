// src/lib/getTestData.ts
import test1 from "@/data/GOne1.json";
import test2 from "@/data/GOne2.json";
import test3 from "@/data/GOne3.json";
import test4 from "@/data/GOne4.json";
import test5 from "@/data/GOne5.json";
import test6 from "@/data/GOne6.json";
import test7 from "@/data/GOne7.json";
import test8 from "@/data/GOne8.json";
import { Question } from "./types";

const testMap: { [key: string]: Question[] } = {
    "1": test1,
    "2": test2,
    "3": test3,
    "4": test4,
    "5": test5,
    "6": test6,
    "7": test7,
    "8": test8,
};

export const getTestData = async (id: string) => {
    return testMap[id] || null;
};
