import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.microlink.io",
			},
		],
	},
	reactCompiler: true,
};

export default nextConfig;
