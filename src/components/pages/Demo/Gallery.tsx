import React from 'react';
import { SmallInternalHeader } from 'components/layout/Header';

interface GalleryProps {
	gallery: string[];
}
const Gallery = ({ gallery }: GalleryProps) => {
	const [currentSlide, setCurrentSlide] = React.useState(1);

	const plusSlides = (n: number) => {
		updateCurrentSlide(currentSlide + n);
	};

	const updateCurrentSlide = (n: number) => {
		if (n > gallery.length) {
			setCurrentSlide(1);
		} else if (n < 1) {
			setCurrentSlide(gallery.length);
		} else {
			setCurrentSlide(n);
		}
	};

	return (
		<>
			<SmallInternalHeader text='Photo Gallery' />
			<Slideshow gallery={gallery} currentSlide={currentSlide} plusSlides={plusSlides} />
			<Thumbnails currentSlide={currentSlide} gallery={gallery} setCurrentSlide={setCurrentSlide} />
		</>
	);
};

interface SlideshowProps extends GalleryProps {
	currentSlide: number;
	plusSlides: (n: number) => void;
}
const Slideshow = ({ gallery, currentSlide, plusSlides }: SlideshowProps) => {
	return (
		<section className='slideshow-container'>
			{gallery.map((slide, index) => (
				<Slide src={slide} index={index + 1} key={index} length={gallery.length} currentSlide={currentSlide} />
			))}
			<div className='prev' onClick={() => plusSlides(-1)}>
				❮
			</div>
			<div className='next' onClick={() => plusSlides(1)}>
				❯
			</div>
		</section>
	);
};

interface SlideProps {
	index: number;
	src: string;
	length: number;
	currentSlide: number;
}
export const Slide = ({ src, index, length, currentSlide }: SlideProps) => {
	return (
		<div className='mySlides' style={{ display: index === currentSlide ? 'block' : 'none' }}>
			<div className='numbertext'>
				{index} / {length}
			</div>
			<img src={src} alt='' style={{ width: '100%' }} />
		</div>
	);
};

interface ThumbnailsProps {
	gallery: string[];
	currentSlide: number;
	setCurrentSlide: (n: number) => void;
}
const Thumbnails = ({ gallery, currentSlide, setCurrentSlide }: ThumbnailsProps) => {
	return (
		<section className='gallery-container'>
			{gallery.map((image, index) => (
				<Thumbnail
					index={index + 1}
					src={image}
					key={index}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			))}
		</section>
	);
};

interface ThumbnailProps {
	src: string;
	currentSlide: number;
	setCurrentSlide: (n: number) => void;
	index: number;
}
const Thumbnail = ({ src, index, currentSlide, setCurrentSlide }: ThumbnailProps) => {
	return (
		<img
			src={src}
			alt=''
			className={`gallery-image demo cursor ${index === currentSlide && 'active'}`}
			onClick={() => setCurrentSlide(index)}
		/>
	);
};

export default Gallery;
