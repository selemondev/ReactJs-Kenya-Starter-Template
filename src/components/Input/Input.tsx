const Input = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState("");

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<>
			<div className='grid space-y-4 place-items-center'>
				<input
					ref={inputRef}
					id='name'
					name='name'
					placeholder="What's your name?"
					onChange={(e) => setName(e.target.value)}
					className='appearance-none w-64 placeholder-gray-400 focus:outline-none bg-[#1f1f24] text-white border border-[#1d1d20] rounded-md py-2 px-4'
				/>
				<Link to={`/name/${name}`}>
					<button
						type='button'
						disabled={!name}
						className='py-1 px-4 text-base disabled:bg-[#2F343b] disabled:cursor-not-allowed text-white bg-[#27272A] rounded-md hover:enabled:bg-[#1f1f22] transition-all duration-200 ease-in'
					>
						Go
					</button>
				</Link>
			</div>
		</>
	);
};

export default Input;
