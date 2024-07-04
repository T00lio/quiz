declare module "*.svg" {
  const content: unknown;
  export default content;
}

declare module "./SigninForm" {
  const SigninForm: React.ComponentType;
  export default SigninForm;
}
declare module "../UserContext/UserContext" {
  const UserContext: React.Context<UserContextType | undefined>;
  export { UserContext };
}

declare module "./pages/QuizMenu" {
  const QuizMenu: React.ComponentType;
  export default QuizMenu;
}

declare module "./pages/QuizPage_new" {
  const QuizPage_new: React.ComponentType;
  export default QuizPage_new;
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
