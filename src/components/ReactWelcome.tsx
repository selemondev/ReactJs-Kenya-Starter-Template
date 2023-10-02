import Cards from "./Card/Cards";
import Input from "./Input/Input";
const ReactWelcome = () => {
	return (
		<>
			<div className='flex items-center justify-center pt-10'>
				<div className='grid space-y-10 place-items-center'>
					<div className='text-center'>
						<div className='grid my-4 place-items-center'>
							<a href='https://react.dev' target='_blank' rel="noreferrer">
								<img
									src={
										"https://www.reactdevske.org/_next/static/media/logo.c576495d.svg"
									}
									className='logo react'
									alt='ReactJs Kenya Logo'
								/>
							</a>
						</div>
						<h1 className='text-xl font-semibold text-white lg:text-5xl'>
							Welcome To ReactJS Kenya Starter Template!
						</h1>
					</div>

					<div className='pt-6'>
						<Input />
					</div>

					<div className='grid pt-10 place-items-center'>
						<h1 className='text-4xl text-white'>Features</h1>
					</div>

					<div>
						<Cards />
					</div>
				</div>
			</div>
		</>
	);
};

export default ReactWelcome;
