declare module "*.svg" {
  const content: any;
  export default content;
}

// In custom.d.ts
declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
// For SignUpLanding.tsx or SignUpLanding.ts
declare module "./SignUpLanding" {
  const defaultExport: React.ComponentType; // Adjust type as necessary, e.g., any specific props type
  export default defaultExport;
}

declare module "React" {
  export type ComponentType = React.ComponentType;
}
