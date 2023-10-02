/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";
import Pages from "vite-plugin-pages";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		Pages(),
		AutoImport({
			dts: true,
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.md$/, // .md
			],

			imports: [
				"react",
				"react-router-dom",
				"vitest",

				// configure third party APIs to be auto imported as shown below
				{
					"@uidotdev/usehooks": [
						"useDebounce",
						"useLocalStorage",
						"useWindowSize",
						"usePrevious",
						"useIntersectionObserver",
						"useNetworkState",
						"useMediaQuery",
						"useOrientation",
						"useSessionStorage",
						"usePreferredLanguage",
						"useFetch",
						"useContinousRetry",
						"useVisibilityChange",
						"useScript",
						"useRenderInfo",
						"useRenderCount",
						"useRandomInterval",
						"useIntervalWhen",
						"useInterval",
						"useLockBodyScroll",
						"useCountDown",
						"useIsClient",
						"useQueue",
						"useHover",
						"useTimeout",
						"useEventListener",
						"useKeyPress",
						"useMap",
						"useThrottle",
						"useSet",
						"useCopyToClipboard",
						"useBattery",
						"useIsIdle",
						"useToggle",
						"useHistoryState",
						"useGeolocation",
						"usePageLeave",
						"useObjectState",
						"useLogger",
						"useDocumentTitle",
						"useIsFirstRender",
						"useLongPress",
						"useFavicon",
						"useDefault",
						"useWindowScroll",
						"useMeasure",
						"useClickAway",
						"useList",
						"useCounter",
						"useMouse",
					],
				},

				{
					"@reduxjs/toolkit": ["configureStore", "createSlice"],
				},

				{
					"@reduxjs/toolkit/query/react": [
						"createApi",
						"fetchBaseQuery",
						"setupListeners",
					],
				},

				{
					'@testing-library/react': ['render', 'fireEvent', 'screen', 'cleanup', 'renderHook'],
				},

				{
					"react-redux": [
						"TypedUseSelectorHook",
						"useDispatch",
						"useSelector",
						"ConnectedProps",
						"connect",
						"Provider",
						"shallowEqual",
						"useStore",
						"createStoreHook",
						"createDispatchHook",
						"createSelectorHook",
						"batch",
					],
				},
			],
			resolvers: [
				(componentName) => {
					if (componentName.startsWith("Icon"))
						return { name: componentName, from: "@iconify/react" };
				},
			],
		}),
	],
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: "./src/tests/tests.setup.ts",
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
