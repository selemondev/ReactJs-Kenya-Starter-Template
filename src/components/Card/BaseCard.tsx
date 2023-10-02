const BaseCard: React.FC<{
	children: React.ReactNode;
	color: string;
	link: string;
}> = ({ children, color, link }) => {
	const [mouse, ref] = useMouse<HTMLDivElement>();
	const containerStyle = {
		"--x": `${mouse.elementX}px`,
		"--y": `${mouse.elementY}px`,
		"--color": color,
	} as React.CSSProperties;
	return (
		<div>
			<div
				ref={ref}
				style={containerStyle}
				className='border-gradient group relative w-72 rounded-xl before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-xl h-80 lg:p-16'
			>
				<a href={link} target='_blank' rel="noreferrer">
					<div className='absolute inset-0 icon rounded-[11px] grid place-items-center bg-[#202023] transition-colors duration-300 '>
						<div className='relative grid px-4 space-y-4 place-items-center'>
							{children}
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default BaseCard;
