import { Component } from "@/types/react";

// A simple wrapper for creating functional components
const component = <T = {}>(component: Component<T>) => component;

export default component;
