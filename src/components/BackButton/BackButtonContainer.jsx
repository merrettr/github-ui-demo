import { withRouter } from 'react-router-dom';
import { compose, mapProps } from 'recompose';
import BackButton from './BackButton';

export default compose(
  withRouter,
  mapProps(({ history, ...props }) => ({
    onBack: () => history.goBack(),
    ...props,
  }))
)(BackButton);
