import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselSucursales() {
	return (
		<Swiper
			breakpoints={{
				414: {
					slidesPerView: 1.1,
				},
				440: {
					slidesPerView: 1.1,
				},
				480: {
					slidesPerView: 1.1,
				},
				500: {
					slidesPerView: 1.2,
				},
				520: {
					slidesPerView: 1.2,
				},
				560: {
					slidesPerView: 1.3,
				},
				600: {
					slidesPerView: 1.4,
				},
				640: {
					slidesPerView: 1.4,
				},
				680: {
					slidesPerView: 1.5,
				},
				720: {
					slidesPerView: 1.5,
				},
				740: {
					slidesPerView: 1.7,
				},
				769: {
					slidesPerView: 1.8,
				},
				800: {
					slidesPerView: 1.8,
				},
				860: {
					slidesPerView: 2.1,
				},
				900: {
					slidesPerView: 2.1,
				},
				940: {
					slidesPerView: 2.2,
				},
				980: {
					slidesPerView: 2.3,
				},
				1000: {
					slidesPerView: 2.3,
				},
				1024: {
					slidesPerView: 1.6,
				},
				1060: {
					slidesPerView: 1.7,
				},
				1152: {
					slidesPerView: 1.8,
				},
			}}
			spaceBetween={20}
			modules={[Navigation]}
		>
			<SwiperSlide>
				<div className="bg-sky-800 rounded-xl text-zinc-50 p-10 lg:p-12 w-[400px] lg:w-[600px]">
					<section className="mb-4">
						<span className="font-semibold text-xl lg:text-2xl block text-center">
							Luis Cordero (Principal)
						</span>
						<span className="block text-center text-xs lg:text-lg">
							C. Luis Cordero Crespo 4-17, y Antonio José de Sucre
						</span>
					</section>
					<aside>
						<img
							className="rounded-xl aspect-square object-cover"
							src="/images/sucursales/principal.webp"
							alt=""
						/>
					</aside>
					<footer className="flex flex-col justify-between text-base lg:text-xl mt-4">
						<div>
							<span className="block">Lunes a Sábado, de 8:00am a 8:00pm</span>
							<span>Domingo, de 9:00am a 1:00pm</span>
						</div>
						<div className="flex justify-end gap-4 mt-4">
							<a
								href="https://www.google.com.ec/maps/place/TeamCellmania/@-2.7396957,-78.8484405,19z/data=!4m6!3m5!1s0x91cd12a4a32b35b5:0x48bceba85d6b77f5!8m2!3d-2.7397863!4d-78.8483567!16s%2Fg%2F11c52849_q?hl=es&coh=164777&entry=tt&shorturl=1"
								target="_blank"
								className="bg-white rounded-lg p-1"
							>
								<div className="w-9 h-9">
									<GoogleMapsIcon />
								</div>
							</a>
							<a
								href="https://www.waze.com/es-419/live-map/directions?navigate=yes&to=ll.-2.7397863%2C-78.8483567"
								target="_blank"
								className="bg-white rounded-lg p-1"
							>
								<div className="w-8 h-8 ml-0.5 mt-0.5">
									<WazeIcon />
								</div>
							</a>
						</div>
					</footer>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-sky-800 rounded-xl text-zinc-50 p-10 lg:p-12 w-[400px] lg:w-[600px]">
					<section className="mb-4">
						<span className="font-semibold text-xl lg:text-2xl block text-center">
							Bolivar
						</span>
						<span className="block text-center text-xs lg:text-lg">
							C. Simón Bolivar, Azogues
						</span>
					</section>
					<aside>
						<img
							className="rounded-xl aspect-square object-cover"
							src="/images/sucursales/bolivar.webp"
							alt=""
						/>
					</aside>
					<footer className="flex flex-col justify-between text-base lg:text-xl mt-4">
						<div>
							<span className="block">Lunes a Sábado, de 9:00am a 7:00pm</span>
						</div>
						<div className="flex justify-end gap-4 mt-10 lg:mt-12">
							<a
								href="https://www.google.com.ec/maps/place/Cellmania+2/@-2.7382574,-78.8478949,18z/data=!4m6!3m5!1s0x91cd12a5aa6b93b1:0x82e3d0129522fb33!8m2!3d-2.7376191!4d-78.8468119!16s%2Fg%2F11gdl0k2g8?hl=es&entry=ttu"
								target="_blank"
								className="bg-white rounded-lg p-1"
							>
								<div className="w-9 h-9">
									<GoogleMapsIcon />
								</div>
							</a>
							<a
								href="https://www.waze.com/es-419/live-map/directions?to=ll.-2.73734306%2C-78.84678391"
								className="bg-white rounded-lg p-1"
								target="_blank"
							>
								<div className="w-8 h-8 ml-0.5 mt-0.5">
									<WazeIcon />
								</div>
							</a>
						</div>
					</footer>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-sky-800 rounded-xl text-zinc-50 p-10 lg:p-12 w-[400px] lg:w-[600px]">
					<section className="mb-4">
						<span className="font-semibold text-2xl block text-center">
							Biblián
						</span>
						<span className="block text-center text-xs lg:text-lg">
							C. Benjamín Ochoa y Av. Mariscal Sucre
						</span>
					</section>
					<aside>
						<img
							className="rounded-xl aspect-square object-cover"
							src="/images/sucursales/biblian.webp"
							alt=""
						/>
					</aside>
					<footer className="flex flex-col justify-between text-base lg:text-xl mt-4">
						<div>
							<span className="block">Lunes a Sábado, de 9:00am a 7:00pm</span>
							<span>Domingo, de 9:00am a 5:00pm</span>
						</div>
						<div className="flex justify-end gap-4 mt-4">
							<a href="https://maps.app.goo.gl/gaYmaYMaJGbQG6qy9" target="_blank" className="bg-white rounded-lg p-1">
								<div className="w-9 h-9">
									<GoogleMapsIcon />
								</div>
							</a>
							<a
								href="https://www.waze.com/es-419/live-map/directions?to=ll.-2.71223763%2C-78.88966765"
								className="bg-white rounded-lg p-1"
								target="_blank"
							>
								<div className="w-8 h-8 ml-0.5 mt-0.5">
									<WazeIcon />
								</div>
							</a>
						</div>
					</footer>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="bg-sky-800 rounded-xl text-zinc-50 p-10 lg:p-12 w-[400px] lg:w-[600px]">
					<section className="mb-4">
						<span className="font-semibold text-2xl block text-center">
							Matovelle
						</span>
						<span className="block text-center text-xs lg:text-lg">
							C. Julio María Matovelle, Azogues
						</span>
					</section>
					<aside>
						<img
							className="rounded-xl aspect-square object-cover"
							src="/images/sucursales/matovelle.webp"
							alt=""
						/>
					</aside>
					<footer className="flex flex-col justify-between text-base lg:text-xl mt-4">
						<div>
							<span>Lunes a Sábado, de 9:00am a 7:00pm</span>
						</div>
						<div className="flex justify-end gap-4 mt-10 lg:mt-12">
							<a
								href="https://www.google.com.ec/maps/place/Teamcellmania3/@-2.7382574,-78.8478949,18z/data=!4m6!3m5!1s0x91cd1368dbe35f8d:0xad61c97871b46983!8m2!3d-2.7368045!4d-78.8472221!16s%2Fg%2F11q95f3jdk?hl=es&entry=ttu"
								target="_blank"
								className="bg-white rounded-lg p-1"
							>
								<div className="w-9 h-9">
									<GoogleMapsIcon />
								</div>
							</a>
							<a
								href="https://www.waze.com/es-419/live-map/directions?to=ll.-2.73680744%2C-78.84723544"
								target="_blank"
								className="bg-white rounded-lg p-1"
							>
								<div className="w-8 h-8 ml-0.5 mt-0.5">
									<WazeIcon />
								</div>
							</a>
						</div>
					</footer>
				</div>
			</SwiperSlide>
		</Swiper>
	);
}
const GoogleMapsIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
		<path d="m2 12 1-7 2-2 7-1h8l7 1 2 2 1 7v8l-1 7-2 2-7 1h-8l-7-1-2-2-1-7v-8Z" />
		<path
			fill="#34A851"
			fillRule="evenodd"
			d="M24 13c0 3-3 6-4 8l-2 2-1 3-1 1-1-1a11 11 0 0 0-3-5c-1-2-4-5-4-8 0-5 4-8 8-8s8 3 8 8Zm-8 3c2 0 3-2 3-3 0-2-1-3-3-3s-3 1-3 3c0 1 1 3 3 3Z"
			clipRule="evenodd"
		/>
		<path fill="#4285F5" d="m23 9-5-4-4 6a3 3 0 0 1 5 2l-1 1 5-5Z" />
		<path fill="#F9BB0E" d="m12 21-3-5 5-5-1 2c0 1 1 3 3 3l2-1-6 6Z" />
		<path fill="#E74335" d="M10 8a8 8 0 0 0-1 8l5-5-4-3Z" />
		<path fill="#1A73E6" d="M18 5a8 8 0 0 0-8 3l4 3 4-6Z" />
	</svg>
);
const WazeIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		data-name="Layer 1"
		viewBox="0 0 192 192"
	>
		<path fill="none" d="M0 0h192v192H0z" />
		<path d="M168 57a68 68 0 0 0-57-41c-21-2-39 4-54 18a69 69 0 0 0-24 51v13c0 7-3 12-9 14h-2a5 5 0 0 0-4 6l1 2c3 11 18 25 29 30h1l11 2a8 8 0 0 1 15 3l12 3h10l7-1a102 102 0 0 0 12-1l5-1a69 69 0 0 0 10-3 68 68 0 0 0 11-6 70 70 0 0 0 26-89Zm-11 55a58 58 0 0 1-39 31 65 65 0 0 1-11 2H90a24 24 0 0 1-4 0h-2l-28-6-3-1a4 4 0 0 1-1 0c-5-2-11-8-16-13a5 5 0 0 1 0-7c6-4 9-11 9-20V85c1-17 7-30 20-42 13-11 28-16 44-15 22 3 38 14 48 34a58 58 0 0 1 0 50Z" />
		<path d="M87 78a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm54-6a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 12 0Zm-57 73a20 20 0 1 0 3 12 16 16 0 0 0 0-1 20 20 0 0 0-3-11Zm-17 19a8 8 0 1 1 8-9v1a8 8 0 0 1-8 8Zm75-18a20 20 0 0 0-9-8 58 58 0 0 1-15 5 65 65 0 0 1-11 2 20 20 0 0 0-3 11v1a20 20 0 1 0 38-11Zm-18 18a8 8 0 0 1-8-8 8 8 0 0 1 15-4 8 8 0 0 1 1 4 8 8 0 0 1-8 8Z" />
		<path
			fill="none"
			stroke="#000"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="12"
			d="M84 96a28 28 0 0 0 54 0"
		/>
	</svg>
);
