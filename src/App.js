import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visible, setVisible] = useState(false);

  const options = ['good', 'neutral', 'bad'];

  const onIncrement = select => {
    setVisible('true');

    switch (select) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const feedback = (100 / countTotalFeedback()) * good;
    return feedback.toFixed();
  };

  return (
    <>
      <Section title={'Please leave feedback '}>
        <FeedbackOptions options={options} onIncrement={onIncrement} />
      </Section>

      <Section title={'Statistic'}>
        {visible ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
