declare module "aos" {
  const AOS: {
    init: (options?: unknown) => void;
    refresh: () => void;
    refreshHard?: () => void;
  };
  export default AOS;
}
