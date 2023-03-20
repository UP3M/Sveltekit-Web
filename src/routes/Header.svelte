<script>
	import { page } from '$app/stores';
	import telegram from '$lib/images/telegram.png';
	import github from '$lib/images/github.svg';
</script>


<div class="header">
	<h1>My Website</h1>
</div>
<header>
	<div class="corner">
		<a href="https://github.com/UP3M/Front-end-Web-Develpment">
			<img src={github} alt="GitHub" />
		</a>
	</div>
	

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">About Me</a>
			</li>
			<li aria-current={$page.url.pathname === '/hometown' ? 'page' : undefined}>
				<a href="/hometown">My Hometown</a>
			</li>
			<li aria-current={$page.url.pathname === '/comic' ? 'page' : undefined}>
				<a href="/comic">Comic</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://t.me/okaresia">
			<img src={telegram} alt="Telegram" />
		</a>
	</div>
	
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background-image: url("https://storage-prtl-co.imgix.net/endor/organisations/13205/images/1611226245_promotional-photo-3.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
