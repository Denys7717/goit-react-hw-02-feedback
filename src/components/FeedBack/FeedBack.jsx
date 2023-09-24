import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let count = this.state.good;
    if (count) {
      return Math.floor((this.state.good * 100) / this.countTotalFeedback());
    }
    return count;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={this.state} onClick={this.handleClick} />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default FeedBack;
