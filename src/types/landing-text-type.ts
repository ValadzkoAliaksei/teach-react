type MainAtrticleType = {
  mainAtrticle: string;
  key: string;
};

export type LandingTextType = {
  logo: string;
  nav: string;
  mainAtrticles: Array<MainAtrticleType>;
  asides: string[];
  atrticles: string[];
};
