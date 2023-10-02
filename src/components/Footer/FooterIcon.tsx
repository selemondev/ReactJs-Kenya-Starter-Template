const FooterIcon = ({ icon, link }: { icon: string; link: string }) => {
	return (
		<>
			<a href={link} target='_blank' className='flex px-4' rel="noreferrer">
				<Icon
					icon={icon}
					className='text-xl text-gray-400 transition-all duration-200 ease-in hover:text-white'
				/>
			</a>
		</>
	);
};

export default FooterIcon;
