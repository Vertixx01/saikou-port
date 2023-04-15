import React, { useEffect } from 'react';
import AppBar from './AppBar';
import searchUser from './anilist/functions/searchUser';
import { ISUser, ITT } from './anilist/QInterfaces';
import getTT from './anilist/functions/getTT';

function App() {
	const [user, setUser] = React.useState<ISUser | null>(null);
	const [TTListC, setTTListC] = React.useState<ITT[]>();
	useEffect(() => {
		searchUser('Vertixx').then(async (res) => {
			setUser(res);
		}).then(async () => {
			user?.statistics.anime.statuses[1].mediaIds.map(async (id) => {
				await getTT(id).then((res) => {
					setTTListC((prev) => {
						if (prev) {
							return [...prev, res];
						}
						return [res];
					});
				});
			});
		});
	}, []);
	return (
		<div className="h-screen w-screen bg-[#121212] overflow-y-scroll no-scrollbar">
			<div className="flex-none">
				<AppBar />
			</div>
			<nav className="flex justify-between items-center h-20 text-white mt-4">
				{user && (
					<div className="flex items-center">
						<div className="ml-8 mt-2">
							<h1 className="text-xl font-bold">{user.name}</h1>
							<h2 className="text-sm text-gray-400">Episodes Watched <span className="text-[#616ce7] font-bold">{user.statistics.anime.episodesWatched}</span></h2>
						</div>
					</div>
				) || (
						<div className="flex items-center">
						</div>
					)}
				<div className="flex items-center">
					<div className="mr-8 mt-2">
						<img className="rounded-full h-12 w-12" src={user?.avatar.large} />
					</div>
				</div>
			</nav>
			<div className="flex flex-row justify-center items-center mt-20 gap-8">
				<div id="list-button" className="flex flex-col gap-2 font-bold h-20 w-32 rounded-xl border-2 border-[#6A656C] justify-center items-center cursor-pointer">
					<h1 className="text-white text-base">ANIME LIST</h1>
					<span className="h-0.5 w-20 bg-[#ef57a3bd]"></span>
				</div>
				<div id="list-button" className="flex flex-col gap-2 font-bold h-20 w-32 rounded-xl border-2 border-[#6A656C] justify-center items-center cursor-pointer">
					<h1 className="text-white text-base">MANGA LIST</h1>
					<span className="h-0.5 w-20 bg-[#ef57a3bd]"></span>
				</div>
			</div>
			<h1 className="text-white text-2xl font-bold mt-12 ml-24">Continue Watching</h1>
			<div className="grid grid-cols-4 grid-rows-4 gap-y-16 justify-start items-center mt-4 ml-24">
				{TTListC ? TTListC.map((value, i) => {
					return (
						<div className="flex flex-col gap-1 font-bold w-32 h-48 hover:cursor-pointer" key={i}>
							<div className="flex flex-col gap-2 font-bold h-40 w-32 rounded-xl justify-center items-center">
								<img className="rounded-xl h-40 w-32" src={value.coverImages.large} />
							</div>
							<h1 className="text-white text-sm ml-1 break-normal">{value.titles.english}</h1>
							<div className="flex flex-row">
								<h3 className="text-[#7B8BD6] text-xs ml-1">5&nbsp; <span className="text-[#6A656C] mb-1">/</span></h3>
								<h3 className="text-[#7B8BD6] text-xs ml-1">12</h3>
							</div>
						</div>
					);
				}) : <h1 className="text-white text-sm ml-1 break-normal">No Anime Found</h1>
				}
			</div>
			<h1 className="text-white text-2xl font-bold mt-48 ml-24">Continue Reading</h1>
			<div className="flex flex-row justify-start items-center mt-4 gap-8 ml-24">
				{Array(4).fill(0).map((i) => {
					return (
						<div className="flex flex-col gap-1 font-bold w-32 h-48 hover:cursor-pointer" key={i}>
							<div className="flex flex-col gap-2 font-bold h-40 w-32 rounded-xl justify-center items-center">
								<img className="rounded-xl h-40 w-32" src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147864-Idb77ylQTTBh.png" />
							</div>
							<h1 className="text-white text-sm ml-1 break-normal">ONIMAI: I'm Now Your Sister!</h1>
							<div className="flex flex-row">
								<h3 className="text-[#7B8BD6] text-xs ml-1">5&nbsp; <span className="text-[#6A656C] mb-1">/</span></h3>
								<h3 className="text-[#7B8BD6] text-xs ml-1">12</h3>
							</div>
						</div>
					);
				})
				}
			</div>
		</div>
	);
}

export default App;
