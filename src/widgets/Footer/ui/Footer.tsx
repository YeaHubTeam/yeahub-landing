import { NavLink } from 'react-router-dom';

import FigmaLogo from '@/shared/assets/icons/figma.svg';
import GithubLogo from '@/shared/assets/icons/github.svg';
import InstagramLogo from '@/shared/assets/icons/instagram.svg';
import TelegramLogo from '@/shared/assets/icons/telegram.svg';
import YoutubeLogo from '@/shared/assets/icons/youtube.svg';
import { AppLogo } from '@/shared/ui/AppLogo';

import cls from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={cls.footer}>
			<div className={cls.container}>
				<div className={cls['container-logo']}>
					<AppLogo fill="white" />
				</div>
				<p className={cls.subtitle}>
					Выбери, каким будет IT завтра, <br /> вместе c нами
				</p>
				<div className={cls['container-social']}>
					<NavLink to="/">
						<YoutubeLogo />
					</NavLink>
					<NavLink to="/">
						<GithubLogo />
					</NavLink>
					<NavLink to="/">
						<InstagramLogo className={cls.test} />
					</NavLink>
					<NavLink to="/">
						<TelegramLogo />
					</NavLink>
				</div>
				<p className={cls.about}>
					YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
					исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
					ознакомления в Figma.
				</p>
				<hr />
				<div className={cls['container-copyright']}>
					<p>© 2024 YeaHub</p>
					<div className={cls['copyright-icons']}>
						<NavLink to="/">
							<FigmaLogo className={cls.figma} />
						</NavLink>
						<NavLink to="/">
							<GithubLogo />
						</NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
};

Footer.displayName = 'Footer';
