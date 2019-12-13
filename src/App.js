import React, { Component } from 'react';
import LogoWhite from './img/logo-white.png';
import Nat1Large from './img/nat-1-large.jpg';
import Nat2Large from './img/nat-2-large.jpg';
import Nat3Large from './img/nat-3-large.jpg';
import Nat8 from './img/nat-8.jpg';
import './sass/main.scss';

class App extends Component {
	state = {};
	render() {
		return (
			<div className='App'>
				<header className='header'>
					<div className='header__logo-box'>
						<img src={LogoWhite} alt='Logo' className='header__logo' />
					</div>

					<div className='header__text-box'>
						<h1 className='heading-primary'>
							<span className='heading-primary--main'>Explore</span>
							<span className='heading-primary--sub'>Life in the Outdoors</span>
						</h1>

						<a href='#tours' className='btn btn--white btn--animated'>
							Check our tours
						</a>
					</div>
				</header>

				<main>
					<section className='section-about'>
						<div className='u-center-text u-margin-bottom-big'>
							<h2 className='heading-secondary'>
								Tours for all kinds of adventurous people
							</h2>
						</div>

						<div className='row'>
							<div className='col-1-of-2'>
								<h3 className='heading-tertiary u-margin-bottom-small'>
									Fall in love with the outdoors
								</h3>
								<p className='paragraph'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nisi
									nihil! Expedita, sequi ipsum odio necessitatibus enim repudiandae. Ipsum
									quod illum facilis voluptates ratione inventore.
								</p>

								<h3 className='heading-tertiary u-margin-bottom-small'>
									Go on adventures like never before
								</h3>
								<p className='paragraph'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									consectetur, voluptatum omnis, quia aut nostrum odit repellendus ratione
									.
								</p>

								<a href='#' className='btn-text'>
									Learn more &rarr;
								</a>
							</div>
							<div className='col-1-of-2'>
								<div className='composition'>
									<img
										src={Nat1Large}
										alt='In the woods'
										className='composition__photo composition__photo--p1'
									/>
									<img
										src={Nat2Large}
										alt='Riding a bike through the open field'
										className='composition__photo composition__photo--p2'
									/>
									<img
										src={Nat3Large}
										alt='Person hiking on top of a mountain'
										className='composition__photo composition__photo--p3'
									/>
								</div>
							</div>
						</div>
					</section>

					<section className='section-features'>
						<div className='row'>
							<div className='col-1-of-4'>
								<div className='feature-box'>
									<i className='feature-box__icon icon-basic-world'></i>
									<h3 className='heading-tertiary u-margin-bottom-small'>
										Explore the world
									</h3>
									<p className='feature-box__text'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nisi
										nihil! Expedita, sequi ipsum odio necessitatibus
									</p>
								</div>
							</div>
							<div className='col-1-of-4'>
								<div className='feature-box'>
									<i className='feature-box__icon icon-basic-compass'></i>
									<h3 className='heading-tertiary u-margin-bottom-small'>Meet nature</h3>
									<p className='feature-box__text'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nisi
										nihil! Expedita, sequi ipsum odio necessitatibus
									</p>
								</div>
							</div>
							<div className='col-1-of-4'>
								<div className='feature-box'>
									<i className='feature-box__icon icon-basic-map'></i>
									<h3 className='heading-tertiary u-margin-bottom-small'>
										Find your way
									</h3>
									<p className='feature-box__text'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nisi
										nihil! Expedita, sequi ipsum odio necessitatibus
									</p>
								</div>
							</div>
							<div className='col-1-of-4'>
								<div className='feature-box'>
									<i className='feature-box__icon icon-basic-heart'></i>
									<h3 className='heading-tertiary u-margin-bottom-small'>
										Live a healthier life
									</h3>
									<p className='feature-box__text'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nisi
										nihil! Expedita, sequi ipsum odio necessitatibus
									</p>
								</div>
							</div>
						</div>
					</section>

					<section className='section-tours' id='tours'>
						<div className='u-center-text u-margin-bottom-big'>
							<h2 className='heading-secondary'>Most popular tours</h2>
						</div>
						<div className='row'>
							<div className='col-1-of-3'>
								<div className='card'>
									<div className='card__side card__side--front'>
										<div className='card__picture card__picture--1'>&nbsp;</div>
										<h4 className='card__heading'>
											<span className='card__heading-span card__heading-span--1'>
												The Sea Explorer
											</span>
										</h4>
										<div className='card__details'>
											<ul>
												<li>3 day tour</li>
												<li>Up to 30 people</li>
												<li>2 tour guides</li>
												<li>Sleep in cozy hotels</li>
												<li>Difficulty: easy</li>
											</ul>
										</div>
									</div>
									<div className='card__side card__side--back card__side--back-1'>
										<div className='card__cta'>
											<div className='card__price-box'>
												<p className='card__price-only'>Only</p>
												<p className='card__price-value'>$297</p>
											</div>
											<a href='#' className='btn btn--white'>
												Book now!
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className='col-1-of-3'>
								<div className='card'>
									<div className='card__side card__side--front'>
										<div className='card__picture card__picture--2'>&nbsp;</div>
										<h4 className='card__heading'>
											<span className='card__heading-span card__heading-span--2'>
												The Forest Hiker
											</span>
										</h4>
										<div className='card__details'>
											<ul>
												<li>7 day tour</li>
												<li>Up to 40 people</li>
												<li>6 tour guides</li>
												<li>Sleep in provided tents</li>
												<li>Difficulty: medium</li>
											</ul>
										</div>
									</div>
									<div className='card__side card__side--back card__side--back-2'>
										<div className='card__cta'>
											<div className='card__price-box'>
												<p className='card__price-only'>Only</p>
												<p className='card__price-value'>$497</p>
											</div>
											<a href='#' className='btn btn--white'>
												Book now!
											</a>
										</div>
									</div>
								</div>
							</div>

							<div className='col-1-of-3'>
								<div className='card'>
									<div className='card__side card__side--front'>
										<div className='card__picture card__picture--3'>&nbsp;</div>
										<h4 className='card__heading'>
											<span className='card__heading-span card__heading-span--3'>
												The Snow Adventure
											</span>
										</h4>
										<div className='card__details'>
											<ul>
												<li>5 day tour</li>
												<li>Up to 15 people</li>
												<li>3 tour guides</li>
												<li>Sleep in provided tents</li>
												<li>Difficulty: hard</li>
											</ul>
										</div>
									</div>
									<div className='card__side card__side--back card__side--back-3'>
										<div className='card__cta'>
											<div className='card__price-box'>
												<p className='card__price-only'>Only</p>
												<p className='card__price-value'>$897</p>
											</div>
											<a href='#' className='btn btn--white'>
												Book now!
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='u-center-text u-margin-top-big'>
							<a href='#' className='btn btn--blue'>
								Discover all tours
							</a>
						</div>
					</section>

					<section className='section-stories'>
						<div className='u-center-text u-margin-bottom-big'>
							<h2 className='heading-secondary'>We make people geniunely happy</h2>
						</div>

						<div className='row'>
							<div className='story'>
								<figure className='story__shape'>
									<img src={Nat8} alt='Person on a tour' className='story__img' />
								</figure>
								<div className='story__text'>
									<h3 className='heading-tertiary u-margin-bottom-small'>
										I had the best week ever with my family
									</h3>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
										molestias perspiciatis, animi aliquam non porro libero veniam beatae
										ratione modi esse totam vitae mollitia in veritatis similique itaque
										dicta? Ratione.
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
				{/* <!-- <section className="grid-test">
			<div className="row">
				<div className="col-1-of-2">
					Col 1 of 2
				</div>
				<div className="col-1-of-2">
					Col 1 of 2
				</div>
			</div>

			<div className="row">
				<div className="col-1-of-3">
					Col 1 of 3
				</div>
				<div className="col-1-of-3">
					Col 1 of 3
				</div>
				<div className="col-1-of-3">
					Col 1 of 3
				</div>
			</div>

			<div className="row">
				<div className="col-1-of-3">
					Col 1 of 3
				</div>
				<div className="col-2-of-3">
					Col 2 of 3
				</div>
			</div>

			<div className="row">
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
			</div>

			<div className="row">
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-2-of-4">
					Col 2 of 4
				</div>
			</div>

			<div className="row">
				<div className="col-1-of-4">
					Col 1 of 4
				</div>
				<div className="col-3-of-4">
					Col 3 of 4
				</div>
			</div>
		</section> --> */}
			</div>
		);
	}
}

export default App;
