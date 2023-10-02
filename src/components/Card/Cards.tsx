import BaseCard from './BaseCard';
const Cards = () => {
	return (
		<>
			<div className='gap-8 mt-6 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3'>
				<BaseCard
					link='https://github.com/hannoeru/vite-plugin-pages'
					color='#22C55E'
				>
					<div className='grid place-items-center'>
						<Icon
							icon='devicon-plain:reactrouter'
							className='text-4xl text-white group-hover:text-[#22C55E]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>
								File-Based Routing
							</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								{' '}
								Each route in your application corresponds to a specific file or
								folder, simplifying route management and improving project
								organization.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://www.typescriptlang.org' color='#3278C6'>
					<div className='grid place-items-center'>
						<Icon
							icon='akar-icons:typescript-fill'
							className='text-4xl text-white group-hover:text-[#3278C6]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>TypeScript</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								TypeScript is a statically-typed superset of JavaScript that
								enhances code quality, robustness, readability and development
								efficiency.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://eslint.org' color='#4B32C3'>
					<div className='grid place-items-center'>
						<Icon
							icon='simple-icons:eslint'
							className='text-4xl text-white group-hover:text-[#4B32C3]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Eslint</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								{' '}
								ESLint is a code analysis tool that enforces coding standards
								and detects errors in JavaScript projects, ensuring code
								quality.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://react-redux.js.org/' color='#4B32C3'>
					<div className='grid place-items-center'>
						<Icon
							icon='simple-icons:redux'
							className='text-4xl text-white group-hover:text-[#4B32C3]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Redux</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								Redux is a predictable state management lib for JavaScript apps,
								designed to effectively manage and control the state within an
								application.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://usehooks.com/' color='#ff0000'>
					<div className='grid place-items-center'>
						<Icon
							icon='pajamas:hook'
							className='text-4xl text-white group-hover:text-[#ff0000]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Use Hooks</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								The useHooks library is a collection of modern, server-safe
								React hooks built to enhance the developer experience when
								building React apps.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://icones.netlify.app' color='#FFA500'>
					<div className='grid place-items-center'>
						<Icon
							icon='mdi:fire'
							className='text-4xl text-white group-hover:text-[#FFA500]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Icons</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								Use any icon in your React application from your favourite icon
								set from the Icones library which houses over 100K+ icons and
								are free to use.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard
					link='https://github.com/antfu/unplugin-auto-import'
					color='#27BAC9'
				>
					<div className='grid place-items-center'>
						<Icon
							icon='ph:gear'
							className='text-4xl text-white group-hover:text-[#27BAC9]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>
								On Demand Imports
							</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								Boost your productivity with auto imports. Automatic imports for
								your React APIs, utilities, stores and third party APIs.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://vitest.dev/' color='#CACB29'>
					<div className='grid place-items-center'>
						<Icon
							icon='simple-icons:vitest'
							className='text-4xl text-white group-hover:text-[#CACB29]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Vitest</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								Vitest is a modern unit testing framework for Vite based
								applications. Vitest provides features to seamlessly test your
								React applications with ease.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://github.com/antfu/ni' color='#E3B341'>
					<div className='grid place-items-center'>
						<Icon
							icon='clarity:lightbulb-solid'
							className='text-4xl text-white group-hover:text-[#E3B341]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Ni</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								{' '}
								Ni enables you to use the right package manager for your
								project. It supports various package managers such as NPM, Yarn,
								Pnpm and Bun.
							</p>
						</div>
					</div>
				</BaseCard>

				<BaseCard link='https://tailwindcss.com/' color='#1AB4B9'>
					<div className='grid place-items-center'>
						<Icon
							icon='simple-icons:tailwindcss'
							className='text-4xl text-white group-hover:text-[#1AB4B9]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>TailwindCss</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								Tailwind CSS is a popular utility-first CSS framework that
								simplifies UI development by providing a set of pre-defined,
								atomic CSS classes.
							</p>
						</div>
					</div>
				</BaseCard>


				<BaseCard link='https://testing-library.com/' color='#ff0000'>
					<div className='grid place-items-center'>
						<Icon
							icon='game-icons:octopus'
							className='text-4xl text-white group-hover:text-[#ff0000]'
						/>
					</div>

					<div>
						<div className='grid place-items-center'>
							<h1 className='text-2xl font-medium text-white '>Testing Library</h1>
						</div>

						<div className='mt-3 text-sm font-light text-white/70'>
							<p className='leading-6 tracking-normal'>
								A lightweight tool designed for testing web pages. It facilitates querying and interacting with DOM nodes in the browser environment.
							</p>
						</div>
					</div>
				</BaseCard>
			</div>
		</>
	);
};

export default Cards;
