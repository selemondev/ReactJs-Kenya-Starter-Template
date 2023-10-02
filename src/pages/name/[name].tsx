const Name = () => {
	const { name } = useParams();
	return (
		<>
			<div className='grid w-full min-h-screen place-items-center'>
				<div className='grid space-y-3 place-items-center'>
					<h1 className='text-2xl text-white'>Welcome: {name}</h1>
					<Link to='/'>
						<button className='py-2 px-4 text-base text-white bg-[#27272A] rounded-md hover:bg-[#1f1f22] transition-all duration-200 ease-in'>
							Go back home
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Name;
