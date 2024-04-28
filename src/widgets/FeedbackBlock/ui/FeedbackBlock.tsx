import { useRef, MouseEvent, useCallback, useEffect } from 'react';

import { mockFeedback } from '@/shared/const/mockFeedback';
import { makeCarouselInfinite } from '@/shared/libs/makeCarouselInfinite';
import { useObserver } from '@/shared/libs/useObserver';
import { Button } from '@/shared/ui/Button';
import { FeedbackCard } from '@/shared/ui/FeedbackCard';

import cls from './FeedbackBlock.module.css';

export const FeedbackBlock = () => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const timeoutIdRef = useRef<NodeJS.Timeout | undefined>();
	const isVisible: boolean = useObserver(sliderRef);
	let firstChildWidth = 0;

	if (sliderRef.current && sliderRef.current.firstChild) {
		const firstChild = sliderRef.current.firstChild as HTMLElement;
		firstChildWidth = firstChild.offsetWidth;
	}
	const carouselWidth = sliderRef.current?.offsetWidth ?? 0;

	const cardPerView = Math.round(carouselWidth / firstChildWidth);
	const infiniteArray = makeCarouselInfinite(mockFeedback, cardPerView);
	let isDragging: boolean = false,
		startX: number,
		startScrollLeft: number;

	const autoPlay = useCallback(() => {
		if (window.innerWidth < 800 || !isVisible) return;

		timeoutIdRef.current = setTimeout(() => {
			if (sliderRef.current) {
				sliderRef.current.scrollLeft += firstChildWidth;
			}
		}, 2500);
	}, [firstChildWidth, isVisible]);

	useEffect(() => {
		if (isVisible) {
			autoPlay();
		} else if (!isVisible) {
			clearTimeout(timeoutIdRef.current);
		}
	}, [autoPlay, isVisible]);

	const handleNextBtn = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += firstChildWidth;
		}
	};

	const handlePrevBtn = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= firstChildWidth;
		}
	};

	const hadleStartDragging = (e: MouseEvent<HTMLDivElement>) => {
		isDragging = true;
		sliderRef.current?.classList.add(`${cls.dragging}`);
		startX = e.pageX;
		startScrollLeft = sliderRef.current?.scrollLeft ?? 0;
	};

	const hadleStopDragging = () => {
		isDragging = false;
		sliderRef.current?.classList.remove(`${cls.dragging}`);
	};

	const handleDragging = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		if (sliderRef.current) {
			sliderRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
		}
	};

	const infiniteScroll = () => {
		if (sliderRef.current?.scrollLeft === 0) {
			sliderRef.current.classList.add(`${cls['no-transition']}`);
			sliderRef.current.scrollLeft =
				sliderRef.current.scrollWidth - 2 * sliderRef.current.offsetWidth;
			sliderRef.current.classList.remove(`${cls['no-transition']}`);
		} else if (
			sliderRef.current &&
			Math.ceil(sliderRef.current?.scrollLeft) ===
				sliderRef.current?.scrollWidth - sliderRef.current?.offsetWidth
		) {
			sliderRef.current.classList.add(`${cls['no-transition']}`);
			sliderRef.current.scrollLeft = sliderRef.current.offsetWidth;
			sliderRef.current.classList.remove(`${cls['no-transition']}`);
		}

		clearTimeout(timeoutIdRef.current);
		if (!sliderRef.current?.matches(':hover')) autoPlay();
	};

	return (
		<section
			className={cls['feedback-block']}
			onMouseUp={hadleStopDragging}
			onMouseLeave={hadleStopDragging}
			role="slider"
			tabIndex={0}
			aria-valuenow={0}
		>
			<h2 className={cls.title}>Отзывы членов сообщества</h2>
			<div className={cls['container-btn']}>
				<Button onClick={handlePrevBtn} btnType="round">
					&#8249;
				</Button>
				<Button onClick={handleNextBtn} btnType="round">
					&#8250;
				</Button>
			</div>
			<div
				className={cls.carousel}
				ref={sliderRef}
				onMouseDown={hadleStartDragging}
				onMouseMove={handleDragging}
				onMouseLeave={autoPlay}
				onMouseEnter={() => clearInterval(timeoutIdRef.current)}
				onScroll={infiniteScroll}
				role="slider"
				tabIndex={0}
				aria-valuenow={0}
			>
				{infiniteArray.map((user, index) => (
					<FeedbackCard className={cls.card} key={index} user={user} />
				))}
			</div>
		</section>
	);
};

FeedbackBlock.displayName = 'FeedbackBlock';
