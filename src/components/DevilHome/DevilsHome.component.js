import PropTypes from 'prop-types';
import { PureComponent } from "react";

import styles from './DevilHome.module.scss';

export class DevilHome extends PureComponent {
  static propTypes = {
    clickCnt: PropTypes.number.isRequired,
    handleClickCount: PropTypes.func.isRequired,
    showTextToComponent: PropTypes.string.isRequired,
  }

  renderCounter() {
    const  { clickCnt } = this.props;

    return clickCnt > 0
      ? (
        <div>
          <p>{ `You have clicked ${ clickCnt } times` }</p>
        </div>
      ) : null;
  }

  renderBtn() {
    const { handleClickCount } = this.props;
    return (
      <h1 onClick={ handleClickCount }>
        The Devils Playground
      </h1>
    );
  }

  renderMyProp() {
    const { showTextToComponent } = this.props;

    return (
      <p>{ showTextToComponent }</p>
    )
  }

  render() {
    return (
      <div className={ styles.DevilsHome }>
       { this.renderBtn() }
       { this.renderMyProp() }
       { this.renderCounter() }
      </div>
    );
  }
}

export default DevilHome;
