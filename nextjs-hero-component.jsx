import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Central Logo */}
                <div className="hero-logo">
                    <Image
                        src="/assets/images/autoflow-logo-transparent.png"
                        alt="AutoFlow Logo"
                        width={200}
                        height={200}
                        className="hero-logo-image"
                        priority
                    />
                </div>

                {/* Transparent hands image with WebP + PNG fallback */}
                <div className="hero-hands">
                    <Image
                        src="/public/assets/hero-hands.png"
                        alt="AutoFlow Hands"
                        width={1200}
                        height={800}
                        className="hero-hands-image"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                </div>
            </div>
        </section>
    );
}
