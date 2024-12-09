import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";
import { STOREPAGE_URL } from "../config";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
	return (
		<Swiper
			effect={"fade"}
			spaceBetween={0}
			centeredSlides={true}
			loop={true}
			autoplay={{
				delay: 5500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay, Navigation, EffectFade]}
		>
						<SwiperSlide>
				<div className="w-full h-[664px] md:h-80">
					<div className="w-full h-full">
						<img
							alt="futuristic-background-with-lines-background"
							src="/images/backgrounds/futuristic-background-with-lines.svg"
							className="object-cover object-top h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-0">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
								<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
									<span className="block">Meta Quest 3</span>
									<span>128 Gb </span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={STOREPAGE_URL + "/products/meta-quest-3"}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute mb-14 md:mb-6">
										<img
											src="images/products/Combo CONEXIÓN TOTAL.webp"
											className="h-80 w-80 md:h-64 z-30 aspect-auto"
												width={320}
												height={320}
											alt="iphone 14 pro max 512gb"
											loading={"eager"}
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
 			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80 z-0">
					<div className="w-full h-full">
						<img
							alt="vanishing-stripes-background"
							src="/images/backgrounds/vanishing-stripes.svg"
							className="object-cover object-top h-full"
							width={864}
							height={320}
							loading={"eager"}
						/>
					</div>
					<div className="absolute z-10 top-0 w-full">
						<section className="flex items-center md:items-start md:justify-between flex-col md:flex-row mx-20 md:ml-20 md:mr-14">
							<div className="md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
										<span className="block">Precalentadora</span>
										<span>D-Heater Pro V2</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/precalentadora-d-heater-v2"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="flex">
								<img
									src="images/products/precalentadora1.webp"
									className="h-96 w-[119px] md:h-80 md:w-24 aspect-auto"
									width={119}
									height={384}
									loading={"eager"}
									alt="precalentadora"
								/>
								<img
									src="images/products/precalentadora2.webp"
									className="h-96 w-[117px] md:h-80 md:w-24 aspect-auto"
									width={117}
									height={384}
									loading={"eager"}
									alt="precalentadora"
								/>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80">
					<div className="w-full h-full">
						<img
							alt="parabolic-ellipse-background"
							src="/images/backgrounds/parabolic-ellipse.svg"
							className="object-cover object-top h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-0">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-8xl">
										<span className="block">CNC</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={STOREPAGE_URL + "/products/cnc"}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute mb-14 md:mb-6">
										<img
											src="/images/products/CNC.webp"
											className="h-80 w-80 md:h-64 z-30 aspect-auto"
                      width={320}
                      height={320}
											alt="cnc"
											loading={"eager"}
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80">
					<div className="w-full h-full">
						<img
							alt="background"
							src="/images/backgrounds/rainbow-vortex.svg"
							className="object-cover object-top h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-0">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
										<span className="block">LCD PARA</span>
										<span className="block">ZTE BLADE V4</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL + "/products/lcd-para-zte-blade-v40-9045"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6">
										<img
											src="/images/products/P4.webp"
											className="h-80 md:h-52 z-30 md:w-[106px] brightness-0 aspect-auto"
                      width={164}
                      height={320}
											alt="lcd para zte blade v4"
											loading={"eager"}
										/>
									</div>
									<div className="absolute mr-28 md:mr-16">
										<img
											src="/images/products/P3.webp"
											className="h-80 w-[164px] md:h-52 md:w-[106px] z-40 aspect-auto"
                      width={164}
                      height={320}
											loading={"eager"}
											alt="lcd para zte blade v4"
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80 z-0">
					<div className="w-full h-full">
						<img
							alt="background"
							src="/images/backgrounds/bermuda-square.svg"
							className="object-cover object-top h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-7">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
										<span className="block">Touch Microsoft</span>
										<span>Surface Pro 3</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={
												STOREPAGE_URL +
												"/products/touch-para-microsoft-surface-pro-3-1631"
											}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6">
										<img
											src="/images/products/P1.webp"
											className="h-80 w-64 md:h-52 z-30 aspect-auto"
                      width={256}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
									<div className="absolute mr-28 md:mr-16">
										<img
											src="/images/products/P2.webp"
											className="h-80 w-64 md:h-52 z-40 aspect-auto"
                      width={256}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80 z-0">
					<div className="w-full h-full">
						<img
							alt="quantum-gradient-background"
							src="/images/backgrounds/quantum-gradient.svg"
							className="object-cover h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-7">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
										<span className="block">LCD LENOVO</span>
										<span>TAB M10</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={STOREPAGE_URL + "/products/lcd-para-lenovo-tab-m10"}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6 brightness-75 saturate-50 contrast-200">
										<img
											src="/images/products/P6.webp"
											className="h-80 w-[218px] md:h-56  aspect-auto"
                      width={218}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
									<div className="absolute mr-28 md:mr-16 brightness-125 contrast-200 saturate-50">
										<img
                      src="/images/products/P5.webp"
                      className="h-80 w-[223px] md:h-56 md:w-[156px] aspect-auto"
                      width={223}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="w-full h-[664px] md:h-80 z-0">
					<div className="w-full h-full">
						<img
							alt="quantum-gradient-background"
							src="/images/backgrounds/quantum-gradient.svg"
							className="object-cover h-full"
							width={864}
							height={664}
							loading={"eager"}
						/>
					</div>
					<div className="absolute h-full z-20 top-0 w-full">
						<section className="grid h-full grid-cols-1 md:grid-cols-3 mx-5 md:ml-20 md:mr-7">
							<div className="col-span-1 md:col-span-2 md:mt-20 mt-10">
								<header>
									<h2 className="font-roboto font-bold text-white text-center md:text-left text-5xl">
										<span className="block">LCD SAMSUNG</span>
										<span>LCD Samsung Watch Active SM-R500</span>
									</h2>
								</header>
								<section className="mt-6 flex justify-center md:justify-start">
									<div className="items-center fade-up inline-flex flex-wrap gap-4">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={STOREPAGE_URL + "/products/lcd-samsung-watch-active-sm-r500"}
											className="btn bg-black text-zinc-300"
										>
											<span className="text-xl md:text-base font-bold">
												Comprar ahora
											</span>
										</a>
									</div>
								</section>
							</div>
							<section className="relative z-20 mt-20">
								<div className="relative w-full h-52 flex justify-center items-center">
									<div className="absolute ml-24 md:ml-16 mb-14 md:mb-6 brightness-75 saturate-50 contrast-200">
										<img
											src="/images/products/Pantalla-Garmin-1.webp"
											className="h-80 w-[218px] md:h-56  aspect-auto"
                      width={218}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
									<div className="absolute mr-28 md:mr-16 brightness-125 contrast-200 saturate-50">
										<img
                      src="/images/products/Pantalla-Garmin.webp"
                      className="h-80 w-[223px] md:h-56 md:w-[156px] aspect-auto"
                      width={223}
                      height={320}
											alt="touchsurface3pro"
											loading={"eager"}
										/>
									</div>
								</div>
							</section>
						</section>
					</div>
				</div>
			</SwiperSlide>
			<SwiperNavButton />
		</Swiper>
	);
};

export default Slider;
