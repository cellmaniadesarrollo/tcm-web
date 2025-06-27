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
      className="relative"
    >
      {/* Slide 1 - Precalentadora */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20 z-10" />
          
          <div className="container mx-auto h-full px-4 md:px-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="block">Precalentadora</span>
                  <span className="text-blue-300">D-Heater Pro V2</span>
                </h2>
                <p className="text-lg text-blue-100 mb-6 max-w-lg">
                  La solución profesional para tus necesidades de calentamiento
                </p>
                <a
                  href={`${STOREPAGE_URL}/products/precalentadora-d-heater-v2`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">Comprar ahora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center z-20">
                <div className="flex space-x-4">
                  <img
                    src="images/products/precalentadora1.webp"
                    className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
                    alt="Precalentadora D-Heater Pro V2"
                    loading="eager"
                  />
                  <img
                    src="images/products/precalentadora2.webp"
                    className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
                    alt="Precalentadora D-Heater Pro V2"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 - CNC */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-gray-900 to-gray-700">
          <div className="absolute inset-0 bg-black/30 z-10" />
          
          <div className="container mx-auto h-full px-4 md:px-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="text-blue-400">CNC</span>
                </h2>
                <p className="text-lg text-gray-200 mb-6 max-w-lg">
                  Tecnología de precisión para tus proyectos más exigentes
                </p>
                <a
                  href={`${STOREPAGE_URL}/products/cnc`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">Comprar ahora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center z-20">
                <img
                  src="/images/products/CNC.webp"
                  className="h-96 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  alt="CNC"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 - LCD ZTE Blade */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-purple-900 to-indigo-800">
          <div className="absolute inset-0 bg-black/20 z-10" />
          
          <div className="container mx-auto h-full px-4 md:px-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="block">LCD PARA</span>
                  <span className="text-purple-300">ZTE BLADE V4</span>
                </h2>
                <p className="text-lg text-purple-100 mb-6 max-w-lg">
                  Repuestos originales para tu dispositivo
                </p>
                <a
                  href={`${STOREPAGE_URL}/products/lcd-para-zte-blade-v40-9045`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">Comprar ahora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center z-20 space-x-8">
                <img
                  src="/images/products/P4.webp"
                  className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  alt="LCD ZTE Blade V4"
                  loading="eager"
                />
                <img
                  src="/images/products/P3.webp"
                  className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  alt="LCD ZTE Blade V4"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 4 - Touch Surface Pro */}
      <SwiperSlide>
        <div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-gray-800 to-gray-600">
          <div className="absolute inset-0 bg-black/30 z-10" />
          
          <div className="container mx-auto h-full px-4 md:px-8 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  <span className="block">Touch Microsoft</span>
                  <span className="text-blue-300">Surface Pro 3</span>
                </h2>
                <p className="text-lg text-gray-200 mb-6 max-w-lg">
                  Pantallas táctiles de alta calidad para tu dispositivo
                </p>
                <a
                  href={`${STOREPAGE_URL}/products/touch-para-microsoft-surface-pro-3-1631`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300"
                >
                  <span className="mr-2">Comprar ahora</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              
              <div className="flex justify-center z-20 space-x-8">
                <img
                  src="/images/products/P1.webp"
                  className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  alt="Touch Microsoft Surface Pro 3"
                  loading="eager"
                />
                <img
                  src="/images/products/P2.webp"
                  className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  alt="Touch Microsoft Surface Pro 3"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 1 - LCD Lenovo Tab M10 */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-indigo-900 to-purple-800">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">LCD LENOVO</span>
					<span className="text-indigo-300">TAB M10</span>
				</h2>
				<p className="text-lg text-indigo-100 mb-6 max-w-lg">
					Pantallas de repuesto de alta calidad para tu tablet Lenovo
				</p>
				<a
					href={`${STOREPAGE_URL}/products/lcd-para-lenovo-tab-m10`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20 space-x-6">
				<img
					src="/images/products/P6.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="LCD Lenovo Tab M10"
					loading="eager"
				/>
				<img
					src="/images/products/P5.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="LCD Lenovo Tab M10"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 2 - LCD Vivo Y33s */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-blue-800 to-cyan-700">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">LCD VIVO</span>
					<span className="text-cyan-300">Y33s</span>
				</h2>
				<p className="text-lg text-cyan-100 mb-6 max-w-lg">
					Pantalla original de repuesto para tu Vivo Y33s
				</p>
				<a
					href={`${STOREPAGE_URL}/products/pantalla-lcd-vivo-y33s`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20 space-x-6">
				<img
					src="/images/products/Diseño-sin-título-_1_.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="LCD Vivo Y33s"
					loading="eager"
				/>
				<img
					src="/images/products/Diseño-sin-título.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="LCD Vivo Y33s"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 3 - Cargador ASUS */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-red-900 to-orange-800">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">CARGADOR ASUS</span>
					<span className="text-orange-300">ROG STRIX GL70GE</span>
				</h2>
				<p className="text-lg text-orange-100 mb-6 max-w-lg">
					Cargador original para tu laptop gamer ASUS
				</p>
				<a
					href={`${STOREPAGE_URL}/products/cargador-para-laptop-asus-rog-strix-gl70ge`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20">
				<img
					src="/images/products/ENERO-PLANILLA-DE-TELEFONOS-NANDO-_2_.webp"
					className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="Cargador ASUS ROG STRIX"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 4 - Molde OCA */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-gray-800 to-gray-600">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">MOLDE OCA</span>
					<span className="text-blue-300">Universal</span>
				</h2>
				<p className="text-lg text-gray-200 mb-6 max-w-lg">
					Herramienta profesional para laminación de pantallas
				</p>
				<a
					href={`${STOREPAGE_URL}/products/molde-de-laminacion-de-oca-universal`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20 space-x-6">
				<img
					src="/images/products/1.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="Molde OCA Universal"
					loading="eager"
				/>
				<img
					src="/images/products/2.webp"
					className="h-72 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="Molde OCA Universal"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 5 - MacBook Air */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-gray-700 to-gray-500">
			<div className="absolute inset-0 bg-black/30 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">MacBook Air</span>
					<span className="text-gray-300">11.6" MD711LL/B</span>
				</h2>
				<p className="text-lg text-gray-200 mb-6 max-w-lg">
					Laptop ultradelgada con pantalla HD+
				</p>
				<a
					href={`${STOREPAGE_URL}/products/macbook-air`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20">
				<img
					src="/images/products/remont_macbookair_head.webp"
					className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="MacBook Air 11.6"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 6 - LCD LG Tribute */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-green-900 to-teal-800">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">LCD LG</span>
					<span className="text-teal-300">Tribute LS676</span>
				</h2>
				<p className="text-lg text-teal-100 mb-6 max-w-lg">
					Pantalla de repuesto original para tu LG Tribute
				</p>
				<a
					href={`${STOREPAGE_URL}/products/pantalla-lcd-para-lg-tribute-ls676`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20">
				<img
					src="/images/products/LCD LG tribute LS676.webp"
					className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="LCD LG Tribute LS676"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 7 - Timekettle X1 */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-purple-900 to-indigo-800">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">TIMEKETTLE X1</span>
					<span className="text-indigo-300">Interpreter Hub</span>
				</h2>
				<p className="text-lg text-indigo-100 mb-6 max-w-lg">
					Traductor inteligente para conversaciones en tiempo real
				</p>
				<a
					href={`${STOREPAGE_URL}/products/traductor-timekettle-x1-interpreter-hub`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20">
				<img
					src="/images/products/traductor.webp"
					className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="Timekettle X1 Interpreter Hub"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

		{/* Slide 8 - PEGA UV */}
		<SwiperSlide>
		<div className="relative w-full h-[600px] md:h-[500px] bg-gradient-to-r from-yellow-700 to-amber-600">
			<div className="absolute inset-0 bg-black/20 z-10" />
			
			<div className="container mx-auto h-full px-4 md:px-8 flex items-center">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div className="text-center md:text-left z-20">
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
					<span className="block">PEGA UV</span>
					<span className="text-amber-300">5 Second Rapid Fix</span>
				</h2>
				<p className="text-lg text-amber-100 mb-6 max-w-lg">
					Adhesivo instantáneo para reparaciones rápidas
				</p>
				<a
					href={`${STOREPAGE_URL}/products/uv-5-second-rapid-fix`}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300"
				>
					<span className="mr-2">Comprar ahora</span>
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</a>
				</div>
				
				<div className="flex justify-center z-20">
				<img
					src="/images/products/Pega-UV.webp"
					className="h-80 w-auto object-contain transition-transform duration-500 hover:scale-105"
					alt="PEGA UV 5 Second Rapid Fix"
					loading="eager"
				/>
				</div>
			</div>
			</div>
		</div>
		</SwiperSlide>

      <SwiperNavButton />
    </Swiper>
  );
};

export default Slider;