import FooterIcon from "./FooterIcon";

const socialIcons = [
	{
		id: 1,
		icon: "mdi:twitter",
		link: "https://twitter.com/reactdevske",
	},

	{
		id: 2,
		icon: "mdi:github",
		link: "https://github.com/reactdeveloperske",
	},
];
const FooterBar = () => {
	return (
		<>
			<div className='my-6'>
				<div className='py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-800 before:mr-4 after:flex-[1_1_0%] after:border-t after:border-gray-800 after:ml-4'>
					<img
						src={
							"https://www.reactdevske.org/_next/static/media/logo.c576495d.svg"
						}
						alt='Vue Js Kenya Logo'
						className='w-10 h-10'
					/>
				</div>

				<div className='flex items-center justify-center md:flex md:justify-end'>
					{socialIcons.map((socialIcon) => {
						const { icon, id, link } = socialIcon;
						return (
							<div key={id}>
								<FooterIcon key={id} icon={icon} link={link} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default FooterBar;
