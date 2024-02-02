import React from 'react';
import { observer } from 'mobx-react';
import AnalyticsTracker from '../AnalyticsTracker';
import MainForm from '../Form/MainForm';
import Button from '../Button';
import WizardStore from '../../store/WizardStore';
import styles from './Header.module.scss';
import logo from '../../images/Logo.svg';
import safety from '../../images/Safety icon.svg';
import avatarIcon from '../../images/Avatar icon.png';
import stars from '../../images/Stars icon.svg';

function Header({ propsClass, scrollRef }) {
  const gaEventTracker = AnalyticsTracker('Button');
  const quizStart = () => {
    WizardStore.nextStep();
    gaEventTracker('call');
  };

  const nextStep = () => {
    WizardStore.nextStep();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.ImgContainer}>
          <img
            className={styles.headerImg}
            src={logo}
            alt="Phillipson Hardwick"
          />
          <img
            className={styles.headerImgSafety}
            src={safety}
            alt="safety sign"
          />
        </div>
        <h2 className={styles.headerHeadline}>
          Attention all PPI winners…
          <br /> HMRC are paying back an extra{' '}
          <span className={styles.headerSpan}> £2,600</span> in withheld tax.
        </h2>
        <h4 className={styles.headerHeadlineSub}>
          If you received a PPI payout, then you could be due an extra refund.
        </h4>
        <p className={styles.headerHeadlineText}>
          Time is running out to claim. Check today for free using our
          fast-track form.
        </p>
        <div ref={scrollRef}>
          {WizardStore.currentPage > 0 ? (
            <MainForm
              currentPage={WizardStore.currentPage}
              nextStep={nextStep}
            />
          ) : (
            <Button
              classes={`${styles.button} ${propsClass}`}
              onClick={quizStart}
            >
              <span className={styles.buttonText}>Check my claim</span>
            </Button>
          )}
        </div>
        <div className={styles.headerCard}>
          <div>
            <img className={styles.avatarIcon} src={avatarIcon} alt="avatar" />
          </div>
          <div className={styles.rightPart}>
            <img className={styles.stars} src={stars} alt="stars" />
            <p className={styles.cardText}>
              “It was so simple and everything was done online in less than 2
              minutes.{' '}
              <span className={styles.cardSpan}>
                What a great result to receive £476 in the post!{' '}
              </span>
              ”
            </p>
            <p className={styles.cardReviewName}>SARAH C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default observer(Header);
