import { Page } from "@/types/react";

// A simple wrapper for creating functional pages
const page = <T = {}>(page: Page<T>) => page;

export default page;
