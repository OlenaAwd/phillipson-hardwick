import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Container, Accordion, Typography } from '@mui/material';
import styles from './Accordion.module.scss';

const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ maxWidth: '972px', marginBottom: '50px' }}>
      <Typography
        align="center"
        sx={{
          fontSize: '27px',
          fontWeight: '700',
          lineHeight: '20px',
          color: '#1A374D',
          marginBottom: '38px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Further Information
      </Typography>
      <Accordion
        square={true}
        disableGutters={true}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ backgroundColor: '#E8EDEF' }}
      >
        <AccordionSummary
          sx={{
            fontWeight: '700',
            fontSize: '19px',
            lineHeight: '28px',
            paddingTop: '28px',
          }}
          expandIcon={
            <AddOutlinedIcon
              sx={{
                fontSize: '19px',
                color: '#47C9A7',
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <span style={{ paddingBottom: '20px' }}>Why were you taxed?</span>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordion}>
            Your PPI payout included statutory interest compensation. Interest
            gains are subject to income tax depending on your annual income and
            the tax allowances you are eligible for. Rather than looking at
            every individual circumstance, the bank withheld 20% from all
            compensation and paid it directly to HMRC.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        disableGutters={true}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{ backgroundColor: '#E8EDEF' }}
      >
        <AccordionSummary
          sx={{
            fontWeight: '700',
            fontSize: '19px',
            lineHeight: '28px',
            paddingTop: '28px',
          }}
          expandIcon={
            <AddOutlinedIcon
              sx={{
                fontSize: '19px',
                color: '#47C9A7',
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <span style={{ paddingBottom: '20px' }}>
            What tax allowances can you use?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordion}>
            UK taxpayers have a Personal Allowance of £12,500. You can earn this
            amount without having to pay any income tax. On top of this, you
            also have a Personal Savings Allowance of either £500 or £1,000 per
            year. The statutory interest compensation you received falls under
            this allowance.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        disableGutters={true}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{ backgroundColor: '#E8EDEF' }}
      >
        <AccordionSummary
          sx={{
            fontWeight: '700',
            fontSize: '19px',
            lineHeight: '28px',
            paddingTop: '28px',
          }}
          expandIcon={
            <AddOutlinedIcon
              sx={{
                fontSize: '19px',
                color: '#47C9A7',
              }}
            />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <span style={{ paddingBottom: '20px' }}>
            How do I know if I was taxed?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordion}>
            When your bank or lender upheld your PPI claim they issued you with
            a Final Response Letter. Within this letter was details of the
            compensation you would receive, inclusive of how much tax was being
            deducted. Don’t worry if you no longer have this, we can help
            request it.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square={true}
        disableGutters={true}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        sx={{ backgroundColor: '#E8EDEF' }}
      >
        <AccordionSummary
          sx={{
            fontWeight: '700',
            fontSize: '19px',
            lineHeight: '28px',
            paddingTop: '28px',
          }}
          expandIcon={
            <AddOutlinedIcon
              sx={{
                fontSize: '19px',
                color: '#47C9A7',
              }}
            />
          }
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <span style={{ paddingBottom: '20px' }}>
            How can you claim your refund?
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.accordion}>
            You can claim your refund by contacting HMRC directly and completing
            all the necessary paperwork. Alternatively, you can use our online
            fast track application to start your claim today.
          </p>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
export default ControlledAccordions;
