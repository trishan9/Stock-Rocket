import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0",
		proxy: {
			"/api": {
				target: "https://stock-rocket-si81.onrender.com",
				changeOrigin: true,
				secure: false,
				ws: true,
			},
		},
	},
});
