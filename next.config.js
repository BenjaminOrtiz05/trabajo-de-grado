/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Opcional: habilita el compilador SWC para minificación más rápida
  compiler: {
    // Opcional: si usas styled-components o Tailwind con optimización
    styledComponents: true,
  },
};

module.exports = nextConfig;
