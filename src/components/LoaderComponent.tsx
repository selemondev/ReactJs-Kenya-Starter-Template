const LoaderComponent = () => {
	return (
		<>
			<div className='grid w-full min-h-screen place-items-center'>
				<div className='grid gap-6 text-white place-items-center'>
					<Icon icon='svg-spinners:bars-rotate-fade' className='text-4xl' />
					<p className='text-2xl'>Loading ...</p>
				</div>
			</div>
		</>
	);
};

export default LoaderComponent;
