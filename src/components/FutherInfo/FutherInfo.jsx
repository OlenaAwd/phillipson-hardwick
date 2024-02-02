import React from 'react';
import 'odometer/themes/odometer-theme-default.css';
import ControlledAccordions from '../Accordion';
import AnalyticsTracker from '../AnalyticsTracker';
import Statsbar from '../Statsbar/Statsbar';
import Button from '../Button';
import WizardStore from '../../store/WizardStore';
import styles from './FutherInfo.module.scss';
import Media from '../../images/Media icon.svg';
import FastService from '../../images/Fast service icon.svg';
import Calendar from '../../images/Calendar icon.svg';
import Tax from '../../images/100 tax icon.svg';
import Money from '../../images/Money icon.svg';

const FutherInfo = ({ propsClass, scroll }) => {
  const gaEventTracker = AnalyticsTracker('Button');

  const handleButtonClick = () => {
    WizardStore.startQuiz();
    scroll();
    gaEventTracker('call');
  };

  return (
    <main>
      <section className={styles.PPI_Section}>
        <div className={styles.PPI_Container}>
          <div className={styles.PPI_InnerContainer}>
            <div className={styles.PPI_Compensation}>
              <img className={styles.PPI_icon} src={Money} alt="Money" />
              <p className={styles.PPI_text}>
                PPI payouts included statutory interest compensation. 20% of
                this was withheld and paid directly to HMRC.
              </p>
            </div>
            <div className={styles.PPI_Compensation}>
              <img className={styles.PPI_tax} src={Tax} alt="Tax" />
              <p className={styles.PPI_text}>
                Thanks to government introduced tax allowances, most people are{' '}
                <span className={styles.PPI_span}>
                  entitled to a full rebate
                </span>{' '}
                of all withheld tax.
              </p>
            </div>
            <div className={styles.PPI_Compensation}>
              <img
                className={styles.PPI_calendar}
                src={Calendar}
                alt="Calendar"
              />
              <p className={styles.PPI_text}>
                <span className={styles.PPI_span}>Find out for free</span> how
                much you could be owed and start your claim today. You could
                receive your refund in as little as 2-weeks.
              </p>
            </div>
          </div>
          <div className={styles.PPI_Btn}>
            <Button
              classes={`${styles.button} ${propsClass}`}
              onClick={handleButtonClick}
            >
              <span className={styles.buttonText}>Check my claim</span>
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.furtherInfo}>
        <ControlledAccordions />
      </section>
      <section className={styles.refund}>
        <h3 className={styles.refundHeader}>Average refund:</h3>
        <div className={styles.refundWrapper}>
          <h2 className={styles.refundSumm}>£</h2>
          <h2 className={styles.refundSumm}>
            <Statsbar duration={500} value={262.06} theme="default" />
          </h2>
        </div>

        <p className={styles.refundDesc}>
          Our average customer refund is £262.06. Every claim is unique so you
          could be owed a lot more
        </p>

        <p className={styles.refundText}>
          Use our fast-track online form to check your claim for free
        </p>
        <div className={styles.PPI_Btn}>
          <Button color="green" onClick={handleButtonClick}>
            <span className={styles.buttonText}>Check my claim</span>
          </Button>
        </div>
      </section>
      <section className={styles.common}>
        <div className={styles.fastService}>
          <img
            className={styles.fastServiceIcon}
            src={FastService}
            alt="Fast Service"
          />
          <h3 className={styles.fastServiceHeader}>Fast Service</h3>
          <p className={styles.fastServiceText}>
            Your claim is posted to HMRC{' '}
            <span className={styles.fastServiceSpan}>the very next day</span>.
          </p>
          <p className={styles.fastServiceText}>
            HMRC aim to process claims within 6-8 weeks.
          </p>
          <p className={styles.fastServiceText}>
            Some of our customers have received their refunds in{' '}
            <span className={styles.fastServiceSpan}>as little as 2-weeks</span>
            .
          </p>
        </div>
        <div className={styles.media}>
          <img className={styles.mediaIcon} src={Media} alt="Media" />
          <h2 className={styles.mediaHeader}>
            <span>What the media is saying</span>
          </h2>
          <div className={styles.mediaCont}>
            <ul className={styles.mediaList}>
              <li className={styles.mediaItem}>
                <p className={styles.mediaText}>
                  “WHAT MANY DON’T KNOW IS THAT ON THEIR PPI PAY OUT MONEY, YOU
                  WOULD HAVE PAID TAX ON IT… SO YOU CAN RECLAIM IT BACK”
                </p>
                <p className={styles.mediaName}>ITV</p>
              </li>
              <li className={styles.mediaItem}>
                <p className={styles.mediaText}>
                  “MANY CLAIMANTS WERE NOT LIABLE FOR THE TAX AUTOMATICALLY
                  DEDUCTED FROM COMPENSATION PAYMENTS, AND ARE THEREFORE
                  ENTITLED TO RECLAIM IT”
                </p>
                <p className={styles.mediaName}>THE GUARDIAN</p>
              </li>
              <li className={styles.mediaItem}>
                <p className={styles.mediaText}>
                  “CONSUMERS ARE MADE TO PAY TAX ON THE INTEREST. IT’S ANOTHER
                  TWIST OF THE KNIFE FOR LONG-SUFFERING BANK CUSTOMERS”{' '}
                </p>
                <p className={styles.mediaName}>DAILY MAIL</p>
              </li>
              <li className={styles.mediaItem}>
                <p className={styles.mediaText}>
                  “THE TREASURY SHOULD NOT BENEFIT FROM A TAX WINDFALL OWING TO
                  THE COMPENSATION PAYMENTS”
                </p>
                <p className={styles.mediaName}>BBC</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
export default FutherInfo;
