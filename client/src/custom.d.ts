declare module "*.svg" {
  const content: unknown;
  export default content;
}

// In custom.d.ts
declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: unknown;
  export default value;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "React" {
  export type ComponentType = React.ComponentType;
}
